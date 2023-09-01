interface SymbolData {
  baseAsset: string;
  baseAssetPrecision: number;
  contractType: string;
  deliveryDate: number;
  liquidationFee: string;
  maintMarginPercent: string;
  marginAsset: string;
  marketTakeBound: string;
  maxMoveOrderLimit: number;
  onboardDate: number;
  orderTypes: string[];
  pair: string;
  pricePrecision: number;
  quantityPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  requiredMarginPercent: string;
  settlePlan: number;
  status: string;
  symbol: string;
  timeInForce: string[];
  triggerProtect: string;
  underlyingSubType: string[];
  underlyingType: string;
}

export type { SymbolData };
