const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/chatModel");

// @desc     Access OR Create Chat(One on One)
// route     POST /api/chat/
// @access   Public
const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  let isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name email pic",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    let chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);

      const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );

      res.status(200).send(fullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

// @desc     Fetch Chat
// route     POST /api/chat/
// @access   Public
const fetchChats = asyncHandler(async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("latestMessage")
      .populate("groupAdmin", "-password")
      .sort({ updatedAt: -1 })
      .then(async (result) => {
        result = await User.populate(result, {
          path: "latestMessage.sender",
          select: "name email pic",
        });

        res.status(200).send(result);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// @desc     Create Group Chat
// route     POST /api/chat/group
// @access   Public
const createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Please fill all the feilds" });
  }

  let users = JSON.parse(req.body.users);

  if (users.length < 2) {
    return res
      .status(400)
      .send("More than 2 users are required to form a group chat");
  }

  users.push(req.user);

  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });

    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    res.status(200).json(fullGroupChat);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// @desc     Rename Group Chat
// route     PUT /api/chat/rename
// @access   Private
const renameGroup = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    { chatName },
    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(updatedChat);
  }
});

// @desc     User Add to Group Chat
// route     PUT /api/chat/groupadd
// @access   Private
const addToGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const added = await Chat.findByIdAndUpdate(
    chatId,
    { $push: { users: userId } },
    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(added);
  }
});

// @desc     Remove a user from the Group Chat
// route     PUT /api/chat/removeuser
// @access   Private
const removeFromGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  
  const chat = await Chat.findById(chatId);

  if (!chat) {
    res.status(404);
    throw new Error("Chat Not Found");
  }

  // Only allow admins to remove users
  // if (chat.groupAdmin.toString() !== req.user._id) {
  //   res.status(403);
  //   throw new Error("Only admins can remove users from the group");
  // }

  const removed = await Chat.findByIdAndUpdate(
    chatId,
    { $pull: { users: userId } },
    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(removed);
  }
});

// @desc     Leave the group
// @route    PUT /api/chat/leavegroup
// @access   Private
const leaveGroup = asyncHandler(async (req, res) => {
  const { chatId } = req.body;

  // Fetch the chat
  const chat = await Chat.findById(chatId);

  if (!chat) {
    res.status(404);
    throw new Error("Chat Not Found");
  }

  // Check if the requester is part of the group
  if (!chat.users.includes(req.user._id)) {
    res.status(403);
    throw new Error("You are not a member of this group");
  }

  // If the admin is leaving, disband the group
  if (chat.groupAdmin.toString() === req.user._id) {
    await Chat.findByIdAndDelete(chatId);
    return res.status(200).json({ message: "Group disbanded successfully" });
  }

  // Remove the user from the group
  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    { $pull: { users: req.user._id } },
    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  res.status(200).json(updatedChat);
});

// @desc     Disband the Group Chat
// route     DELETE /api/chat/disbandgroup
// @access   Private
const disbandGroup = asyncHandler(async (req, res) => {
  const { chatId } = req.body;

  const group = await Chat.findById(chatId);

  if (!group) {
    res.status(404);
    throw new Error("Chat Not Found");
  }

  if (group.groupAdmin.toString() !== req.user._id) {
    res.status(403);
    throw new Error("Only the group admin can disband the group");
  }

  await Chat.findByIdAndDelete(chatId);

  res.status(200).json({ message: "Group disbanded successfully" });
});

module.exports = {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
  leaveGroup,
  disbandGroup,
};
