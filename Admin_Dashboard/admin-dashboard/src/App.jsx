import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header openSidebar={openSidebar}/>
      <Sidebar openSidebar={openSidebar} openSidebarToggle={openSidebarToggle}/>
      <Home />
    </div>
  );
};

export default App;
