import { TimeSeriesData } from "./prices.interface";
import {
  ResourcesPublicInterface,
  ResourcesTicketPriceProps,
} from "./resources.interface";
import { SymbolData } from "./ticket.interface";

interface ResourcesServiceInterface {
  getPublicResources(data: ResourcesPublicInterface): Promise<unknown>;
  getTicketSymbols(): Promise<SymbolData[]>;
  getTicketPrice(data: ResourcesTicketPriceProps): Promise<TimeSeriesData[][]>;
}

export default ResourcesServiceInterface;
