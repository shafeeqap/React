import React, { useState, useContext } from "react";
import olx_logo from "../../assets/OLX-Symbol.png";
import { SlMagnifier, SlArrowDown } from "react-icons/sl";
import searchIcon from "../../assets/Search_glass.png";
import Login from '../GoogleSingin/Login'
import Signup from "../Signup/Signup";
import LoginWithEmail from "../Login/LoginWithEmail"
import { AuthContext } from "../../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firbase/firebse";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar(porps) {
  const {user} = useContext(AuthContext)
  const [loginPop, setLoginPop] = useState(false);
  const [signupPop, setSignupPop] = useState(false);
  const [showLoginWithEmail, setShowLoginWithEmail] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <div className=" grid sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 bg-slate-100 fixed">
        <div className="flex p-4 justify-between items-center">
          <img
            src={olx_logo}
            className="w-11 object-contain h-9"
            alt="OLX Logo"
          />


          <div className="flex max-sm:hidden border border-spacing-1 sm:w-64 md:w-64 lg:w-64 p-2 border-black ml-5 bg-white">
            <SlMagnifier className="w-6 h-5 mt-1" />
            <input
              className="sm:w-64 max-sm:w-14 md:w-64 lg:w-64 pl-2 outline-none"
              type="text"
              placeholder="Location"
            />
            <SlArrowDown className="sm:w-4 md:w-8 lg:w-4 h-7" />
          </div>


          <div className="flex border max-[400px]:hidden border-black ml-4 h-12 md:w-full lg:w-2/4 outline-none">
            <input
            onChange={(e)=>porps?.setSearch(e.target.value)}
              className="p-2 w-full"
              type="text"
              placeholder="Find Cars, Mobile phones and more..."
            />
            <img src={searchIcon} alt="" />
          </div>


          <div className="flex justify-center max-md:hidden h-12 p-3 cursor-pointer items-center">
            <h1 className="font-semibold">ENGLISH</h1>
            <SlArrowDown className="m-3" />
          {/* </div> */}
          
          {/* <div className="flex"> */}
            <div className="flex h-12 p-3 cursor-pointer items-center underline hover:no-underline">
              {user ? (<h1 className="font-bold text-lg" onClick={()=>{signOut(auth); navigate('/login')}}>Logout</h1>) : (<h1 onClick={()=>setLoginPop(!loginPop)} className="font-bold text-lg">Login</h1>)}
            </div>
            <div className="flex h-10  sm:w-24 cursor-pointer justify-center items-center rounded-full border border-yellow-500">
              {user ? (<Link to="/create"><h1 className="font-bold max-sm:text-sm text-lg">+ SELL</h1>
              </Link>
              ) : (
                <div onClick={()=>alert('Please login')}>
                  <h1 className="font-bold max-sm:text-sm text-lg">+ SELL</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[130px]"></div>
      {loginPop && <Login setLoginPop={setLoginPop} setSignupPop={setSignupPop} setLoginWithEmail={setShowLoginWithEmail}/>}
      {signupPop && <Signup setSignupPop={setSignupPop} setLoginWithEmail={setShowLoginWithEmail}/>}
      {showLoginWithEmail && <LoginWithEmail setLoginWithEmail={setShowLoginWithEmail} setLoginPop={setLoginPop} setSignupPop={setSignupPop}/>}
    </>
  );
}
