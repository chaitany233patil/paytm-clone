import { json, Request, Response } from "express";
import { Account } from "../db";
import mongoose from "mongoose";

export const getBalance = async (req: Request, res: Response) => {
  const { userId } = req;
  try {
    const userAccount = await Account.findOne({ userId });
    if (userAccount) {
      res.status(200).json({
        balance: userAccount.balance,
      });
      return;
    }
  } catch (err) {
    res.status(404).json({
      message: "Somthing wrong happened",
    });
  }
};

//transfer money
export const transfer = async (req: Request, res: Response) => {
  const { to, amount } = req.body;
  const { userId } = req;
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const sender = await Account.findOne({ userId });

    if (!sender || (sender.balance as number) < amount) {
      res.json({
        message: "Insufficient balance",
      });
      return;
    }

    const receiver = await Account.findOne({ userId: to });

    if (!receiver) {
      res.status(404).json({
        message: "Receiver Not Found!",
      });
      return;
    }

    (sender.balance as number) -= amount;
    await sender.save();

    (receiver.balance as number) += amount;
    await receiver.save();

    res.status(200).json({
      message: "transfer Successful!",
    });
  } catch (err) {
    res.status(411).json({
      message: "Transfer Fail!",
    });
  }
};
