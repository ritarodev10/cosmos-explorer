import { ValidatorStats } from "@/types/data.type";
import { create } from "zustand";

type OverviewState = {
  latestPrice: number;
  priceChange24: number;
  marketCap: number;
  volume24: number;
  priceChart: PriceChartDataType;
  validatorStats: ValidatorStats;
  validatorPercent: number;
  latestBlock: number;
  blockTime: number;
  chainId: string;
  stakingAPR: number;
  inflation: number;
  supply: number;
  communityPool: number;
};

export type PriceChartDataType = {
  prices: number[];
  dates: string[];
};

type OverviewAction = {
  setLatestPrice: (latestPrice: number) => void;
  setPriceChange24: (priceChange24: number) => void;
  setMarketCap: (marketCap: number) => void;
  setVolume24: (volume24: number) => void;
  setPriceChart: (priceChart: { prices: number[]; dates: string[] }) => void;
  setValidatorStats: (validatorStats: ValidatorStats) => void;
  setValidatorPercent: (validatorPercent: number) => void;
  setLatestBlock: (latestBlock: number) => void;
  setBlockTime: (blockTime: number) => void;
  setChainId: (chainId: string) => void;
  setStakingAPR: (stakingAPR: number) => void;
  setInflation: (inflation: number) => void;
  setSupply: (supply: number) => void;
  setCommunityPool: (communityPool: number) => void;
};

type OverviewStore = OverviewState & OverviewAction;

export const useOverviewStore = create<OverviewStore>((set) => ({
  latestPrice: 0,
  priceChange24: 0,
  marketCap: 0,
  volume24: 0,
  validatorStats: {
    active: 0,
    total: 0,
  },
  validatorPercent: 0,
  priceChart: {
    prices: [],
    dates: [],
  },
  latestBlock: 0,
  blockTime: 0,
  chainId: "",
  stakingAPR: 0,
  inflation: 0,
  supply: 0,
  communityPool: 0,
  setLatestPrice: (latestPrice: number) => set({ latestPrice }),
  setPriceChange24: (priceChange24: number) => set({ priceChange24 }),
  setMarketCap: (marketCap: number) => set({ marketCap }),
  setVolume24: (volume24: number) => set({ volume24 }),
  setPriceChart: (priceChart) => set({ priceChart }),
  setValidatorStats: (validatorStats: ValidatorStats) =>
    set({ validatorStats }),
  setValidatorPercent: (validatorPercent: number) => set({ validatorPercent }),
  setLatestBlock: (latestBlock: number) => set({ latestBlock }),
  setBlockTime: (blockTime: number) => set({ blockTime }),
  setChainId: (chainId: string) => set({ chainId }),
  setStakingAPR: (stakingAPR: number) => set({ stakingAPR }),
  setInflation: (inflation: number) => set({ inflation }),
  setSupply: (supply: number) => set({ supply }),
  setCommunityPool: (communityPool: number) => set({ communityPool }),
}));
