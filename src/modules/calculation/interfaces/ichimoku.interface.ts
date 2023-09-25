enum SIGNAL {
  POSITIVE = "positive",
  NEGATIVE = "negative",
  NEUTRAL = "neutral",
}

interface Ichimoku {
  price: number;
  lowest: number;
  tenkan: number;
  kijun: number;
  spanAPast: number;
  spanBPast: number;
  spanAFuture: number;
  spanBFuture: number;
  chikou: SIGNAL;
  stop: number;
}

export { SIGNAL, Ichimoku };
