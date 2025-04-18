import "client-only";
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { toast } from "sonner"
import { ENDPOINTS, APP_KEYS } from "@/lib/constant";
import { secureRequest } from "@/lib/api.utils";
import { ResponseType, ResponseErrorType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { IUser } from "@/types";
const getMutationAction = (mutationData: any) => {
  const { endpoint, method, headers, isApi = true } = mutationData;

  const url = isApi ? ENDPOINTS.API_BASE_DEV_URL + endpoint : endpoint;

  return {
    mutationFn: (body: Record<string, unknown>) =>
      secureRequest({
        url,
        method,
        body,
        headers,
      }),
    ...mutationData,
  };
};

function useCustomMutation<
  P = Record<string, unknown>,
  T = Record<string, unknown>
>(mutationData: any) {
  const router = useRouter();
  const [, , removeValue] = useLocalStorage<IUser | null>(APP_KEYS.USER, null);
  const {
    mutationFn,
    endpoint,
    showSuccessToast = true,
    showFailureToast = true,
    ...others
  } = getMutationAction({
    ...mutationData,
  });

  const mutatationResult = useMutation<ResponseType<P>, ResponseErrorType, T>(
    mutationFn,
    {
      mutationKey: endpoint,

      onError: (err: ResponseErrorType) => {
        if (err?.response && err?.response.data.statusCode === 401) {
          Cookies.remove(APP_KEYS.ACCESS_TOKEN);
          removeValue();
          toast("Login Session Expired");
          router.push("/auth/login");
        }
        if (showFailureToast) {
          toast(`Request Failed`);
        }
        mutatationResult.reset();
      },
      onSettled: (res: ResponseType<P>, err: ResponseErrorType) => {
        if (err) mutatationResult.reset();
        if (!err && showSuccessToast) {
          toast(`Request Successful`);
        }
        return;
      },
      retry: false,
      refetchOnWindowFocus: false,
      ...others,
    }
  );

  return { ...mutatationResult, value: mutatationResult?.data?.data };
}

export default useCustomMutation;
