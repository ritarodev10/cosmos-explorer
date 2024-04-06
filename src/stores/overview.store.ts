import { create } from "zustand";

type MarketDataState = {
  marketCap: number;
  latestPrice: number;
  priceChange24: number;
  volume24: number;
  priceChart: {
    prices: number[];
    dates: string[];
  };
};

type MarketDataAction = {
  setMarketCap: (marketCap: number) => void;
  setLatestPrice: (latestPrice: number) => void;
  setPriceChange24: (priceChange24: number) => void;
  setVolume24: (volume24: number) => void;
  setPriceChart: (priceChart: { prices: number[]; dates: string[] }) => void;
};

type MarketDataStore = MarketDataState & MarketDataAction;

export const useMarketDataStore = create<MarketDataStore>((set) => ({
  marketCap: 0,
  latestPrice: 0,
  priceChange24: 0,
  volume24: 0,
  priceChart: {
    prices: [],
    dates: [],
  },
  setMarketCap: (marketCap: number) => set({ marketCap }),
  setLatestPrice: (latestPrice: number) => set({ latestPrice }),
  setPriceChange24: (priceChange24: number) => set({ priceChange24 }),
  setVolume24: (volume24: number) => set({ volume24 }),
  setPriceChart: (priceChart) => set({ priceChart }),
}));
