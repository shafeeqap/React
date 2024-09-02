import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./router/userRouter.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", userRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is Running:http://localhost:${port}`);
});
