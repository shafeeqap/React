const userRouter = require("express").Router();
const passport = require("passport");

const userController = require("../controllers/userController");

userRouter.get("/login/success", userController.loginSuccess);
userRouter.get("/login/failed", userController.loginFailed);
userRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
userRouter.get("/google/callback", passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed"
  }));
userRouter.get("/logout", userController.logout);


module.exports = userRouter ;