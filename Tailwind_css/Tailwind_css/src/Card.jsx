import React from "react";
import foodimage from "./assets/food-image.jpg";

export default function Card() {
  return (
    <div className="bg-white max-w-sm rounded-md m-6 overflow-hidden shadow-lg relative">
      <img
        className="w-full h-32 sm:h-48 object-cover"
        src={foodimage}
        alt="Food"
      />
      <div className="m-2">
        <span className="font-bold">5 Bean Chilli Stew</span>
        <span className="block text-sm text-gray-500">Recipe by Mario</span>
      </div>
      <div className="bg-gray-300 text-sm rounded-full absolute top-8 p-1 ml-2">
        <span>25 mins</span>
      </div>
    </div>
  );
}
