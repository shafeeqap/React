import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import NavBar from "./Components/NavBar/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRout from "./Components/ProtectedRout/ProtectedRout";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <ProtectedRout>
                <Profile />
              </ProtectedRout>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}
