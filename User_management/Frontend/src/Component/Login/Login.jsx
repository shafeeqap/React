import React, { useEffect, useState } from "react";
import image from "../../assets/2942004_log.png";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../Loding/Loading";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full md:w-3/4 bg-gray-100 rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-center h-full">
          <div className="border-r-2 flex items-center justify-center w-full md:w-1/2 h-64 md:h-full">
            <img
              className="w-48 md:w-80"
              src={image}
              alt="Login Illustration"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div>
              <h1 className="text-3xl font-semibold text-gray-700 mb-8">
                Login
              </h1>
            </div>

            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  value={email}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  value={password}
                />
              </div>
              <div className="py-4">
                <button
                  type="submit"
                  className="bg-teal-300 hover:bg-teal-400 w-full py-2 rounded-md transition duration-300"
                >
                  Submit
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-sm">
                  You don't have an account ?{" "}
                  <span className="text-blue-500 cursor-pointer">
                    <Link to="/signup"> Sign up </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Login;
