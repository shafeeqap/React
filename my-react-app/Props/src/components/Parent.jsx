import Child from "./Child";

// Pass Props from Parent to Child
const Parent = () => {
  const message = "Hello I am Parent!";
  return (
    <>
      <Child message={message} />
    </>
  );
};

export default Parent;
