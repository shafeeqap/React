import React from "react";
import logo_1 from "../assets/OLX-Logo (2).png";
import logo_2 from "../assets/OLX-Symbol.png";
const Header = () => {
  return (
    <>
      <div className="flex justify-between p-4">
        <div>
          <img className="w-20" src={logo_1} alt="Logo1" />
        </div>
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Header Title</h1>
        </div>
        <div>
          <img className="w-28" src={logo_2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
