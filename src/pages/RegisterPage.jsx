import React from "react";
import RegisterForm from "../components/Form/RegisterForm";
import background from "../assets/background.jpg";

function RegisterPage() {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center relative p-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* camada escura */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* conteúdo */}
      <div className="relative z-10 w-full max-w-xl flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;