/ * Api Utils Types * /;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Request<TParams = any, TData = any, TResult = any> = (
  params?: TParams,
  data?: TData
) => Promise<TResult>;

/ * Market Data Types * /;
export type MarketDataParams = {
  vs_currency: string;
  days: number;
};

export type MarketDataResult = {
  prices: NumberData[];
  market_caps: NumberData[];
  total_volumes: NumberData[];
};

type NumberData = [number, number];
