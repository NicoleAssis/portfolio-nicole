import React from "react";
import CopyField from "./CopyField";

function Header() {
  return (
    <div className="text-white max-w-[28rem]">
      {/* Ícones decorativos */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-3 h-6 bg-white rounded-sm"></div>
        <div className="w-3 h-6 bg-white rounded-sm"></div>
      </div>

      {/* Título principal */}
      <h1 className="text-6xl font-bold mb-6">Bem-vindo!</h1>

      {/* Texto de introdução */}
      <p className="text-gray-300 mb-8 leading-relaxed">
        Este é um projeto de portfólio pessoal, onde compartilho minhas
        experiências, projetos e conquistas. Explore as seções para conhecer
        mais sobre minha trajetória e habilidades.
      </p>

      {/* Botão de instrução */}
      <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition mb-6">
        Para acessar, utilize o email e senha abaixo<br />
        ou registre-se para criar sua conta
      </button>

      {/* Campos de credenciais com botão de copiar */}
      <CopyField label="Email" value="admin@gmail.com" />
      <CopyField label="Senha" value="admin123" />
    </div>
  );
}

export default Header;
