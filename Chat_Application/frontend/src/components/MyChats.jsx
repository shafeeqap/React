import { useToast } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import { useState } from "react";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  const { user, selectedChat, setSelectedChat, chats, setChats } = ChatState();
  
  const toast = useToast();

  return <div>MyChats</div>;
};

export default MyChats;
