import { Request, Response } from "express";
import { User } from "../db";

export const getAllUSers = async (req: Request, res: Response) => {
  const users = await User.find();
  const allUsers = users.map((user) => user.firstname);
  res.status(200).json({
    users: allUsers,
  });
};

export const searchUsers = async (req: Request, res: Response) => {
  const { filter } = req.query;
  const users = await User.find({
    firstname: { $regex: filter },
  });
  const allUSers = users.map((user) => user.firstname);
  res.json({
    users: allUSers,
  });
};
