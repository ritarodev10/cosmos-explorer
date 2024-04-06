import { getMarketData } from "@/api/market-data.api";
import { useMarketDataStore } from "@/stores/overview.store";
import { formatDateShort } from "@/utils/common.utils";
import { useQuery } from "@tanstack/react-query";

export const useMarketDataQuery = ({ days }: { days: number }) => {
  const setMarketCap = useMarketDataStore((state) => state.setMarketCap);
  const setLatestPrice = useMarketDataStore((state) => state.setLatestPrice);
  const setPriceChange24 = useMarketDataStore(
    (state) => state.setPriceChange24
  );
  const setVolume24 = useMarketDataStore((state) => state.setVolume24);
  const setPriceChart = useMarketDataStore((state) => state.setPriceChart);

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: ["market-data", { vs_currency: "usd", days }],
    queryFn: () => getMarketData({ vs_currency: "usd", days }),
  });

  if (data) {
    setMarketCap(data.market_caps[data.market_caps.length - 1][1]);
    setLatestPrice(data.prices[data.prices.length - 1][1]);
    setPriceChange24(
      data.prices[data.prices.length - 1][1] -
        data.prices[data.prices.length - 2][1]
    );
    setVolume24(data.total_volumes[data.total_volumes.length - 1][1]);
    setPriceChart({
      prices: data.prices.map((price) => price[1]),
      dates: data.prices.map((price) => formatDateShort(price[0])),
    });
  }

  const marketData = useMarketDataStore((state) => ({
    marketCap: state.marketCap,
    latestPrice: state.latestPrice,
    priceChange24: state.priceChange24,
    volume24: state.volume24,
    priceChart: state.priceChart,
  }));

  return { marketData, isLoading, isError };
};
