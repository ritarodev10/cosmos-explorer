import { ProposalResponse } from "@/types/data.type";
import createRequest from "@/utils/api.utils";

export const getProposalData = createRequest<never, never, ProposalResponse[]>(
  import.meta.env.VITE_APP_API_URL + "proposals",
  "get"
);
