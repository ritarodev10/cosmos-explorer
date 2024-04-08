import { getLatestBlockData, gettopBlocks } from "@/api/block.api";
import { useOverviewStore } from "@/stores/overview.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useBlockQuery = () => {
  const setLatestBlock = useOverviewStore((state) => state.setLatestBlock);
  const setChainId = useOverviewStore((state) => state.setChainId);

  const { data: latestBlockData, isLoading: loadingBlock } = useQuery({
    queryKey: ["block-data"],
    queryFn: () => getLatestBlockData(),
    refetchInterval: 5000,
  });

  const { data: topBlocksData, isLoading: loadingtopBlocks } = useQuery({
    queryKey: ["top10-blocks", { count: 10 }],
    queryFn: () => gettopBlocks({ count: 10 }),
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (latestBlockData && topBlocksData) {
      setLatestBlock(topBlocksData[0].height);
      setChainId(latestBlockData.block.header.chain_id);
    }
  }, [latestBlockData, topBlocksData]);

  const latestBlock = useOverviewStore((state) => state.latestBlock);
  const chainId = useOverviewStore((state) => state.chainId);

  return {
    topBlocksData,
    latestBlock,
    chainId,
    loadingBlock,
    loadingtopBlocks,
  };
};
