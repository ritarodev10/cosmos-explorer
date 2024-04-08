import { TransactionData } from "@/types/data.type";
import { create } from "zustand";

type TransactionState = {
  transactionData: TransactionData[];
};

type TransactionAction = {
  setTransactionData: (TransactionData: TransactionData[]) => void;
};

type TransactionStore = TransactionState & TransactionAction;

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactionData: [],

  setTransactionData: (newData: TransactionData[]) =>
    set((state) => ({
      transactionData: [...newData, ...state.transactionData],
    })),
}));
