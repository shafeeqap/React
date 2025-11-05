import React from "react";

const Step3 = ({ formData, handleSubmit }) => {
  return (
    <div className="min-w-min max-w-xl w-full bg-white px-5 py-5 rounded">
      <h2 className="font-semibold">Step 3: Review & Submit</h2>

      <div className="py-5 space-y-2">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>Country:</strong> {formData.country}
        </p>
      </div>

      <button
        className="border border-black px-5 py-1 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Step3;
