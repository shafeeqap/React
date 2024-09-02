import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/signup", { email, password })
      .then((result) => {
        console.log(result.data);
        window.alert(result.data.message)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500 p-4 sm:p-0">
      <div className="bg-white rounded min-w-1.5 p-5">
        <div className="pb-10 pt-5 text-center">
          <h2 className="font-bold text-2xl md:text-3xl ">Register</h2>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                className="w-full border rounded p-1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                className="w-full border rounded p-1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Confirm Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter confirm password"
                className="w-full border rounded p-1"
              />
            </div>
            <div className="pt-5">
              <button className="bg-blue-500 w-full rounded p-1 text-white hover:bg-blue-600">
              Signup
              </button>
            </div>
            <div className="text-center text-sm text-gray-400 pb-5">
              <p>
              You have already an account?{" "}
                <Link to="/login"><span className="text-blue-400 cursor-pointer hover:text-blue-500">Log in</span></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
