import { TicketPriceData } from "@modules/resources/interfaces/prices.interface";
import {
  Intervals,
  ResourcesPublicInterface,
} from "@modules/resources/interfaces/resources.interface";
import { SymbolData } from "./ticket.interface";

interface ResourcesServiceInterface {
  getPublicResources(data: ResourcesPublicInterface): Promise<unknown>;
  getTicketSymbols(): Promise<SymbolData[]>;
  getTicketHistory(
    pair: string,
    intervals: Intervals[],
  ): Promise<TicketPriceData>;
}

export default ResourcesServiceInterface;
