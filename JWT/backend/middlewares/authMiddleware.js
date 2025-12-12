import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
  let token = req.cookies.jwt;

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decode.userId).select("-password");
    next();
  } catch (error) {
    return res.status(401).send("Not authorized, token not found");
  }
};
