import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMenu, AiOutlineQuestionCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";

const menuIcons = [
  { icons: <IoHomeOutline size={30} />, label: "Home" },
  { icons: <MdOutlineDashboard size={30} />, label: "Dashboard" },
  { icons: <CiSettings size={30} />, label: "Settings" },
  { icons: <IoLogoBuffer size={30} />, label: "Log" },
  { icons: <TbReportSearch size={30} />, label: "Report" },
  { icons: <AiOutlineQuestionCircle size={30} />, label: "Help" },
];

const SideBar = () => {
  const [toggleOpen, setToggleOpen] = useState(true);
  
  return (
    <nav
      className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-teal-600 text-white ${
        toggleOpen ? "w-60" : "w-16"
      }`}
    >
      {/* Header */}
      <div className="px-3 py-2 h-20 flex justify-between items-center">
        <img
          src={Logo}
          alt="Logo"
          className={`${toggleOpen ? "w-14" : "w-0"} rounded-md`}
        />
        <div>
          <AiOutlineMenu
            size={34}
            className={`duration-500 cursor-pointer ${
              toggleOpen && "rotate-180"
            }`}
            onClick={() => setToggleOpen(!toggleOpen)}
          />
        </div>
      </div>

      {/* Body */}
      <ul className="flex-1">
        {menuIcons.map((item, index) => (
          <li
            key={index}
            className="px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
          >
            <div>{item.icons}</div>
            <p
              className={`${
                !toggleOpen && "w-0 translate-x-24"
              } duration-500 overflow-hidden`}
            >
              {item.label}
            </p>

            <p
              className={`${
                toggleOpen && "hidden"
              } absolute left-16 shadow-md rounded-md w-0 p-0 text-white bg-slate-600 duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
            >
              {item.label}
            </p>
            
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-center gap-2 px-3 py-2">
        <div>
          <FaUserCircle size={30} />
        </div>
        <div
          className={`leading-5 ${
            !toggleOpen && "w-0 translate-x-24"
          } duration-500 overflow-hidden`}
        >
          <p>shafeeq</p>
          <span className="text-xs">shafeeq@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
