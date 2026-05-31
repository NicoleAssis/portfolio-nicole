import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Importa o arquivo json diretamente para checar e-mails duplicados em modo offline
import dbData from "../../../db.json";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validação básica de senha
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    const newUser = {
      name,
      email,
      password,
      id: Math.random().toString(36).substr(2, 9), // Gera um ID aleatório simples
    };

    // Se estiver rodando no GitHub Pages, pula a requisição local direto para o localStorage
    const isGitHubPages = window.location.hostname.includes("github.io");

    if (isGitHubPages) {
      handleOfflineRegister(newUser);
      return;
    }

    try {
      // Tenta fazer a requisição POST normal para o seu json-server local
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Servidor offline");
      }

      setSuccess("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/"), 2000); // Redireciona para o login

    } catch (err) {
      handleOfflineRegister(newUser);
    } finally {
      setLoading(false);
    }
  };

  const handleOfflineRegister = (newUser) => {
    console.log("Modo offline/deploy ativo: simulando cadastro no localStorage.");

    // Busca os usuários locais já cadastrados anteriormente
    const localUsers = JSON.parse(localStorage.getItem("local_users")) || [];
    
    // Une a lista do db.json com os cadastros locais para verificar duplicidade
    const allUsers = [...dbData.users, ...localUsers];
    const emailExists = allUsers.some((u) => u.email === email);

    if (emailExists) {
      setError("Este e-mail já está cadastrado.");
      setLoading(false);
      return;
    }

    // Adiciona o novo usuário na lista do localStorage
    localUsers.push(newUser);
    localStorage.setItem("local_users", JSON.stringify(localUsers));

    setSuccess("Cadastro simulado com sucesso no navegador!");
    setLoading(false);
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="w-full max-w-xl p-8 bg-slate-900 rounded-2xl shadow-2xl text-white border border-slate-800">
      <h2 className="text-3xl font-bold text-center mb-6">Cadastro</h2>

      {error && (
        <div className="p-3 mb-4 text-sm bg-red-500/20 border border-red-500 text-red-200 rounded-md text-center">
          {error}
        </div>
      )}

      {success && (
        <div className="p-3 mb-4 text-sm bg-green-500/20 border border-green-500 text-green-200 rounded-md text-center">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome completo</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-pink-500 text-white"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-pink-500 text-white"
            placeholder="exemplo@gmail.com"
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

        <div>
          <label className="block text-sm font-medium mb-1">Confirmar senha</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          {loading ? "Processando..." : "Cadastrar"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-400">
        Já tem conta?{" "}
        <span
          onClick={() => navigate("/")}
          className="text-pink-500 hover:underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default RegisterForm;