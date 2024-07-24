import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ================= Handle Signup ================== //
const handleSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.json({ message: "User already exist" });
    } else {
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      return res.status(200).json({ message: "success", newUser });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

// ================= Handle Login ================== //
const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {

        const token = jwt.sign(
          { email: user.email, role: user.role },
          "jwt-secret-key",
          { expiresIn: "1d" });
          res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });
              
        return res.status(200).json({ message: "success", user });
      } else {
        return res.json({ message: "Password not match" });
      }
    } else {
      return res.json({ message: "User not exist" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// ================= Handle Logout ================== //
// const handleLogout = async (req, res) => {
//   try {
//     if (req.session.userId) {
//       req.session.destroy((error) => {
//         if (error) {
//           return res.status(500).json({ error: "Failed to sign out" });
//         }
//         res.clearCookie("connect.sid"); // clear the session cookie
//         return res.json({ message: "Logged out" });
//       });
//     } else {
//       return res.status(400).json({ message: "No active session" });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

const handleLogout = (req, res) =>{
  try {
    res.clearCookie('token') // Clear the JWT token cookie
    return res.json({message: "Logged out"});
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

// ================= Handle Admin Dashboard ================== //
const handleDashboard = async(req, res) =>{
  try {
    res.json("success")
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

// ================= Handle Session ================== //


export { handleLogin, handleSignup, handleLogout,handleDashboard };
