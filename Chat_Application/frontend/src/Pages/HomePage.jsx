import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      navigate("/chats");
    }
  }, [navigate]);

  
  return (
    <Container maxW={"100vw"} ml={"0"} p={"0"} centerContent>
      <Box
        display={"flex"}
        justifyContent="center"
        bg={"white"}
        w={{ base: "90%", md: "70%", lg: "40%" }}
        p={4}
        mt={{ base: "50px", md: "80px", lg: "80px" }}
        mb={5}
      >
        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          fontFamily={"work sans"}
          textTransform={"uppercase"}
        >
          PulseTalk 
        </Text>
      </Box>
      <Box bg={"white"} w={{ base: "90%", md: "70%", lg: "40%" }} p={4} mb={20}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab _selected={{ bg: "blue.100", fontFamily: "work sans" }}>
              Login
            </Tab>
            <Tab _selected={{ bg: "blue.100", fontFamily: "work sans" }}>
              Sign up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
