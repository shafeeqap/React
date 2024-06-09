import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../context/AuthContext";

export default function NavBar() {
  const { user, logOut } = userAuth();
  const navigate = useNavigate();

  const handleLogout = async () =>{
    try {
      await logOut();
      navigate('/')
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute w-full p-4 flex item-center justify-between z-50 ">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold curser-pointer text-5xl">
          netflix
        </h1>
      </Link>

      {
        user?.email ? (
          <div>
        <Link to="/profile">
          <button className="capitalize pr-4">account</button>
        </Link>

        {/* <Link to="/signup"> */}
          <button onClick={handleLogout} className="capitalize bg-red-600 px-6 py-2 rounded curser-pointer">
            log Out
          </button>
        {/* </Link> */}
      </div>

        ) : (

          <div>
        <Link to="/login">
          <button className="capitalize pr-4">login</button>
        </Link>

        <Link to="/signup">
          <button className="capitalize bg-red-600 px-6 py-2 rounded curser-pointer">
            sign up
          </button>
        </Link>
      </div>
        )
      }
      
    </div>
  );
}
