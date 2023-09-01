interface TimeSeriesData {
  timestamp: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  timestampEnd: number;
  quoteVolume: string;
  tradeCount: number;
  takerBuyVolume: string;
  takerBuyQuoteVolume: string;
  ignore: string;
}

export type { TimeSeriesData };
