import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import mongoose from "mongoose";
import {User} from './model/user.js'

const connectDB = async () => {
  try {
    const con = await mongoose.connect("mongodb://127.0.0.1:27017/fileUpload");
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error) {
    console.error(`MongoDB error : ${error.message}`);
    process.exit(1);
  }
};

connectDB()


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


// ======================================== //
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });
// ======================================== //


app.post("/upload", upload.single("images"), async(req, res) => {
  try {
    const image = req.file.filename;
    const newUser = new User({image});
    await newUser.save();

    res.status(200).json({
      message: "Success",
      user: newUser,
    })
    
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Server error"});
  }
});



app.get("/", async(req, res) => {
  try{
    const user = await User.findOne();
    if(user){
      res.status(200).json({message:"User fetched successfully", user});
    }else{
      res.status(400).json({message: "No user found"});
    }
  }catch (error){
    console.error(error);
    res.status(500).json({message: "Server error"});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running : ${PORT}`);
});
