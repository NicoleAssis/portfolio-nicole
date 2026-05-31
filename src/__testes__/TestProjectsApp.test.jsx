import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TestProjectsApp from "../pages/tests/TestProjectsApp"; 

describe("TestProjectsApp", () => {
  it("renderiza o título da seção", () => {
    render(
      <MemoryRouter>
        <TestProjectsApp />
      </MemoryRouter>
    );
    expect(screen.getByText(/Projetos de Teste/i)).toBeInTheDocument();
  });

  it("renderiza todos os projetos simulados", () => {
    render(
      <MemoryRouter>
        <TestProjectsApp />
      </MemoryRouter>
    );
    expect(screen.getByText(/Gerenciamento de Cursos/i)).toBeInTheDocument();
    expect(screen.getByText(/Plataforma Fitness/i)).toBeInTheDocument();
    expect(screen.getByText(/Calendário de Eventos/i)).toBeInTheDocument();
  });

  it("cada card mostra a tecnologia usada", () => {
    render(
      <MemoryRouter>
        <TestProjectsApp />
      </MemoryRouter>
    );
    expect(screen.getByText(/Node.js/i)).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/Vite \+ Tailwind/i)).toBeInTheDocument();
  });
});