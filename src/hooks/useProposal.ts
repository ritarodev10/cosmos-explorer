import { getProposalData } from "@/api/proposal.api";
import { useProposalStore } from "@/stores/proposal.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useProposalQuery = () => {
  const setProposalData = useProposalStore((state) => state.setProposalData);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["proposal-data"],
    queryFn: () => getProposalData(),
  });

  useEffect(() => {
    if (data) {
      const proposalData = data.map((proposal) => ({
        id: proposal.id,
        title: proposal.title,
        type: proposal.ttype,
        status: proposal.status,
        votingEnd: proposal.votingEnd,
      }));

      setProposalData(proposalData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const proposalQueryData = useProposalStore((state) => ({
    proposalData: state.proposalData,
  }));

  return { proposalQueryData, isLoading, isError };
};
