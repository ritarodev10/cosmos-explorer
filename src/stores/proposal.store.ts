import { ProposalData } from "@/types/data.type";
import { create } from "zustand";

type ProposalState = {
  proposalData: ProposalData[];
};

type ProposalAction = {
  setProposalData: (proposalData: ProposalData[]) => void;
};

type ProposalStore = ProposalState & ProposalAction;

export const useProposalStore = create<ProposalStore>((set) => ({
  proposalData: [],
  setProposalData: (proposalData: ProposalData[]) => set({ proposalData }),
}));
