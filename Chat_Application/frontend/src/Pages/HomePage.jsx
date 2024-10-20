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

const HomePage = () => {
  return (
    <Container maxW={"100%"} ml={"0"} p={"0"}>
      <Box
        display={"flex"}
        justifyContent="center"
        bg={"white"}
        w={"40%"}
        p={"3"}
        m={"100px 0 15px 100px"}
      >
        <Text
          fontSize={"2xl"}
          fontFamily={"work sans"}
          textTransform={"uppercase"}
        >
          Talk me
        </Text>
      </Box>
      <Box bg={"white"} w={"40%"} p={4} m={"10px 0 100px 100px"}>
        <Tabs isFitted variant='enclosed' >
          <TabList mb="1em">
            <Tab _selected={{bg:'blue.100', fontFamily:'work sans'}}>Login</Tab>
            <Tab _selected={{bg:'blue.100', fontFamily:'work sans'}}>Sign up</Tab>
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
