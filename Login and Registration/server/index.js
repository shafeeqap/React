import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";


dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // React app URL
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use("/", userRouter);

// Configure session middleware
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
//     cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
//   })
// );

app.listen(port, () => {
  console.log(`Server is Running:http://localhost:${port}`);
});
