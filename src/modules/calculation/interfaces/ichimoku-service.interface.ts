import { Intervals } from "@modules/resources/interfaces/resources.interface";
import { Ichimoku } from "@modules/calculation/interfaces/ichimoku.interface";

interface IchimokuServiceInterface {
  getIchimoku(
    symbol: string,
    intervals: Intervals[],
    lengthOne?: number,
    lengthTwo?: number,
    lengthThree?: number,
    stopTolerance?: number,
  ): Promise<Record<Intervals, Ichimoku>>;
}

export default IchimokuServiceInterface;
