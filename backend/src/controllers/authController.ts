import { Request, Response } from "express";
import { Account, User } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signup = async (req: Request, res: Response) => {
  try {
    const result = userSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: result.error.issues[0].message,
      });
      return;
    }

    const { email, firstname, lastname, password } = result.data;

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      firstname,
      lastname,
      password: hashPassword,
    });

    await Account.create({
      userId: user.id,
      balance: Math.floor(Math.random() * 1000) + 1,
    });

    res.status(200).json({
      message: "Signup successfully!",
    });
  } catch (err) {
    res.status(400).json({
      message: "User already exists!",
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
          expiresIn: 60 * 60 * 60,
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
