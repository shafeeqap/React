import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { User } from "./model/user.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://shafeeqap1986:test123@cluster0.enaqhxn.mongodb.net/my_app?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getUser", (req, res) => {
  User.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (error) {
      res.json(error);
    });
});

// app.get("/getUser", async(req, res) =>{
//     try {
//       const allUsers = await User.find({});
//       res.json(allUsers)
//     } catch (error) {
//         res.json({error: error.message})
//     }
// })

app.post("/createUser", async(req, res) =>{
    try {
        // const user = req.body;
        const newUser = await new User(req.body).save();
        // await newUser.save();
        res.json(newUser);
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

app.listen(5001, () => {
  console.log("Server is Running");
});
