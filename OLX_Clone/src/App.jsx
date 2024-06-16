import { Route, Routes } from "react-router-dom";
import Main from "./Component/Main/Main";
import Details from "./Component/Details/Details";
import Signup from "./Component/Signup/Signup";
import Create  from './Pages/Create'
import LoginWithEmail from "./Pages/LoginWithEmail";
import { useContext, useEffect } from "react";
import {AuthContext} from './Context/AuthContext'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "./Firbase/firebse";

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
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<LoginWithEmail/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </>
  );
}
