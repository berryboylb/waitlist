import "client-only";
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { toast } from "sonner"
import { ENDPOINTS } from "@/lib/constant";
import { secureRequest } from "@/lib/api.utils";
import { ResponseType, ResponseErrorType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { APP_KEYS } from "@/lib/constant";
import Cookies from "js-cookie";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { IUser } from "@/types";

export const getQueryAction = (payload: any) => {
  const { endpoint, method, body, headers, isApi = true } = payload;

  const url = isApi ? ENDPOINTS.API_BASE_DEV_URL + endpoint : endpoint;

  return {
    queryFn: () => {
      return secureRequest({
        url,
        method,
        body,
        headers,
      });
    },
    ...payload,
  };
};

function useQueryActionHook<T>(data: any) {
  const router = useRouter();
  const [, , removeValue] = useLocalStorage<IUser | null>(APP_KEYS.USER, null);
  const { queryFn, queryKey, endpoint, ...others } = getQueryAction({
    ...data,
  });

  const queryResult = useQuery<ResponseType<T>, ResponseErrorType>({
    queryFn,
    queryKey: queryKey || endpoint,

    onError: (err: any) => {
      if (err) {
        if (err.response && err.response.data.statusCode === 401) {
          Cookies.remove(APP_KEYS.ACCESS_TOKEN);
          removeValue();
          toast("Login Session Expired");
          router.push("/auth/login");
        }
        // Push the error
      } else {
        //  push the error
      }
    },
    onSettled: () => {
      return;
    },
    retry: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    ...others,
  });

  return {
    ...queryResult,
    value: queryResult.data?.data?.data,
  };
}

export default useQueryActionHook;
