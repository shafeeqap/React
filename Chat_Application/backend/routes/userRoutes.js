const express = require("express");
const {
  registerUser,
  authUser,
  getAllUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const userRoutes = express.Router();

userRoutes.route("/").post(registerUser).get(protect, getAllUsers);
userRoutes.post("/login", authUser);

module.exports = userRoutes;
