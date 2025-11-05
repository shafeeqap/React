import React from "react";
import { useForm } from "react-hook-form";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
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
      className="min-w-min max-w-xl w-full bg-white px-5 py-5 rounded"
    >
      <h2 className="font-semibold">Step 2: Address</h2>
      <div className="mb-4 py-5">
        <input
          {...register("city", { required: "City is required" })}
          type="text"
          placeholder="Enter city"
          className="border p-1.5 block w-full rounded bg-gray-100"
        />
        {errors.city && <p className="text-red-600">{errors.city.message}</p>}
      </div>

      <div className="mb-4">
        <input
          {...register("country", { required: "Country is required" })}
          type="text"
          placeholder="Enter country"
          className="border p-1.5 block w-full rounded bg-gray-100"
        />
        {errors.country && (
          <p className="text-red-600">{errors.country.message}</p>
        )}
      </div>

      <div className="flex gap-3 justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="border border-black px-5 py-1 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300"
        >
          Previous
        </button>
        <button
          type="submit"
          className="border border-black px-5 py-1 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
