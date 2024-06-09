import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

export default function Signup() {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, signUp} = userAuth();
  const navigate = useNavigate()

  const handleFormSubmit = async (e)=>{
    e.preventDefault();
    
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="///"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-full" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/70 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold">Sign Up</h1>

              <form onSubmit={handleFormSubmit} className="w-full flex flex-col py-4">
                <input
                  className="p-2 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="p-2 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <button className="bg-red-600 py-2 my-6 rounded font-nsans-bold">
                  Sing Up
                </button>

                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(!rememberLogin)}
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">
                    Already subscribed to Netflix?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
