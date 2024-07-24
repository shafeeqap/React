import { useState } from "react";
import axios from 'axios'

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:5001/register", {name, email, password})
    .then((response) =>{
      console.log(response.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
  return (
    <>
      <div className="flex justify-center items-center bg-blue-400 h-screen p-5">
        <div className="bg-white rounded w-3/4 md:w-2/5 lg:w-1/4 p-5 overflow-x-auto">
          <div className="text-center mb-4">
            <h2 className="font-bold text-xl py-2 uppercase">Register</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
                className="border p-1 rounded w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                className="border p-1 rounded w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                className="border p-1 rounded w-full"
              />
            </div>
            <div className="py-5">
              <button className="bg-green-600 w-full rounded p-1 text-white">
                Register
              </button>
              <p className="text-gray-400">
                Already have an account ?{" "}
                <span className="text-blue-500 cursor-pointer">Login</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
