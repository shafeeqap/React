import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./Context/FirebaseContext.jsx";
import AuthProvider from "./Context/AuthContext.jsx";
import PostPovider from "./Context/PostContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseProvider>
    <AuthProvider>
      <PostPovider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostPovider>
    </AuthProvider>
  </FirebaseProvider>
);
