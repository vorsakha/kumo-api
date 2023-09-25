import ResourcesService from "@modules/resources/services/resources.service";
import { Intervals } from "@modules/resources/interfaces/resources.interface";
import IchimokuServiceInterface from "@modules/calculation/interfaces/ichimoku-service.interface";
import {
  Ichimoku,
  SIGNAL,
} from "@modules/calculation/interfaces/ichimoku.interface";

export default class IchimokuService implements IchimokuServiceInterface {
  resourcesService = new ResourcesService();

  private getHL(high: string[], low: string[], periods: number, start = 1) {
    const sliceHigh = high.slice(start, periods + 1).map(parseFloat);
    const sliceLow = low.slice(start, periods + 1).map(parseFloat);

    const highNumber = Math.max(...sliceHigh);
    const lowNumber = Math.min(...sliceLow);

    return (highNumber + lowNumber) / 2;
  }

  private getChikou(
    close: string[],
    high: string[],
    low: string[],
    lengthOne = 20,
    lengthTwo = 60,
    lengthThree = 120,
  ): SIGNAL {
    const price = parseFloat(high[31]);
    const chikou = parseFloat(close[1]);
    const tenkan = this.getHL(high, low, lengthOne + 30, 31);
    const kijun = this.getHL(high, low, lengthTwo + 30, 31);
    const spanA =
      (this.getHL(high, low, lengthOne + 60, 61) +
        this.getHL(high, low, lengthTwo + 60, 61)) /
      2;
    const spanB = this.getHL(high, low, lengthThree + 60, 61);

    let result;

    if (
      chikou > price &&
      chikou > tenkan &&
      chikou > kijun &&
      chikou > spanA &&
      chikou > spanB
    ) {
      result = SIGNAL.POSITIVE;
    } else if (
      chikou < price &&
      chikou < tenkan &&
      chikou < kijun &&
      chikou < spanA &&
      chikou < spanB
    ) {
      result = SIGNAL.NEGATIVE;
    } else {
      result = SIGNAL.NEUTRAL;
    }

    return result;
  }

  async getIchimoku(
    symbol: string,
    intervals: Intervals[],
    lengthOne = 20,
    lengthTwo = 60,
    lengthThree = 120,
    stopTolerance = 1,
  ): Promise<Record<Intervals, Ichimoku>> {
    const response = {} as Record<Intervals, Ichimoku>;

    const resource = await this.resourcesService.getTicketHistory(
      symbol,
      intervals,
    );

    intervals.forEach((interval) => {
      const { close } = resource[interval];
      const { high } = resource[interval];
      const { low } = resource[interval];

      const tenkan = this.getHL(high, low, lengthOne);
      const kijun = this.getHL(high, low, lengthTwo);
      const spanA =
        (this.getHL(high, low, lengthOne + 30, 31) +
          this.getHL(high, low, lengthTwo + 30, 31)) /
        2;
      const spanB = this.getHL(high, low, lengthThree + 30, 31);
      const spanAFuture = (tenkan + kijun) / 2;
      const spanBFuture = this.getHL(high, low, lengthThree);
      const chikou = this.getChikou(
        close,
        high,
        low,
        lengthOne,
        lengthTwo,
        lengthThree,
      );
      const stop = parseFloat((kijun - kijun * stopTolerance).toFixed(4));

      response[interval] = {
        price: parseFloat(close[1]),
        lowest: parseFloat(low[low.length - 1]),
        tenkan,
        kijun,
        spanAPast: spanA,
        spanBPast: spanB,
        spanAFuture,
        spanBFuture,
        chikou,
        stop,
      };
    });

    return response;
  }
}
