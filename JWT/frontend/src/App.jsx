import React from "react";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
};

export default App;
