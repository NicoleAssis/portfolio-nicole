import React, { createContext, useState, useEffect } from "react";
import { loadState, saveState } from "../utils/localStorage";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (user) => {
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 7);

    const session = { user, expiration };
    saveState(session); // usa utilitário
    setUser(user);
  };

  useEffect(() => {
    const stored = loadState();
    if (stored?.user && new Date() < new Date(stored.expiration)) {
      setUser(stored.user);
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("study-planner-state");
    window.location.href = "/";
  };


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
