import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { User } from "./models/users.js";

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    const con = await mongoose.connect("mongodb://127.0.1:27017/crud");
    console.log(`database is connected ${con.connection.host}`);
  } catch (error) {
    console.error(`MongoDB error :${error.message}`);
    process.exit(1);
  }
};
connectDB();


// ------------------ Create User -----------------//
app.post("/createUser", (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

// --------------- Display User ------------------//
app.get("/", (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.json(error);
    });
});

// ------------ Get User for Update ---------------//
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  User.findById({ _id: id })
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.json(error);
    });
});

// ----------- Update User ----------------//
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(
    { _id: id },
    { 
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age 
    }
  )
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.json(error);
    });
});


// ------------ Delete User ---------------//
app.delete("/deleteUser/:id", (req, res) =>{
  const id = req.params.id;
  User.findByIdAndDelete({_id: id})
  .then((result) =>{
    res.json(result)
  })
  .catch((error) =>{
    res.json(error)
  })
})

app.listen(5001, () => {
  console.log("Server is Running");
});
