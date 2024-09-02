import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  // ------------------ Create User -----------------//
  const submit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:5001/createUser", {name, email, age})
    .then((response) =>{
      console.log(response.data);
      navigate("/")
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  return (
    <div className="flex bg-blue-500 justify-center items-center h-screen">
      <div className="bg-white w-2/5 rounded p-5">
        <div className="w-full flex justify-center underline py-3">
          <h1 className="font-bold text-xl">Add User</h1>
        </div>
        <form onSubmit={submit}>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              // value={name}
              placeholder="Enter name"
              className="border p-1 w-full rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              // value={email}
              placeholder="Enter email"
              className="border p-1 w-full rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              type="text"
              // value={age}
              placeholder="Enter age"
              className="border p-1 w-full rounded"
            />
          </div>
          <div className="mb-2 mt-10">
            <button className="bg-green-600 p-1 w-full rounded text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
