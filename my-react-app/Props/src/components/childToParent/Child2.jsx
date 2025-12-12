const Child2 = ({ onSendMessage }) => {

  // Invoke the callback function and send data to the parent
  const sendMessage = () => {
    onSendMessage("Hello from Child Component 2!");
  };

  return (
    <div>
      <h4>Child Component_2</h4>
      <button className="btn" onClick={sendMessage}>Send Message to Parent</button>
    </div>
  );
};

export default Child2;
