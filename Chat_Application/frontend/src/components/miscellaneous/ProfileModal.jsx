import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<HiDotsVertical />}
          onClick={onOpen}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent w={{ base: "60%", md: "70%", lg: "40%" }} p={5} display={{sm: 'flex'}}>
          <ModalHeader
            fontSize={{ base: "20px", md: "30px", lg: "30px" }}
            fontFamily={"Work sans"}
            display={"flex"}
            justifyContent={{base:"center"}}
            textTransform={"uppercase"}
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={{base:"space-between", sm:'center'}}
            alignItems={"center"}
          >
            <Image
              borderRadius={"full"}
              boxSize={{base:"60%", md: "40%", lg: "40%" }}
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "12px", md: "20px", lg: "20px" }}
              fontFamily={"Work sans"}
            >
              Email: {user.email}
            </Text>
          </ModalBody>

          <ModalFooter display={{base: 'flex'}} justifyContent={{base: 'center', md: 'flex-end', lg: 'flex-end'}}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
