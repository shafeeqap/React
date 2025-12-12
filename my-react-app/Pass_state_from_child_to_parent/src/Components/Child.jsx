import React from "react";

const Child = ({ getDataFromChild }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => getDataFromChild("Hello from Child!")}>
        Send data to parent
      </button>
    </div>
  );
};

export default Child;
