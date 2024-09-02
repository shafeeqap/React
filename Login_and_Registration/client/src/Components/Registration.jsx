import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
      }, 3000);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
      setTimeout(() =>{
        setErrors((prevErrors) => ({...prevErrors, email: ""}))
      },3000);
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Email is invalid";
      setTimeout(() =>{
        setErrors((prevErrors) =>({...prevErrors, email: ""}));
      }, 3000);
    }

    if (!password) {
      newErrors.password = "Password is required";
      setTimeout(() =>{
        setErrors((prevErrors) =>({...prevErrors, password: ""}));
      }, 3000);
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      setTimeout(() =>{
        setErrors((prevErrors) => ({...prevErrors, password: ""}))
      }, 3000);
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      setTimeout(() =>{
        setErrors((prevErrors) => ({...prevErrors, confirmPassword: ""}));
      }, 3000);
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Password do not match";
      setTimeout(() =>{
        setErrors((prevErrors) => ({...prevErrors, confirmPassword: ""}));
      }, 3000);
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    axios
      .post("http://localhost:3000/signup", { name, email, password })
      .then((response) => {
        console.log(response.data);
        window.alert(response.data.message);
        if (response.data.message === "success") {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center bg-gray-300 h-screen">
      <div className="bg-white p-5">
        <div className="text-center py-5">
          <h2 className="font-bold text-2xl">Sign up</h2>
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              className="border w-full p-1 rounded"
            />
            {errors.name && (<p className="text-red-500 text-sm">{errors.name}</p>)}
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              className="border w-full p-1 rounded"
            />
            {errors.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}
          </div>
          <div className="mb-3">
            <label htmlFor="">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              className="border w-full p-1 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="mb-3 relative">
            <label htmlFor="">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Confirm password"
              name="confirmPassword"
              value={confirmPassword}
              className="border w-full p-1 rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-8 bg-transparent border-none text-gray-500"
            >
              {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="py-5">
            <button className="w-full bg-blue-500 p-1 rounded text-white">
              Sign up
            </button>
            <div className="text-center text-sm">
              <p className="text-gray-400">
                You have already account ?{" "}
                <span className="text-blue-400 cursor-pointer">
                  <Link to="/login">Login</Link>{" "}
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
