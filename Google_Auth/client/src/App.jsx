import React, { useEffect, useState } from 'react'
import Login from './pages/Login/Login'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home/Home';
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  const getUser = async () =>{
    try {
      const url = "http://localhost:3000/auth/login/success";
      const res = await axios.get(url, { withCredentials: true});
      console.log(res, 'Res');
      
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() =>{
    getUser();
  }, []);
console.log(user);


  return (
    <>
    <Routes>
      <Route path='/' element={user ? <Home user={user}/> : <Navigate to="/login" />} />
      <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} /> 
    </Routes>
    </>
  )
}

export default App