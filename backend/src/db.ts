import mongoose, { Schema, model } from "mongoose";
import "dotenv/config";

export async function connectDb() {
  await mongoose.connect(process.env.DB_URL as string);
  console.log("DB Connected!");
}

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true, maxLength: 25, minLength: 6 },
});

export const User = model("User", userSchema);
