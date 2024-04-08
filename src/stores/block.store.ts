import { BlockData } from "@/types/data.type";
import { create } from "zustand";

type BlockStore = {
  blockData: BlockData | null;
  setBlockData: (blockData: BlockData) => void;
};

export const useBlockStore = create<BlockStore>((set) => ({
  blockData: null,
  setBlockData: (blockData: BlockData) => set({ blockData }),
}));
