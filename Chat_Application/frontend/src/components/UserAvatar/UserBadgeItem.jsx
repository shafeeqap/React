import { Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius={"lg"}
      display={'flex'}
      alignItems={'center'}
      gap={'10px'}
      m={1}
      mb={2}
      variant={"solid"}
      fontSize={12}
      cursor={"pointer"}
      backgroundColor="purple"
      color={'white'}
      onClick={handleFunction}
    >
      {user.name} {' '}<CloseIcon fontSize={'10'} _hover={{color:'gray.400'}}/>
    </Box>
  );
};

export default UserBadgeItem;
