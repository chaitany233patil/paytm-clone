import express from "express";
import { Request, Response } from "express";
import { connectDb } from "./db";
import userRoute from "./routes/userRoutes";

connectDb();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/v1/", userRoute);

app.get("/helth", (req: Request, res: Response) => {
  res.json({
    message: "good health",
  });
});

app.listen(PORT, () => {
  console.log("Listining on port : " + PORT);
});
