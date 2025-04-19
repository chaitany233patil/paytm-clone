import { Request, Response } from "express";
import { User } from "../db";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const { email, firstname, lastname, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 5);
    await User.create({
      email,
      firstname,
      lastname,
      password: hashPassword,
    });
    res.status(200).json({
      message: "signup succefully!",
    });
  } catch (err) {
    res.status(400).json({
      message: "User Already Exist",
    });
  }
};
