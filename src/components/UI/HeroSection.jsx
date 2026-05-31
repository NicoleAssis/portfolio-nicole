import React from "react";

function HeroSection() {
  return (
    <header
      role="banner"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-slate-950 text-center px-6"
    >
      {/* Nome Principal */}
      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent mb-4">
        Nicole Assis
      </h1>

      {/* Cargo / Subtítulo Menor */}
      <p className="text-sky-300 font-semibold tracking-widest mb-4 text-sm md:text-base uppercase">
        Engenharia de Software
      </p>

      {/* Descrição Principal (O texto que descreve seu objetivo) */}
      <p className="text-sky-200 text-base md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
        Estudante em busca de oportunidades em desenvolvimento **Full Stack** ou **Front-end**. Apaixonada por criar soluções eficientes e designs modernos.
      </p>

      {/* Botão com scroll suave */}
      <a
        href="#contact"
        className="mt-10 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold text-sm md:text-base hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      >
        Entrar em contato
      </a>
    </header>
  );
}

export default HeroSection;