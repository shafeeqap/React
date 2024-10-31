const express = require("express");
const { createMessage } = require("../controller/messageController");
const messageRoute = express.Router();

messageRoute.post("/send-message", createMessage);

module.exports = messageRoute;
