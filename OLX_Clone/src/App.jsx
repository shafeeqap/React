import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CreatePage  from './Pages/CreatePage'
import { useContext, useEffect } from "react";
import {AuthContext} from './Context/AuthContext'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "./Firbase/firebse";
import SignupPage from "./Pages/SignupPage";
import DetailsPage from "./Pages/DetailsPage";
import LoginPage from "./Pages/LoginPage";

export default function App() {

  const {user, setUser} = useContext(AuthContext)
  

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      // console.log(currentUser);
    })
    return () => unsubscribe();
  },[])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </>
  );
}
