import React from "react";
import { MdOutlineNightlight, MdLightMode } from "react-icons/md";

const Navbar = ({ theme, toggleTheme }) => {
  console.log(theme, 'theme');
  
  return (
    <div>
      <nav className="navbar">
        <div className="nav-items">
          <h1 className="logo">Theme</h1>
          <button onClick={toggleTheme} className="toggle-theme">
            {theme === "dark" ? (
              <MdOutlineNightlight size={26} />
            ) : (
              <MdLightMode size={26} />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
