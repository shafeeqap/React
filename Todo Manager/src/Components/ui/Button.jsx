import React from "react";

const Button = ({ type, onClick, btnName, className }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`w-20 px-5 py-2 text-white rounded ${className}`}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
