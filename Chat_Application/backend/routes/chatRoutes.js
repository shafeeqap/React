const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup, leaveGroup, disbandGroup } = require("../controllers/chatController");

const chatRoutes = express.Router();

chatRoutes.route("/").post(protect, accessChat).get(protect, fetchChats);
chatRoutes.route("/group").post(protect, createGroupChat);
chatRoutes.route("/rename").put(protect, renameGroup);
chatRoutes.route("/groupadd").put(protect, addToGroup);
chatRoutes.route("/removeuser").put(protect, removeFromGroup); // Remove a user (Admin only)
chatRoutes.route("/leavegroup").put(protect, leaveGroup); // Leave the group (Any user can leave)
chatRoutes.route("/disbandgroup").delete(protect, disbandGroup); // Disband the group (Admin only)



module.exports = chatRoutes