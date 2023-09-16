import { Intervals } from "@modules/resources/interfaces/resources.interface";

interface TicketModel {
  open: string[];
  close: string[];
  high: string[];
  low: string[];
}

interface TicketPriceData {
  [Intervals.SHORT]: TicketModel;
  [Intervals.MEDIUM]: TicketModel;
  [Intervals.LONG]: TicketModel;
}

export type { TicketPriceData, TicketModel };
