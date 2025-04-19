import { Request, Response } from "express";
import { User } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

const userSchema = z.object({
  email: z.string({ required_error: "email Required!" }).email(),
  firstname: z.string({ required_error: "firstname Required!" }),
  lastname: z.string({ required_error: "lastname Required!" }),
  password: z.string({ required_error: "password Required!" }).min(6).max(25),
});

export const signup = async (req: Request, res: Response) => {
  try {
    const status = userSchema.safeParse(req.body);
    const { email, firstname, lastname, password } = req.body;
    if (status.success) {
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
      return;
    }
    res.status(411).json({
      //@ts-ignore
      message: status.error.issues,
    });
  } catch (err) {
    res.status(400).json({
      message: "User already exist!",
    });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const result = await bcrypt.compare(password, user?.password as string);
    if (result) {
      const token = jwt.sign(
        { id: user?._id },
        process.env.JWT_SECRETE as string,
        {
          expiresIn: 60 * 60,
        }
      );
      res.status(200).json({
        token,
      });
      return;
    }
    res.status(401).json({
      message: "invalid credentials!",
    });
  } catch (err) {
    res.status(401).json({
      message: "invalid credentials!",
    });
  }
};
