import axios from "axios";
import querystring from "querystring";
import env from "@config/sanitized-config";

import ResourcesServiceInterface from "../interfaces/resources-service.interface";
import {
  ResourcesPublicInterface,
  ResourcesTicketPriceProps,
} from "../interfaces/resources.interface";
import { SymbolData } from "../interfaces/ticket.interface";
import { TimeSeriesData } from "../interfaces/prices.interface";

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

    return undefined;
  }

  async getTicketSymbols(): Promise<SymbolData[]> {
    const data = await this.getPublicResources({ path: "/v1/exchangeInfo" });

    return data.symbols;
  }

  async getTicketPrice({
    symbol,
    interval,
    limit = 8,
  }: ResourcesTicketPriceProps): Promise<TimeSeriesData[][]> {
    const resources = await this.getPublicResources({
      path: "/v1/klines",
      options: {
        symbol,
        limit,
        interval,
      },
    });

    return resources;
  }
}

export default ResourcesService;
