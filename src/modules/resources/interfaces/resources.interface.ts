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

export type { ResourcesPublicInterface, ResourcesTicketPriceProps };
