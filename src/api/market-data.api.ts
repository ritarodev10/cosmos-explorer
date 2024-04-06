import { MarketDataParams, MarketDataResult } from "@/types/api-request.type";
import createRequest from "@/utils/api.utils";

//historical market data include price, market cap, and 24h volume (granularity auto)
const MARKET_CHART_API =
  "https://api.coingecko.com/api/v3/coins/cosmos/market_chart";

export const getMarketData = createRequest<
  MarketDataParams,
  never,
  MarketDataResult
>(MARKET_CHART_API, "get");
