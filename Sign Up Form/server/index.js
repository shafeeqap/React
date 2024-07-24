import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { User } from "./models/users.js";

const app = express();
const MONGODB_URI = "mongodb://127.0.0.1:27017/registration";
const PORT = 5001;
// Using parse json data
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`Database is connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already have an account");
    } else {
      User.create({
        name: name,
        email: email,
        password: password,
      })
        .then((user) => {
          res.json(user,'Account created');
        })
        .catch((error) => {
          res.json(error);
        });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running http://localhost:${5001}`);
});
