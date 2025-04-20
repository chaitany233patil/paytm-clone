import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "./db";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  try {
    const decodeHash: any = jwt.verify(
      token as string,
      process.env.JWT_SECRETE as string
    );
    const user = await User.findOne({ _id: decodeHash.id });
    if (user) {
      req.userId = user.id;
      return next();
    }
    res.status(411).json({
      message: "User Not Found!",
    });
  } catch (err) {
    res.status(404).json({
      message: "Invalid Credentials!",
    });
  }
};
