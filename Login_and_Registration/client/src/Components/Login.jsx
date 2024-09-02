import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] =useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  axios.defaults.withCredentials = true;

  const validateForm = () =>{
    const newErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email){
      newErrors.email = "Email is required"
      setTimeout(() =>{
        setErrors((prevErrors) => ({...prevErrors, email: ""}));
      }, 3000);
    }else if(!emailPattern.test(email)){
      newErrors.email = "Email is invalid";
      setTimeout(() =>{
        setErrors((prevErrors) => ({...prevErrors, email: ""}));
      }, 3000);
    }

    if(!password){
      newErrors.password = "Password is required"
      setTimeout(() =>{
        setErrors((prevErrors) =>({...prevErrors, password: ""}));
      },3000);
    }else if(password.length < 6){
      newErrors.password = "Password must be at least 6 characters long";
      setTimeout(() =>{
        setErrors((prevErrors) =>({...prevErrors, password: ""}));
      }, 3000);
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateForm()){
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(response.data);
    
      if (response.data.message === "success") {
        const completeUserData ={
          name: response.data.user.name,
          email: response.data.user.email,
          role: response.data.user.role,
        }
        setUser(completeUserData);

        if(response.data.user.role === "admin"){
          navigate("/dashboard");
        }else{
          navigate("/");
        }

      }else{
        window.alert(response.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      window.alert("An error occurred during login.");
    }
  };

  const showPassword = () =>{
    let show = document.getElementById("password");
    if(show.type === "password"){
      show.type = "text"
    }else{
      show.type = "password"
    }
  }

  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen">
      <div className="bg-white rounded p-5">
        <div className="py-4 text-center">
          <h2 className="text-2xl font-bold">Login</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter email"
              autoComplete="off"
              className="border p-1 w-full rounded"
              id="email"
            />
            {errors.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}       
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Enter password"
              autoComplete="off"
              className="border p-1 w-full rounded"
              id="password"
            />
            <div className="text-sm text-gray-400">
              <input onClick={showPassword} type="checkbox" name="" id="" /> Show Password
            </div>
            {errors.password && (<p className="text-red-500 text-sm">{errors.password}</p>)}
          </div>
          <div className="py-5">
            <button className="w-full bg-blue-500 rounded p-1 text-white">
              Login
            </button>
            <div className="text-center py-1">
              <p className="text-sm text-gray-400">
                You don't have an account?{" "}
                <span className="text-blue-400 cursor-pointer">
                  <Link to="/signup">Sign up</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
