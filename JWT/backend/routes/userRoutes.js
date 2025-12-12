import express from "express";
import {
  registerUser,
  getCurrentUserProfile,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.get("/profile", protect, getCurrentUserProfile);

export default userRouter;
