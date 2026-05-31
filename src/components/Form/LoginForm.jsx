import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
// Importa o arquivo json diretamente como base de dados inicial
import dbData from "../../../db.json";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Evita o delay de requisição quebrada se o app já estiver rodando em produção
    const isGitHubPages = window.location.hostname.includes("github.io");

    if (isGitHubPages) {
      handleOfflineLogin();
      return;
    }

    try {
      // Tenta fazer a requisição normal para o seu json-server local
      const response = await fetch("http://localhost:5000/users");
      
      if (!response.ok) {
        throw new Error("Servidor offline");
      }

      const users = await response.json();
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        login({ name: foundUser.name, email: foundUser.email });
        navigate("/welcome");
      } else {
        setError("E-mail ou senha incorretos.");
      }

    } catch (err) {
      handleOfflineLogin();
    } finally {
      setLoading(false);
    }
  };

  const handleOfflineLogin = () => {
    console.log("Modo offline/deploy ativo: simulando banco de dados local.");

    // Busca os usuários recém-cadastrados no localStorage (se houver)
    const localUsers = JSON.parse(localStorage.getItem("local_users")) || [];
    
    // Une os usuários padrões do seu db.json com os novos criados pelo recrutador
    const allUsers = [...dbData.users, ...localUsers];

    const foundUser = allUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      login({ name: foundUser.name, email: foundUser.email });
      navigate("/welcome");
    } else {
      setError("E-mail ou senha incorretos.");
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl p-8 bg-slate-900 rounded-2xl shadow-2xl text-white border border-slate-800">
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
      
      {error && (
        <div className="p-3 mb-4 text-sm bg-red-500/20 border border-red-500 text-red-200 rounded-md text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-pink-500 text-white"
            placeholder="admin@gmail.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-pink-500 text-white"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-md font-medium hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Carregando..." : "Entrar"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-400">
        Não tem conta?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-pink-500 hover:underline cursor-pointer"
        >
          Cadastre-se
        </span>
      </p>
    </div>
  );
}

export default LoginForm;