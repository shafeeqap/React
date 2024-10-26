const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat } = require("../controllers/chatController");

const chatRoutes = express.Router();

chatRoutes.route("/").post(protect, accessChat);
// chatRoutes.route("/").get(protect, fetchChats);
// chatRoutes.route("/group").post(protect, createGroupChat);
// chatRoutes.route("/rename").put(protect, renameGroup);
// chatRoutes.route("/groupremove").put(protect, removeFromGroup);
// chatRoutes.route("/groupadd").put(protect, addToGroup);


module.exports = chatRoutes