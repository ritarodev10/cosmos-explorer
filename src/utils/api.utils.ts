/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, Method } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Request<TParams = any, TData = any, TResult = any> = (
  params?: TParams,
  data?: TData
) => Promise<TResult>;

function createRequest<TParams = any, TData = any, TResult = any>(
  url: string,
  method: Method,
  headers: Record<string, string> = {}
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
        headers,
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
