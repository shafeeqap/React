import ChildComponent from "./ChildComponent";

// Pass Functions as Props.
const ParentComponent = () => {
  const handleClick = () => alert("Button clicked");

  return <div>
    <ChildComponent onClick={handleClick}/>
  </div>;
};

export default ParentComponent;
