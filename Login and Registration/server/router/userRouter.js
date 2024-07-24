import express from "express";
import {
  handleLogin,
  handleLogout,
  handleSignup,
  handleDashboard,
} from "../controller/userController.js";
import {handleSession} from "../middleware/handleSession.js";
import { varifyUser } from "../middleware/varifyUser.js";


const userRouter = express.Router();



userRouter.post("/login", handleLogin);
userRouter.post("/signup", handleSignup);
userRouter.post("/logout", handleLogout);
userRouter.get("/session", handleSession);
userRouter.get("/dashboard",varifyUser, handleDashboard);




export default userRouter;
