import React, { createContext, useContext } from "react";
import { useState } from "react";
const createAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null, token: null });
  return (
    <createAuth.Provider value={{ user, setUser }}>
      {children}
    </createAuth.Provider>
  );
};

export const useAuth = () => useContext(createAuth);
 