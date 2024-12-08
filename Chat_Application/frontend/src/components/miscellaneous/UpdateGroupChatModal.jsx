import { HiDotsVertical } from "react-icons/hi";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";
import { useState } from "react";
import UserBadgeItem from "../UserAvatar/UserBadgeItem";
import UserListItem from "../UserAvatar/UserListItem";
import axiosInstance from "../axiosInstance";

const UpdateGroupChatModal = ({ fetchAgain, setFetchAgain, fetchMessages }) => {
  const [groupChatName, setGroupChatName] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameLoading, setRenameLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, selectedChat, setSelectedChat, setChats } = ChatState();

  const toast = useToast();

  // ------------------- Handle Add User ------------------- //
  const handleAddUser = async (user1) => {
    if (selectedChat.users.find((u) => u._id === user1._id)) {
      toast({
        title: "User Already in group!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (selectedChat.groupAdmin._id !== user.id) {
      toast({
        title: "Only admins can add someone!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axiosInstance.put(
        "/api/chat/groupadd",
        {
          chatId: selectedChat._id,
          userId: user1._id,
        },
        config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description:
          error.response?.data?.message || "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  // ------------------- Exit From Group(Helper Function) ------------------- //
  const leaveGroup = async () => {
    try {
      setLoading(true);
      const config = { headers: { Authorization: `Bearer ${user.token}` } };

      await axiosInstance.put(
        "/api/chat/leavegroup",
        { chatId: selectedChat._id, userId: user._id },
        config
      );

      setSelectedChat(null);
      setFetchAgain(!fetchAgain);
      onClose();
      toast({
        title: "You have left the group.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description:
          error.response?.data?.message || "Failed to leave the group.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  // ------------------- Remove User(Helper Function) ------------------- //
  const removeUser = async (userId) => {
    try {
      setLoading(true);
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const { data } = await axiosInstance.put(
        "/api/chat/removeuser",
        { chatId: selectedChat._id, userId },
        config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      fetchMessages();
      setLoading(false);
      toast({
        title: "User removed successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description:
          error.response?.data?.message || "Failed to remove the user.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  // ------------------- Disband Group(Helper Function) ------------------- //
  const disbandGroup = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      await axiosInstance.delete(
        "/api/chat/disbandgroup",
        {
          data: { chatId: selectedChat._id },
        },
        config
      );

      setSelectedChat(null);
      setFetchAgain(!fetchAgain);
      setLoading(false);
      toast({
        title: "Group disbanded successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description:
          error.response?.data?.message || "Failed to disband the group.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  // ------------------- Handle Remove Message ------------------- //
  const handleRemove = async (user1) => {
    // Prevent admin from being removed by others
    if (user1._id === selectedChat.groupAdmin._id) {
      toast({
        title: "Group admin cannot be removed!",
        description:
          "The admin must transfer admin rights or leave the group voluntarily.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    // Check if the current user is authorized to remove someone
    if (selectedChat.groupAdmin._id !== user._id) {
      toast({
        title: "Only admins can remove someone!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    // Admin leaving the group voluntarily (disband the group)
    if (user1._id === user._id && user1._id === selectedChat.groupAdmin._id) {
      await disbandGroup();
      return;
    }

    // try {
    //   setLoading(true);
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${user.token}`,
    //     },
    //   };

    //   const { data } = await axios.put(
    //     "/api/chat/groupremove",
    //     {
    //       chatId: selectedChat._id,
    //       userId: user1._id,
    //     },
    //     config
    //   );

    //   user1._id === user._id ? setSelectedChat(null) : setSelectedChat(data);
    //   setFetchAgain(!fetchAgain);
    //   toast({
    //     title: "User removed successfully!",
    //     status: "success",
    //     duration: 3000,
    //     isClosable: true,
    //     position: "bottom-left",
    //   });
    //   setLoading(false);
    // } catch (error) {
    //   toast({
    //     title: "Error Occured!",
    //     description:
    //       error.response?.data?.message || "Failed to remove the user.",
    //     status: "error",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "bottom-left",
    //   });
    //   setLoading(false);
    // }
    if (user1._id === user._id) {
      await leaveGroup();
    } else {
      await removeUser(user1._id);
    }
  };

  // ------------------- Handle Rename ------------------- //
  const handleRename = async () => {
    if (!groupChatName) return;

    try {
      setRenameLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axiosInstance.put(
        "/api/chat/rename",
        { chatId: selectedChat._id, chatName: groupChatName },
        config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setRenameLoading(false);
    } catch (error) {
      toast({
        title: "Error occured!",
        description: error.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setRenameLoading(false);
    }
    setGroupChatName("");
  };

  // ------------------- Handle Search User ------------------- //
  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axiosInstance.get(`/api/user?search=${search}`, config);
      console.log(data, "Search Group Chat");

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description:
          error.response?.data?.message || "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <IconButton
        display={{ base: "flex" }}
        icon={<HiDotsVertical />}
        onClick={onOpen}
      >
        Open Modal
      </IconButton>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={"25px"}
            fontFamily={"Work sans"}
            display={"flex"}
            justifyContent={"center"}
            textTransform={"capitalize"}
          >
            {selectedChat.chatName}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box w={"100%"} display={"flex"} flexWrap={"wrap"} pb={3}>
              {selectedChat.users.map((u) => (
                <UserBadgeItem
                  key={u._id}
                  user={u}
                  handleFunction={() => handleRemove(u)}
                />
              ))}
            </Box>
            <FormControl display={"flex"}>
              <Input
                placeholder="Chat Name"
                mb={3}
                value={groupChatName}
                onChange={(e) => setGroupChatName(e.target.value)}
              />
              <Button
                variant={"solid"}
                colorScheme="teal"
                ml={1}
                isLoading={renameLoading}
                onClick={handleRename}
              >
                Update
              </Button>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Add user to group"
                mb={1}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>

            {loading ? (
              <Spinner size={"lg"} />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => handleAddUser(user)}
                />
              ))
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={() => handleRemove(user)}>
              Exit Group
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateGroupChatModal;
