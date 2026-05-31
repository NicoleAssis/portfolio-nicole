import React from "react";

function AboutMe() {
  return (
    <section
      id="about"
      className="py-24 px-6 flex justify-center items-center bg-slate-900 rounded-2xl shadow-lg"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
        {/* Foto */}
        <img
          src="assets/images/nicole-assis.jpg"
          alt="Foto de Nicole Assis"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-xl border-4 border-pink-400 object-cover"
        />

        {/* Texto */}
        <div className="max-w-xl text-slate-200">
          <h2 className="text-4xl font-bold mb-6 text-pink-400">Sobre mim</h2>
          <p className="leading-relaxed mb-4">
            Sou Nicole de Assis Siqueira, acadêmica de Engenharia de Software e
            apaixonada por tecnologia e inovação. Minha trajetória combina
            experiências em Engenharia de Produção e Desenvolvimento de Software,
            com foco em otimização de processos, ciência de dados e soluções
            digitais.
          </p>
          <p className="leading-relaxed mb-6">
            Participei de projetos acadêmicos e hackathons, desenvolvendo modelos
            de previsão com IA e pipelines de dados. Busco sempre unir criatividade
            e análise para gerar impacto positivo em cada projeto.
          </p>

          {/* Botões de ação */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/nicoleassissiqueira/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-md bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/NicoleAssis"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-md bg-slate-700 text-white font-medium hover:bg-slate-600 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}

export default AboutMe;
