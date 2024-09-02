import logo from "./assets/OLX-Logo.png";
import profilePic from "./assets/profilePic.jpg";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropright } from "react-icons/io";
import { CiLogout, CiSettings } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-screen bg-gray-200 text-white">
      <nav className="bg-gray-950 flex items-center px-20 justify-between relative">
        <img className="w-16" src={logo} alt="logo" />
        <div className="flex ml-auto pr-8">
          <ul className="flex gap-8 cursor-pointer">
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <button onClick={toggleMenu} className="cursor-pointer w-8 bg-transparent border-none">
          <img
            className="w-8 h-8 rounded-full"
            src={profilePic}
            alt="user-pic"
          />
        </button>
        <div
          className={`sub-menu-wrap absolute top-7 right-10 ${
            isMenuOpen ? "block" : "hidden"
          } text-black w-[320px]`}
        >
          <div className="sub-menu bg-white p-3 m-10 rounded">
            <div className="user-info flex items-center">
              <img
                className="w-8 h-8 rounded-full mr-5"
                src={profilePic}
                alt="user-pic"
              />
              <h2>User Name</h2>
            </div>
            <hr className="h-1 bg-black mt-4 mb-4 rounded opacity-30" />

            <a
              href=""
              className="sub-menu-link flex items-center mt-3 mb-3 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
            >
              <CgProfile className="size-6" />
              <div className="hover:bg-gray-100 w-full flex items-center rounded py-1">
                <p className="w-full pl-4 text-sm">Edit Profile</p>
                <span>
                  <IoMdArrowDropright />
                </span>
              </div>
            </a>

            <a
              href=""
              className="sub-menu-link flex items-center mt-3 mb-3 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
            >
              <CiSettings className="size-6" />
              <div className="hover:bg-gray-100 w-full flex items-center rounded py-1">
                <p className="w-full pl-4 text-sm">Setting & Privacy</p>
                <span>
                  <IoMdArrowDropright />
                </span>
              </div>
            </a>

            <a
              href=""
              className="sub-menu-link flex items-center mt-3 mb-3 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
            >
              <IoMdHelpCircleOutline className="size-6" />
              <div className="hover:bg-gray-100 w-full flex items-center rounded py-1">
                <p className="w-full pl-4 text-sm">Help & Support</p>
                <span>
                  <IoMdArrowDropright />
                </span>
              </div>
            </a>

            <a
              href=""
              className="sub-menu-link flex items-center mt-3 mb-3 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
            >
              <CiLogout className="size-6" />
              <div className="hover:bg-gray-100 w-full flex items-center rounded py-1">
                <p className="w-full pl-4 text-sm">Logout</p>
                <span>
                  <IoMdArrowDropright />
                </span>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
