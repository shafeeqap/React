import { useState } from "react";
import "./Tooltipp.css";

const Tooltipp = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseOver={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <div className={`tooltipp-text ${isVisible ? "show" : ""}`}>{text}</div>
    </div>
  );
};

export default Tooltipp;
