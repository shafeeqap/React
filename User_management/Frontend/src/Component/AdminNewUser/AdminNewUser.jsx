import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../Loding/Loading";
import { useRegisterMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";

const AdminNewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full  rounded-xl py-6 px-6">
        <div className=" h-full ">
          <div className=" flex justify-center items-center rounded-md mb-5 ">
            <h1 className="text-2xl font-bold text-gray-400 uppercase">
              Create user
            </h1>
          </div>

          <form className="w-full"
          onSubmit={submitHandler}
          >
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">User Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">Mobile Number</label>
              <input
                onChange={(e) => setMobile(e.target.value)}
                type="text"
                value={mobile}
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                value={confirmPassword}
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
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
            
          </form>
        </div>
      </div>
      {/* {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Loading />
        </div>
      )} */}
    </div>
  );
};

export default AdminNewUser;
