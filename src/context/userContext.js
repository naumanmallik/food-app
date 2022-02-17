import jwtDecode from "jwt-decode";
import React, { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = React.useState(
    window?.localStorage?.getItem("token")
  );
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (token) {
      try {
        let decoded = jwtDecode(token);
        if (Date.now() >= decoded.exp * 1000) {
          throw Error("token expired");
        }
      } catch (error) {
        localStorage.removeItem("token");
        window.location.reload();
      }
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext can only be used inside UserProvider");
  }
  return context;
}
