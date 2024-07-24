import express from 'express';
import loadLogin from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/login", loadLogin);

export default userRouter;
