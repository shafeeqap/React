import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  uploadProfileImage,
  updateUserProfile,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

router.post("/", registerUser);

// Route to authenticate a user
router.post("/auth", authUser);
router.post("/logout", logoutUser);

// Route to get and update user profile (protected routes)
router.route("/profile", upload.single('profileImage'))
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);


// Route to upload profile image
router.post("/profile", protect, upload.single('profileImage'), uploadProfileImage);




export default router;
