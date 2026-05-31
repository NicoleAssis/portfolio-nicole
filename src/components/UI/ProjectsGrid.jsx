import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsGrid() {
  const projects = [
    {
      tag: "Node.js + EJS",
      title: "Gerenciamento de Cursos",
      description: "Projeto para a faculdade focado em gestão acadêmica.",
      details: "API com Node.js e EJS para o front-end de gerenciamento de cursos.",
      repo: "https://github.com/NicoleAssis/Plataforma_Gerenciamento_Cursos_ProjetoSenai"
    },
    {
      tag: "React + GraphQL",
      title: "Plataforma Fitness",
      description: "Projeto de React e GraphQL aprendido com a Alura.",
      details: "Focado em cache queries e gerenciamento de estado para plataformas fitness.",
      repo: "https://github.com/NicoleAssis/PlataformaFitness---GraphQL-Alura"
    },
    {
      tag: "Vite + React",
      title: "Calendário de Eventos",
      description: "Calendário interativo desenvolvido com Vite.",
      details: "Aplicação de gerenciamento de eventos com interface dinâmica.",
      repo: "https://github.com/NicoleAssis/React---Calend-rio-Eventos"
    },
    {
      tag: "Backend Node.js",
      title: "API REST",
      description: "API REST desenvolvida para aprendizado em Node.js.",
      details: "Estrutura escalável focada em rotas e persistência de dados.",
      repo: "https://github.com/NicoleAssis/API_REST"
    },
    {
      tag: "Web Design",
      title: "Blog de Literatura",
      description: "Blog construído com HTML, CSS e JS.",
      details: "Interface responsiva e limpa para compartilhamento de conteúdo literário.",
      repo: "https://github.com/NicoleAssis/Blog-de-Literatura"
    },
    {
      tag: "React + Tailwind + Jest",
      title: "Portfólio Pessoal",
      description: "Este próprio portfólio que reúne minha trajetória.",
      details:
        "Construído com React e Vite para performance, estilizado com Tailwind CSS. Contexto API,  testes automatizados com Jest e React Testing Library. Organização com Context API e integração de GraphQL em projetos complementares.",
      repo: "https://github.com/NicoleAssis/Portifolio1"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-center uppercase tracking-widest border-b-2 border-pink-400 inline-block mb-8">
        Projetos GitHub
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
