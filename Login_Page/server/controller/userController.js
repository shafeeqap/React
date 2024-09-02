import { User } from "../models/users.js";

const loadLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.status(200).json({ message: "Login is successfully", user });
      } else {
        res.json({ message: "Password is incorrect" });
      }
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default loadLogin;
