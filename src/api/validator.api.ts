import { ValidatorResponseData } from "@/types/data.type";
import createRequest from "@/utils/api.utils";

export const getValidatorData = createRequest<
  never,
  never,
  ValidatorResponseData[]
>(import.meta.env.VITE_APP_API_URL + "validators", "get");
