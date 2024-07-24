import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiLogIn } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import Logo from '../../assets/React-logo.png'

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (state) => {
    setIsMenuOpen(state);
  };

  return (
    <div className="bg-teal-300 p-4">
      <nav>
        <div className="flex items-center justify-between">
          <div className="w-full flex justify-center md:justify-start">
            <div className="text-2xl font-bold">
              <img className="w-24" src={Logo} alt="" />
            </div>
          </div>
          <div
            className="md:hidden hover:bg-teal-200 w-8 h-8 rounded-md flex justify-center items-center"
            onClick={() => toggleMenu(!isMenuOpen)}
          >
            <RxHamburgerMenu />
          </div>
          <ul className="hidden md:flex space-x-4 mr-4 items-center">
            <li className="cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Profile
              </NavLink>
            </li>
            
            {userInfo ? (
              <li className="relative">
                <ToggleMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button className="bg-teal-500 hover:bg-teal-600 hover:text-gray-50 flex  gap-3 items-center w-24 py-1 px-2 rounded-md uppercase">
                    <FiLogIn className="w-4 h-4" />
                    Login 
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col md:hidden mt-4">
            <li className="py-2 px-2 hover:bg-teal-200 cursor-pointer rounded">
              <Link to="/">Home</Link>
            </li>
            {userInfo ? (
              <>
                <li className="py-2 px-2 hover:bg-teal-200 cursor-pointer rounded">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="py-2 px-2 hover:bg-teal-200 cursor-pointer rounded">
                  <Link to="/logout">Log out</Link>
                </li>
              </>
            ) : (
              <li className="py-2 px-2 hover:bg-teal-200 cursor-pointer rounded">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
