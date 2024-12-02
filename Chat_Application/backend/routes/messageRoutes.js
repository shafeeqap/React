const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { sendMessage, fetchAllMessages } = require("../controllers/messageController");
const messageRoutes = express.Router();

messageRoutes.route("/").post(protect, sendMessage);
messageRoutes.route("/:chatId").get(protect, fetchAllMessages);

module.exports = messageRoutes;
