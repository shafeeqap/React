import React, { useState } from "react";

const Counter = () => {
  const [inputValue, setInputValue] = useState(null);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleChange = (e) => {
    e.preventDefault();

    const num = Number(inputValue);

    if (!isNaN(num)) {
      setCount(num);
    }

    setInputValue("");
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-200">
      {/* Display */}
      <div>
        <h1 className="text-4xl font-bold">{count}</h1>
      </div>
      {/* Input */}
      <div className="mt-5">
        <form onSubmit={handleChange}>
          <div className="flex gap-5 px-5">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="p-1.5 px-3 border block rounded"
            />
            <button type="submit" className="px-4 rounded bg-blue-500">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* Button */}
      <div className="space-x-5 mt-5">
        <button
          onClick={handleIncrement}
          className="bg-green-600 px-2 py-1 rounded"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-600 px-2 py-1 rounded"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="bg-yellow-600 px-2 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
