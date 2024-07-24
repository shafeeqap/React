import React, { useState } from "react";
import guitar from "../../assets/guitar.webp";
import { FcGoogle } from "react-icons/fc";
import { FiSmartphone } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firbase/firebse";


export default function Login(props) {
  const { setLoginPop, setSignupPop, setLoginWithEmail } = props;

    // Function for Google Sign-In
  const googleSingin = async()=>{
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[380px] sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

              <div onClick={()=> setLoginPop(false)} className="flex justify-end cursor-pointer">
              <RiCloseLargeFill/>
              </div>

              <div className="flex sm:items-start justify-center">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <div className="flex justify-center mt-6">
                    <img className="w-24" src={guitar} alt="loginImage" />
                  </div>
                  <div className="flex-row justify-center">
                    <div className="mt-2">
                      <p className="text-base font-medium text-center m-9">
                        Help us become one of the safest places to buy and sell
                      </p>
                    </div>


                    <div className="flex border-2 border-black font-bold p-2 items-center rounded-md cursor-pointer">
                      <FiSmartphone className="size-5 ml-2" />
                      <h1 className="ml-2">Continue with phone</h1>
                    </div>


                    <div onClick={googleSingin} className="flex border border-gray-400 font-bold p-2 items-center rounded-md mt-4 cursor-pointer">
                      <FcGoogle className="size-5 ml-2" />
                      <h1 className="ml-2">Continue with google</h1>
                    </div>


                    <div className="text-center font-bold mt-6">
                    <h1>OR</h1>
                    <h1 onClick={()=>{setLoginPop(false); setLoginWithEmail(true)}} className="underline cursor-pointer">Loing with Email</h1>
                    </div>
                    <div className="flex py-6 justify-center">
                      <span className="mr-2 text-sm">Don't have an account ?</span><p className="text-blue-500 text-sm cursor-pointer" onClick={()=>{setLoginPop(false) ; setSignupPop(true); }}>Signup</p>
                    </div>
                    <div className="mt-14 text-sm text-center text-black/65">
                      <p>All your personal details are safe with us.</p>
                      <p>If you continue, you are accepting <span className="text-blue-600">OLX Terms and Conditions and Privacy Policy</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
}

