import React from "react";
import { useForm } from "react-hook-form";

const Step1 = ({ formData, setFormData, nextStep, step }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-min max-w-2xl w-full bg-white px-5 py-5 rounded"
    >
      <h2 className="font-semibold">Step 1: Personal Info</h2>

      <div className="mb-4 py-5">
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Enter name"
          className="border p-1.5 block w-full rounded bg-gray-100"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Enter email"
          className="border p-1.5 block w-full rounded bg-gray-100"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>
      {step && (
        <button
          type="submit"
          className="border border-black px-5 py-1 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300"
        >
          Next
        </button>
      )}
    </form>
  );
};

export default Step1;
