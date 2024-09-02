import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  // --------------- Display User ------------------//
  useEffect(() =>{
    axios.get("http://localhost:5001")
    .then((response) =>{
      setUsers(response.data)
    })
    .catch((error) =>{
      console.log(error);
    })
  }, []);

  // ------------ Delete User ---------------//
  const handleDelete = (id) =>{
    // Display a confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if(isConfirmed){
      axios.delete("http://localhost:5001/deleteUser/" + id)
      .then((response) =>{
        console.log(response);
  
        // Update the state by filtering out the deleted user
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((error) =>{
        console.log(error);
      })
    }
  }

  return (
    <div className="flex bg-blue-500 justify-center items-center h-screen">
      <div className="bg-white w-full md:w-2/3 lg:w-2/5 rounded p-5">
        <div className="w-full flex justify-center underline py-3">
          <h1 className="font-bold text-xl">User Details</h1>
        </div>
        <div className="w-full flex justify-end py-4">
          <button className="bg-blue-500 rounded w-20 text-white">
            <Link to="/create">Add User</Link>
          </button>
        </div>
        <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border border-solid border-gray-300 bg-gray-300">
            <tr>
              <th className="pl-4">Name</th>
              <th>Email</th>
              <th className="pr-5">Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="border bg-gray-100">
            {users.map((user) => {
              return (
                <tr key={user._id} className="border border-solid border-gray-300">
                  <td className="pl-4">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td className="flex gap-2 py-2 pr-3">
                    <button className="bg-green-600 w-20 rounded text-white">
                    <Link to={`/update/${user._id}`}>Edit</Link>
                    </button>
                    <button onClick={() => handleDelete(user._id)} className="bg-red-600 w-20 rounded text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
