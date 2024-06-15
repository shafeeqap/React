import React from "react";
import { useLocation } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const Details = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex justify-center py-16">
        <img
          className="max-sm:w-[300px] max-md:w-[500px] lg:w-72"
          src={location?.state?.data?.image}
          alt=""
        />
      </div>
      <div className="py-10 px-20">
        <div className="py-10 px-10 rounded-md min-h-[500px]">
          <div className="flex items-center text-3xl">
            <FaRupeeSign />
            <h1 className="font-bold text-3xl">
              {location?.state?.data?.price}
            </h1>
          </div>
          <h1 className="pt-2">
            <span className="font-semibold">Category</span> :{" "}
            {location?.state?.data?.category}
          </h1>
          <h1 className="pt-2">
            <span className="font-semibold">Title</span> :{" "}
            {location?.state?.data?.title}
          </h1>
          <h1 className="pt-2">
            <span className="font-semibold">Description</span> :{" "}
            {location?.state?.data?.description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
