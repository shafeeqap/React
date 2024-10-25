import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState();

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"}>
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
          <InputRightElement width={"2rem"} cursor={'pointer'}>
            <div
              style={{ fontSize: "1.3rem" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        marginTop={5}
        onClick={submitHandler}
      >
        Login
      </Button>

      <Button
        colorScheme="red"
        variant={"solid"}
        width={"100%"}
        onClick={() => {}}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
