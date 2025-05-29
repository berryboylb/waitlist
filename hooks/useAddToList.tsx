import { useMutation } from "@tanstack/react-query";

export const useAddToList = () => {
  const mutation = useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Throw the response data for client-side handling
        throw new Error(data?.error || "Something went wrong");
      }

      return data;
    },

    onError: (error) => {
      console.error("[useAddToList]:", error);
      // Optionally, handle specific error types or show a user-friendly error message
    },
  });

  return mutation;
};
