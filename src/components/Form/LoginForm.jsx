import React, { useContext, useState } from "react";
import InputField from "../UI/InputField";
import SubmitButton from "../UI/SubmitButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // busca usuário pelo email
      const res = await fetch(`http://localhost:5000/users?email=${email}`);
      const data = await res.json();

      // compara senha manualmente
      if (data.length > 0 && data[0].password === password) {
        login(data[0]); // salva no contexto e cria sessão
        window.location.href = "/welcome"; // redireciona para página de boas‑vindas
      } else {
        alert("Usuário ou senha inválidos");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-md p-10 rounded-xl w-[28rem] text-white shadow-lg">
      <h2 className="text-5xl font-semibold mb-10">Login</h2>

      <InputField
        label="Usuário ou Email"
        type="text"
        placeholder="seuemail@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        label="Senha"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <SubmitButton text="Entrar" onClick={handleLogin} />

      <p className="mt-6 text-center text-sm text-gray-300">
        Não tem conta?{" "}
        <Link to="/register" className="text-pink-400 hover:underline">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
