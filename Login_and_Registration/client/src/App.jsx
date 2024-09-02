import React, { useContext, useEffect } from "react";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Dashboard from "./Components/AdminDashboard";
import { UserContext } from "./Context/userContext";
import axios from "axios";

axios.defaults.withCredentials = true;

const App = () => {
  const {setUser} = useContext(UserContext);
  
  useEffect(() =>{
    const checkSession = async() =>{
      try {
        const response = await axios.get("http://localhost:3000/session");
        console.log("Session response:", response.data);

        if(response.data.message === "Session active"){
          
          setUser(response.data.user)
        }
      } catch (error) {
        console.log("Session check error:", error);
      }
    };

    checkSession();

  }, [setUser])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
