import { createContext, useState } from "react";

export const userContext = createContext();

const ContextProvider = ({ children }) => {
    const [role, setRole] = useState("user"); 
    const [authenticated, setAuthenticated] = useState(true);  

  return (
    <userContext.Provider value={{ role, authenticated, setRole, setAuthenticated }}>
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
