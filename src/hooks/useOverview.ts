import {
  getApr,
  getCommunityPool,
  getInflation,
  getMarketData,
  getStakingPool,
  getSupply,
  getValidatorStats,
} from "@/api/overview.api";
import { getBlockTime, getPriceData } from "@/api/overview.api";
import { useOverviewStore } from "@/stores/overview.store";
import {
  convertToStandardUnit,
  formatDateShort,
  formatNumber,
} from "@/utils/common.utils";
import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";

export const useOverviewQuery = () => {
  const setLatestPrice = useOverviewStore((state) => state.setLatestPrice);
  const setPriceChange24 = useOverviewStore((state) => state.setPriceChange24);
  const setMarketCap = useOverviewStore((state) => state.setMarketCap);
  const setVolume24 = useOverviewStore((state) => state.setVolume24);
  const setPriceChart = useOverviewStore((state) => state.setPriceChart);
  const setValidatorStats = useOverviewStore(
    (state) => state.setValidatorStats
  );
  const setValidatorPercent = useOverviewStore(
    (state) => state.setValidatorPercent
  );
  const setBlockTime = useOverviewStore((state) => state.setBlockTime);
  const setStakingAPR = useOverviewStore((state) => state.setStakingAPR);
  const setInflation = useOverviewStore((state) => state.setInflation);
  const setSupply = useOverviewStore((state) => state.setSupply);
  const setBonded = useOverviewStore((state) => state.setBonded);
  const setCommunityPool = useOverviewStore((state) => state.setCommunityPool);

  /* Start of Query API for Overview Data */
  const { data: marketData, isLoading: loadingMarketData } = useQuery({
    queryKey: ["market-data", { vs_currency: "usd", days: 7 }],
    queryFn: () => getMarketData({ vs_currency: "usd", days: 7 }),
  });

  const { data: priceData, isLoading: loadingPrice } = useQuery({
    queryKey: ["price-data"],
    queryFn: () => getPriceData(),
  });

  const { data: poolData, isLoading: loadingPool } = useQuery({
    queryKey: ["staking-pool"],
    queryFn: () => getStakingPool(),
  });

  const { data: blockTimeData, isLoading: loadingBlockTime } = useQuery({
    queryKey: ["block-time"],
    queryFn: () => getBlockTime(),
  });

  const { data: validatorStatsData, isLoading: loadingValidatorStats } =
    useQuery({
      queryKey: ["validator-stats"],
      queryFn: () => getValidatorStats(),
    });

  const { data: stakingAPRData, isLoading: loadingStakingAPR } = useQuery({
    queryKey: ["staking-apr"],
    queryFn: () => getApr(),
  });

  const { data: inflationData, isLoading: loadingInflation } = useQuery({
    queryKey: ["inflation"],
    queryFn: () => getInflation(),
  });

  const { data: supplyData, isLoading: loadingSupply } = useQuery({
    queryKey: ["supply"],
    queryFn: () => getSupply(),
  });

  const { data: communityPoolData, isLoading: loadingCommunityPool } = useQuery(
    {
      queryKey: ["community-pool"],
      queryFn: () => getCommunityPool(),
    }
  );
  {
    /* End of Query API for Overview Data */
  }

  useEffect(() => {
    if (marketData) {
      setPriceChart({
        prices: marketData.prices.map((price) => formatNumber(price[1], 2)),
        dates: marketData.prices.map((price) => formatDateShort(price[0])),
      });
    }

    if (priceData) {
      setMarketCap(priceData.marketcap);
      setLatestPrice(priceData.price);
      setPriceChange24(priceData.pricechange24h);
      setVolume24(priceData.totalvolume);
    }

    if (blockTimeData) {
      setBlockTime(blockTimeData.secs);
    }

    if (validatorStatsData) {
      setValidatorStats(validatorStatsData);
      setValidatorPercent(
        formatNumber(
          (validatorStatsData.active / validatorStatsData.total) * 100,
          2
        )
      );
    }

    if (stakingAPRData) {
      setStakingAPR(formatNumber(stakingAPRData * 100, 2));
    }

    if (inflationData) {
      setInflation(inflationData * 100);
    }

    if (supplyData) {
      setSupply(Number(convertToStandardUnit(Number(supplyData.amount))));
    }

    if (poolData) {
      setBonded(Number(convertToStandardUnit(Number(poolData.bonded_tokens))));
    }

    if (communityPoolData) {
      setCommunityPool(
        Number(convertToStandardUnit(Number(communityPoolData.amount)))
      );
    }
  }, [
    marketData,
    priceData,
    blockTimeData,
    validatorStatsData,
    stakingAPRData,
    inflationData,
    supplyData,
    communityPoolData,
    poolData,
  ]);

  const price = useOverviewStore((state) => ({
    marketCap: state.marketCap,
    latestPrice: state.latestPrice,
    priceChange24: state.priceChange24,
    volume24: state.volume24,
  }));

  const blockTime = useOverviewStore((state) => state.blockTime);
  const priceChart = useOverviewStore((state) => state.priceChart);
  const validatorStats = useOverviewStore((state) => state.validatorStats);
  const validatorPercent = useOverviewStore((state) => state.validatorPercent);
  const inflation = useOverviewStore((state) => state.inflation);
  const stakingAPR = useOverviewStore((state) => state.stakingAPR);
  const supply = useOverviewStore((state) => state.supply);
  const bonded = useOverviewStore((state) => state.bonded);
  const communityPool = useOverviewStore((state) => state.communityPool);

  return {
    price,
    blockTime,
    priceChart,
    validatorStats,
    validatorPercent,
    communityPool,
    stakingAPR,
    inflation,
    supply,
    bonded,
    loadingSupply,
    loadingStakingAPR,
    loadingInflation,
    loadingMarketData,
    loadingPrice,
    loadingBlockTime,
    loadingValidatorStats,
    loadingCommunityPool,
  };
};
