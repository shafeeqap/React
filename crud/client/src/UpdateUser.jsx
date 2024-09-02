import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  // ------------ Get User for Update ---------------//
  useEffect(() => {
    axios.get("http://localhost:5001/getUser/" + id)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name || '');
        setEmail(response.data.email || '');
        setAge(response.data.age || '');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // ----------- Update User ----------------//
  const update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5001/updateUser/" + id, { name, email, age })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex bg-blue-500 justify-center items-center h-screen">
      <div className="bg-white w-2/5 rounded p-5">
        <div className="w-full flex justify-center underline py-3">
          <h1 className="font-bold text-xl">Update User</h1>
        </div>
        <form onSubmit={update}>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              value={name}
              className="border p-1 w-full rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              value={email}
              className="border p-1 w-full rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              type="text"
              placeholder="Enter age"
              value={age}
              className="border p-1 w-full rounded"
            />
          </div>
          <div className="mb-2 mt-10">
            <button className="bg-blue-500 p-1 w-full rounded text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
