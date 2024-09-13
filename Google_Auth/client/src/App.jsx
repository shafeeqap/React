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
      console.log('User response:', res);
      
      if(res.data.user){
        setUser(res.data.user);
      }else{
        console.log('No user data received');
      }
    } catch (error) {
      console.log('Error fetching user:',error);
      
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