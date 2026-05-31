import React from "react";
import ProjectCard from "../../components/UI/ProjectCard";

function TestProjectsApp() {
  const projects = [
    { id: 1, title: "Gerenciamento de Cursos", tech: "Node.js", description: "CRUD de cursos e alunos" },
    { id: 2, title: "Plataforma Fitness", tech: "React", description: "Acompanhamento de treinos e nutrição" },
    { id: 3, title: "Calendário de Eventos", tech: "Vite + Tailwind", description: "Calendário interativo com filtros" },
  ];

  return (
    <section>
      <h2>Projetos de Teste</h2>
      <div>
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            tech={p.tech}
            description={p.description}
          />
        ))}
      </div>
    </section>
  );
}

export default TestProjectsApp;
