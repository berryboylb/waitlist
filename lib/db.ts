// lib/mongodb.ts
import mongoose from "mongoose";
import { env } from "@/env.mjs";
/* eslint-disable  @typescript-eslint/no-explicit-any */

const MONGODB_URI = env.MONGO_URL;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_URL environment variable.");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    mongoose.set("strictQuery", false);
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export async function retry<T>(fn: () => Promise<T>, retries = 3, delay = 500): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((r) => setTimeout(r, delay));
    return retry(fn, retries - 1, delay);
  }
}

// await retry(() => connectToDatabase());
