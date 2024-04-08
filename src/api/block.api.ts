import { BlockData, BlockResponseData } from "@/types/data.type";
import createRequest from "@/utils/api.utils";

export const getLatestBlockData = createRequest<
  never,
  never,
  BlockResponseData
>(import.meta.env.VITE_APP_BLOCKS_API_URL, "get");

export const gettopBlocks = createRequest<
  { count?: number },
  never,
  BlockData[]
>(import.meta.env.VITE_APP_API_URL + "blocks", "get");
