import React from "react";

function HeroSection() {
  return (
    <header
      role="banner"
      aria-label="Seção principal de apresentação"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-slate-950 text-center px-6"
    >
      <h1
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent mb-4"
        aria-label="Nicole Assis"
      >
        Nicole Assis
      </h1>
      <p
        className="text-sky-300 font-semibold tracking-widest mb-3 text-sm md:text-base"
        aria-label="Estudante em Engenharia de Software"
      >
        Estudante em Engenharia de Software, em busca de desenvolvimento Full Stack ou Front-end.
      </p>



      <p
        className="text-sky-200 text-base md:text-xl font-medium max-w-xl mx-auto leading-relaxed"
        aria-label="Analista de Dados para Performance Industrial"
      >

      </p>

      {/* Botão com scroll suave */}
      <a
        href="#contact"
        className="mt-10 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold text-sm md:text-base hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        aria-label="Ir para seção de contato"
      >
        Entrar em contato
      </a>
    </header>
  );
}

export default HeroSection;
