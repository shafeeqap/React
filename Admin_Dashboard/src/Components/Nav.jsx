import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="bg-black">
        <div className="container mx-auto flex justify-between items-center py-4">
          <button
            className="text-white focus:outline-none"
            aria-controls="navbar"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
