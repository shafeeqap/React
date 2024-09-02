import jwt from "jsonwebtoken";
import {User} from "../models/user.js";


const handleSession = async (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.json({ message: "No session" });
      }
      jwt.verify(token, "jwt-secret-key", async (err, decoded) =>{
        if(err){
          return res.json({message: "Invalid session"})
        }
  
        const user = await User.findOne({email: decoded.email});
  
        if(user){
          return res.json({message: "Session active", user});
        }else{
          return res.json({message: "User not found"});
        }
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export  {handleSession};