import React, { useState, useContext } from "react";
import SubmitButton from "../UI/SubmitButton";
import { AuthContext } from "../../contexts/AuthContext";
import { registerSchema } from "../../validations/registerSchema";
import { Link } from "react-router-dom";
import FormField from "../UI/FormField";
import PopupMessage from "../UI/PopupMessage";

function RegisterForm() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    try {
      registerSchema.parse(formData);

      const existing = await fetch(`http://localhost:5000/users?email=${formData.email}`);
      const users = await existing.json();
      if (users.length > 0) {
        setErrors({ email: "Email já cadastrado" });
        setSuccess("");
        return;
      }

      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      if (!res.ok) throw new Error("Erro ao cadastrar usuário");

      const newUser = await res.json();
      login(newUser);
      setSuccess("Cadastro realizado com sucesso!");
      setErrors({});
    } catch (err) {
      if (err.errors) {
        const formatted = {};
        err.errors.forEach((e) => {
          formatted[e.path[0]] = e.message;
        });
        setErrors(formatted);
        setSuccess("");
      } else {
        setErrors({ general: err.message });
        setSuccess("");
      }
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-md p-10 rounded-xl w-[28rem] text-white shadow-lg">
      <h2 className="text-5xl font-semibold mb-10">Cadastro</h2>

      <FormField
        label="Nome completo"
        type="text"
        placeholder="Seu nome"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
      />

      <FormField
        label="Email"
        type="email"
        placeholder="seuemail@gmail.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
      />

      <FormField
        label="Senha"
        type="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        error={errors.password}
      />

      <FormField
        label="Confirmar senha"
        type="password"
        placeholder="••••••••"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        error={errors.confirmPassword}
      />

      <SubmitButton text="Cadastrar" onClick={handleRegister} />

      <p className="mt-6 text-center text-sm text-gray-300">
        Não tem conta?{" "}
        <Link to="/" className="text-pink-400 hover:underline">
          Login
        </Link>
      </p>

      <PopupMessage message={errors.general} type="error" />
      <PopupMessage message={success} type="success" />
    </div>
  );
}

export default RegisterForm;
