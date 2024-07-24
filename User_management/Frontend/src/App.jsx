import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRout from "./Component/ProtectedRout/ProtectedRout";
import AdminPage from "./Pages/AdminPage";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        {/* Protected Rout */}
        <Route path="" element={<ProtectedRout />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
    </>
  );
}

export default App;
