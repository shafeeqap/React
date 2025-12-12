import React from "react";

const Input = ({
  className,
  type,
  name,
  value,
  placeholder,
  onChange,
  disabled,
}) => {
  return (
    <div className="max-w-full">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`p-2 border rounded ${className}`}
      />
    </div>
  );
};

export default Input;
