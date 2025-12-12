import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import Students from "./models/studentsModel.js";
import bcrypt from "bcryptjs";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose.connect("mongodb://localhost:27017/school");

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new Students({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Students.findOne({ email });

    if (!user) {
      return res.status(404).json("No record existed");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json("Invalid credentials");
    }

    const accessToken = jwt.sign(
      { _id: user._id },
      "jwt-access-token-secret-key",
      {
        expiresIn: "1m",
      }
    );

    const refreshToken = jwt.sign(
      { _id: user._id },
      "jwt-refresh-token-secret-key",
      {
        expiresIn: "5m",
      }
    );

    res.cookie("accessToken", accessToken, { maxAge: 60000 });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 300000,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return res.json({ Login: true });
  } catch (error) {
    res.status(500).json("Server error");
  }
});

// middleware varifyToken
const varifyUser = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    const renewed = await renewToken(req, res);
    if (renewed) {
      next();
    } else {
      return res.json({ valid: false, message: "Unauthorized" });
    }
  } else {
    jwt.verify( accessToken, "jwt-access-token-secret-key", async (err, decode) => {
        if (err) {
          // Try to renew on access token failure
          const renewed = await renewToken(req, res);
          if (renewed) {
            next();
          } else {
            return res.json({ valid: false, message: "Invalid or Expired Token" });
          }
        } else {
          req._id = decode._id;
          next();
        }
      }
    );
  }
};

// Renew Token, when access token expire
const renewToken = (req, res) => {
  return new Promise((resolve) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return resolve(false);
    }

    jwt.verify(refreshToken, "jwt-refresh-token-secret-key", (err, decode) => {
      if (err) {
        return resolve(false);
      }

      const newAccessToken = jwt.sign(
        { _id: decode._id },
        "jwt-access-token-secret-key",
        {
          expiresIn: "1m",
        }
      );

      res.cookie("accessToken", newAccessToken, { maxAge: 60000 });
      resolve(true);
    });
  });
};
//-----------------------------------------------//

app.get("/dashboard", varifyUser, (req, res) => {
  return res.json({ valid: true, message: "authorized" });
});

app.listen(3001, () => {
  console.log("Server is running...");
});
