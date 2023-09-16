import axios from "axios";
import querystring from "querystring";
import env from "@config/sanitized-config";

import {
  TicketModel,
  TicketPriceData,
} from "@modules/resources/interfaces/prices.interface";
import ResourcesServiceInterface from "../interfaces/resources-service.interface";
import {
  Intervals,
  ResourcesPublicInterface,
  ResourcesTicketPriceProps,
} from "../interfaces/resources.interface";
import { SymbolData } from "../interfaces/ticket.interface";

class ResourcesService implements ResourcesServiceInterface {
  async getPublicResources({
    path,
    options,
    method = "GET",
  }: ResourcesPublicInterface) {
    const qs = options ? `?${querystring.stringify(options)}` : "";

    const result = await axios({
      method,
      url: `${env.RESOURCE_API_URL}${path}${qs}`,
    });

    return result.data;
  }

  async getTicketSymbols(): Promise<SymbolData[]> {
    const data = await this.getPublicResources({ path: "/v1/exchangeInfo" });

    return data.symbols;
  }

  private async getTicketPrice({
    symbol,
    interval,
    limit = 160 * 2,
  }: ResourcesTicketPriceProps): Promise<TicketModel> {
    const resources = await this.getPublicResources({
      path: "/v1/klines",
      options: {
        symbol,
        limit,
        interval,
      },
    });

    return {
      open: resources[1],
      high: resources[2],
      low: resources[3],
      close: resources[4],
    };
  }

  getTicketHistory = async (
    pair: string,
    intervals: Intervals[],
  ): Promise<TicketPriceData> => {
    const history = {} as TicketPriceData;

    const promises = intervals.map(async (interval) => {
      const data = await this.getTicketPrice({
        symbol: pair,
        interval,
      });
      history[interval] = data;
    });

    await Promise.all(promises);

    return history;
  };
}

export default ResourcesService;
