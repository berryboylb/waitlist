import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    RESEND_KEY: z.string().min(1),
    MONGO_URL: z.string().min(1),
  },
  client: {
    // NEXT_PUBLIC_API_URL: z.string().min(1),
  },
  runtimeEnv: {
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    RESEND_KEY: process.env.RESEND_KEY,
    MONGO_URL: process.env.MONGO_URL,
  },
});
