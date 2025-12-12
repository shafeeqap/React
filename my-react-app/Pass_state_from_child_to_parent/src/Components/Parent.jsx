import React from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = React.useState("");

  const getDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>

      <Child getDataFromChild={getDataFromChild} />
    </div>
  );
};

export default Parent;
