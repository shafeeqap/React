export const getSender = (loggedUser, users) => {
  return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUser, users) => {
  return users[0]?._id === loggedUser?._id ? users[1] : users[0].name;
};

/*
  messages: Array of all message.
  m: current message.
  i: Index of the current message in the array.
  userId: The ID of the logged-in user.
*/
export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 && // avoids out-of-bound errors
    (messages[i + 1].sender._id !== m.sender._id || // sender of the next message is different from the current message.
      messages[i + 1].sender._id === undefined) && // the next message sender's ID isn't undefined
    messages[i].sender._id !== userId // the message isn't sent by the logged-in user
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 && // current message is the last message in the array
    messages[messages.length - 1].sender._id !== userId && // last message is not sent by the logged-in user.
    messages[messages.length - 1].sender._id // last message sender has a valid ID
  );
};

export const isSameSenderMargin = (messages, m, i, userId) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id !== m.sender._id &&
    messages[i].sender._id !== userId
  ) {
    return 33; // margin
  } else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  ) {
    return 0;
  } else {
    return "auto";
  }
};

export const isSameUser = (messages, m, i) => {
  // Compares previous message (messages[i - 1]) with the current message(m)
  return i > 0 && messages[i - 1].sender._id === m.sender._id; 
};
