import React from "react";
import ProjectsGrid from "../../components/UI/ProjectsGrid";

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Meus Projetos
        </h1>
        <ProjectsGrid />
      </section>
    </main>
  );
}

export default ProjectsPage;
