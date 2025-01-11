import mongoose from "mongoose";

const file = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true },
});

export const File = mongoose.model("File", file);
