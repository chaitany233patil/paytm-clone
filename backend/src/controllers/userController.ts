import { Request, Response } from "express";
import { User } from "../db";

export const getAllUSers = async (req: Request, res: Response) => {
  const users = await User.find();
  const allUsers = users.map((user) => user.firstname);
  res.status(200).json({
    users: allUsers,
  });
};
