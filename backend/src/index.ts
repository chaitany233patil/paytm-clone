import express from "express";
import { Request, Response } from "express";
import { User, connectDb } from "./db";

connectDb();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/helth", (req: Request, res: Response) => {
  res.json({
    message: "good health",
  });
});

app.listen(PORT, () => {
  console.log("Listining on port : " + PORT);
});
