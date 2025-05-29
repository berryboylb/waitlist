import { useMutation } from "@tanstack/react-query";

export const useAddToList = () => {
  const mutation = useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      try {
        const res = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        return res?.json();
      } catch (error) {
        console.log(">>err<<", error);
        throw error;
      }

      // if (!res.ok) {
      //   throw new Error(`Failed to add data: ${res.statusText}`);
      // }
    },
    onError: (error) => {
      console.error("[useAddToList]:", error);
      // Optionally, handle specific error types or show a user-friendly error message
    },
  });

  return mutation;
};
