import React from "react";
import RegisterForm from "../components/Form/RegisterForm";
import background from "../assets/background.jpg";

function RegisterPage() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* camada escura */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* conteúdo */}
      <div className="relative z-10">
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
