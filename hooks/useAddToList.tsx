import { useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

export const useAddToList = () => {
  const mutation = useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const body = {
        id: uuidv4(),
        email,
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch("https://sheetdb.io/api/v1/2l1eaegq5a0l6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`Failed to add data: ${res.statusText}`);
      }

      return res.json(); // Return the response as JSON
    },
    onError: (error) => {
      console.error("[useAddToList]:", error);
      // Optionally, handle specific error types or show a user-friendly error message
    },
  });

  return mutation;
};
