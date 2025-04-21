import mongoose from "mongoose";
import { env } from "@/env.mjs";
import { WaitList } from "./waitlist";

/* eslint-disable  @typescript-eslint/no-explicit-any */
mongoose.set("strictQuery", false);
mongoose
  .connect(env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => console.error("MongoDB connection error:", err));

export { WaitList };
