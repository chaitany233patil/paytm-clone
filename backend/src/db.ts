import mongoose, { Schema, model } from "mongoose";
import "dotenv/config";

export async function connectDb() {
  await mongoose.connect(process.env.DB_URL as string);
  console.log("DB Connected!");
}

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  firstname: { type: String, unique: true, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model("User", userSchema);
