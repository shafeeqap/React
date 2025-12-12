import { useState } from "react";
import Child2 from "./Child2";

// Passing Props from Child to Parent
const Parent2 = () => {
  const [message, setMessage] = useState("");

  // Callback function to handle data from the child
  const handleMessage = (childData) => {
    setMessage(childData);
  };
  return <div>
    <p>{message}</p>
    <Child2 onSendMessage={handleMessage}/>
  </div>;
};

export default Parent2;
