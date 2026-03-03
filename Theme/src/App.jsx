import React, { useEffect, useState } from "react";
import Theme from "./components/Theme";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Theme toggleTheme={toggleTheme} theme={theme} />
    </>
  );
};

export default App;
