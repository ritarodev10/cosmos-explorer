import { getLatestBlockData } from "@/api/block.api";
import { useTransactionStore } from "@/stores/transaction.store";
import { TransactionData } from "@/types/data.type";
import { hashTx } from "@/utils/decode.utils";
import { fromBase64 } from "@cosmjs/encoding";
import { decodeTxRaw, type DecodedTxRaw } from "@cosmjs/proto-signing";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useTransaction = () => {
  const setTransactionData = useTransactionStore(
    (state) => state.setTransactionData
  );

  const { data: latestBlockData, isLoading: loadingBlock } = useQuery({
    queryKey: ["block-data"],
    queryFn: () => getLatestBlockData(),
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (!latestBlockData) return;
    const txs = [] as { hash: string; tx: DecodedTxRaw }[];
    latestBlockData?.block.data.txs.map((tx: string) => {
      const raw = fromBase64(tx);
      txs.push({
        hash: hashTx(raw),
        tx: decodeTxRaw(raw),
      });
    });

    const txData: TransactionData[] = txs.map((tx) => ({
      height: latestBlockData.block.header.height,
      hash: tx.hash,
      fees: Number(tx.tx.authInfo.fee?.amount[0].amount) / 1000000,
    }));

    setTransactionData(txData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latestBlockData]);

  const transactionData = useTransactionStore((state) => state.transactionData);
  return {
    transactionData,
    latestBlockData,
    loadingBlock,
  };
};

export default useTransaction;
