import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../api/userService";
import userAuthStore from "../../store/authStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = userAuthStore((state) => state.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log('login successful');
      setUser(response);
      navigate("/profile");
      toast.success("Login Successfull")
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="container w-[20rem]">
        <div className="my-[2rem]">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2">
          Login
        </button>
      </form>
      <div className="mt-4">
        <p className="text-white">
          New Customer?{" "}
          <Link to="/register" className="text-pink-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
