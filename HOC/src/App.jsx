import React from "react";
import Greetings from "./Greetings";
import withLogger from "./withLogger";

const LoggedGreeting = withLogger(Greetings);
const App = () => {
  return (
    <>
      <LoggedGreeting name="Shafeeq" />
    </>
  );
};

export default App;
