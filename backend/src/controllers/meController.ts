import { Request, Response } from "express";
import { User } from "../db";

export const me = async (req: Request, res: Response) => {
  const { userId } = req;
  const user = await User.findById<{ firstname: string }>(userId);
  const username = user?.firstname;
  res.json({
    username,
  });
};
