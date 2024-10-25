const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const userRoutes = express.Router();

userRoutes.post("/", registerUser);
userRoutes.post("/login", authUser);



module.exports = userRoutes;
