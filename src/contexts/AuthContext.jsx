import React, { createContext, useState, useEffect } from "react";
import { loadState, saveState } from "../utils/localStorage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // O login continua igual: recebe o objeto { name, email } vindo do formulário e salva a sessão
  const login = (user) => {
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 7);

    const session = { user, expiration };
    saveState(session); 
    setUser(user);
  };

  // Restaura a sessão ao atualizar a página (se ainda estiver dentro dos 7 dias)
  useEffect(() => {
    const stored = loadState();
    if (stored?.user && new Date() < new Date(stored.expiration)) {
      setUser(stored.user);
    }
  }, []);

  // O logout limpa o estado e redireciona para a tela inicial
  const logout = () => {
    setUser(null);
    // Remove o estado salvo da sessão (garanta que essa chave é a mesma usada no saveState)
    localStorage.removeItem("study-planner-state"); 
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}