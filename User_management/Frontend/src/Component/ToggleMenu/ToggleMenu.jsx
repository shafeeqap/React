import React, { useRef, useEffect } from "react";
import profilePic from "../../assets/profilePic.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { logout } from "../../slices/authSlice";

const ToggleMenu = ({ isMenuOpen, toggleMenu }) => {

  const { userInfo } = useSelector((state) => state.auth);

  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <div ref={menuRef}>
      <button
        onClick={() => toggleMenu(!isMenuOpen)}
        className="cursor-pointer w-8 bg-transparent border-none"
      >
        <img className="w-8 h-8 rounded-full" src={profilePic} alt="user-pic" />
      </button>
      <div
        className={`sub-menu-wrap absolute top-14 right-0 ${
          isMenuOpen ? "block" : "hidden"
        } text-black w-[200px]`}
      >
        <div className="sub-menu bg-white p-3 rounded shadow-md">
          <div className="user-info flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-5"
              src={profilePic}
              alt="user-pic"
            />
            <h2 className="uppercase font-bold">{userInfo.name}</h2>
          </div>
          <hr className="h-1 bg-black mt-4 mb-4 rounded opacity-30" />
          <Link
            to="/profile"
            className="sub-menu-link flex items-center mt-3 mb-3 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
          >
            <CgProfile className="size-6" />
            <div className="hover:bg-gray-100 w-full flex items-center rounded py-1">
              <p className="w-full pl-4 text-sm">Profile</p>
              <span>
                <IoMdArrowDropright />
              </span>
            </div>
          </Link>
          <div
            onClick={logoutHandler}
            className="sub-menu-link flex items-center mt-3 mb-3 transition-transform duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"
          >
            <CiLogout className="size-6" />
            <div className="hover:bg-gray-100 w-full flex items-center rounded py-1">
              <p className="w-full pl-4 text-sm">Logout</p>
              <span>
                <IoMdArrowDropright />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
