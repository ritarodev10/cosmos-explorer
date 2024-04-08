import {
  BlockTime,
  MarketDataParams,
  MarketDataResult,
  PriceDataResponse,
  ValidatorStats,
  CommunityPool,
  Supply,
  StakingPool,
} from "@/types/data.type";
import createRequest from "@/utils/api.utils";

export const getMarketData = createRequest<
  MarketDataParams,
  never,
  MarketDataResult
>(import.meta.env.VITE_APP_MARKET_DATA_API_URL, "get");

export const getPriceData = createRequest<never, never, PriceDataResponse>(
  import.meta.env.VITE_APP_API_URL + "market/price",
  "get"
);

export const getBlockTime = createRequest<never, never, BlockTime>(
  import.meta.env.VITE_APP_API_URL + "blocks/avg-time",
  "get"
);

export const getValidatorStats = createRequest<never, never, ValidatorStats>(
  import.meta.env.VITE_APP_API_URL + "validators/stats",
  "get"
);

export const getCommunityPool = createRequest<never, never, CommunityPool>(
  import.meta.env.VITE_APP_API_URL + "bank/community_pool",
  "get"
);

export const getSupply = createRequest<never, never, Supply>(
  import.meta.env.VITE_APP_API_URL + "bank/supply",
  "get"
);

export const getStakingPool = createRequest<never, never, StakingPool>(
  import.meta.env.VITE_APP_API_URL + "bank/staking_pool",
  "get"
);

export const getInflation = createRequest<never, never, number>(
  import.meta.env.VITE_APP_API_URL + "mint/inflation",
  "get"
);

export const getApr = createRequest<never, never, number>(
  import.meta.env.VITE_APP_API_URL + "bank/apr",
  "get"
);
