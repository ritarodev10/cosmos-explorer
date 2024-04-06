/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from "@/types/api-request.type";
import axios, { AxiosResponse, Method } from "axios";

function createRequest<TParams = any, TData = any, TResult = any>(
  url: string,
  method: Method
): Request<TParams, TData, TResult> {
  return async (
    params: TParams = {} as TParams,
    data: TData = {} as TData
  ): Promise<TResult> => {
    try {
      const response: AxiosResponse<TResult> = await axios({
        method,
        url,
        params,
        data,
      });
      return response.data;
    } catch (error: any) {
      console.error(
        "API call error:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };
}

export default createRequest;
