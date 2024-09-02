import React from "react";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({ children }) => {
    
  const authToken = localStorage.getItem("Token");

  return authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
