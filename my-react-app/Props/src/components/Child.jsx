// Destructure props directly in the function signature.
const Child = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Child;
