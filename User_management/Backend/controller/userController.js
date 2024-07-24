import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModels.js";

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});



// @desc    Register a new user
// route    POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, mobile, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    mobile,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});



// @desc    Logout user / clear cookie
// route    POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
});



// @desc    Get user profile
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(user);
  
  if (user ) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      profileImage: user.profileImage,
    })
  }else{
    res.status(404);
    throw new Error('User not found');
  }
});


const uploadProfileImage = asyncHandler(async(req, res) =>{
  if(req.file){
    console.log('File received:', req.file);
    res.status(200).json({filePath: `/uploads${req.file.fieldname}`});
  }else{
    res.status(400);
    throw new Error('No file uploaded');
  }
})

// @desc    Update user profile
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.mobile =req.body.mobile || user.mobile;
    if(req.file){
      user.profileImage = `/uploads/${req.file.filename}`;
    }

    if(req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    // Sending the Response, If the user is successfully updated
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      mobile: updatedUser.mobile,
      profileImage: updatedUser.profileImage,
    });

  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  uploadProfileImage,
  updateUserProfile,
};
