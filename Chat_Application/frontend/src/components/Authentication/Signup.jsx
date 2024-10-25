import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const postDetails = (pics) => {
    setLoading(true);
    if (!pics) {
      toast({
        title: "No Picture Selected",
        description: "Please select a profile picture to upload.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("files", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "shafeeqap");
      fetch("https://api.cloudinary.com/v1_1/shafeeqap/image/upload", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Invalid File Type",
        description: "Only JPEG and PNG formats are allowed.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"2rem"} cursor={"pointer"}>
            <div
              style={{ fontSize: "1.3rem" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="cPassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter your confirm password"
            type={showConfirmPassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width={"2rem"} cursor={"pointer"}>
            <div
              style={{ fontSize: "1.3rem" }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </div>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic" isRequired>
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          p={"1.5"}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        marginTop={5}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
