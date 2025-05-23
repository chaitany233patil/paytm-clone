import express from "express";
import { Request, Response } from "express";
import { connectDb } from "./db";
import mainRoute from "./routes/userRoutes";
import cors from "cors";

connectDb();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/v1", mainRoute);

app.get("/helth", (req: Request, res: Response) => {
  res.json({
    message: "good health",
  });
});

app.listen(PORT, () => {
  console.log("Listining on port : " + PORT);
});
