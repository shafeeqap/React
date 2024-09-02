import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/logout");
      if (response.data.message === "Logged out") {
        setUser(null);
        navigate("/login");
      } else {
        window.alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav>
        <div className="bg-blue-300 h-14 flex justify-between items-center px-5">
          <div className="flex gap-10 pl-10">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
          </div>
          <div className="flex w-1/4 justify-center">
            <div className="w-full flex justify-end">
              {user && user.email ? (
                <button
                  onClick={handleLogout}
                  className="border border-black rounded hover:bg-gray-50 p-1 w-24"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-blue-500 rounded hover:bg-blue-600 p-1 w-24 mr-5 text-white text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
