interface ResourcesPublicInterface {
  path: string;
  options?: {
    symbol?: string;
    interval?: string;
    limit?: number;
  };
  method?: "GET";
}

interface ResourcesTicketPriceProps {
  symbol: string;
  interval: string;
  limit?: number;
}

enum Intervals {
  SHORT = "4h",
  MEDIUM = "1d",
  LONG = "1w",
}

export type { ResourcesPublicInterface, ResourcesTicketPriceProps };
export { Intervals };
