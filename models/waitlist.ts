import mongoose, { Schema, Document } from "mongoose";

export interface IWaitList extends Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const WaitListSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

// export default mongoose.model<IWaitList>("WaitList", WaitListSchema);

export const WaitList = mongoose.models.WaitList || mongoose.model<IWaitList>("WaitList", WaitListSchema);
