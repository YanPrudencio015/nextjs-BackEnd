import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true },
);

const task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default task;
