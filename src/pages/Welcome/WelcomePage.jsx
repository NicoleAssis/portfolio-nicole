import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Sidebar from "../../components/UI/Sidebar";
import HeroSection from "../../components/UI/HeroSection";
import CareerSection from "../../components/UI/CareerSection";
import ProjectsPage from "../Projects/ProjectsPage"; 
import AcademicPage from "../Academic/AcademicPage";
import ContactPage from "../Contact/ContactPage";
import Footer from "../../components/UI/Footer";
import AboutMe from "../../components/UI/AboutMe";

function WelcomePage() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // Captura a alteração da URL e rola a tela até a seção correspondente
  useEffect(() => {
    // Divide a hash para pegar o ID real da seção (ex: "about" de "#/welcome#about")
    const hashParts = window.location.hash.split('#');
    const targetId = hashParts[2]; 

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (hashParts[1] === "/welcome" && !targetId) {
      // Se clicou em "Início" ou voltou para o topo, rola para o hero
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Monitora cliques nos links da Sidebar

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo principal */}
      <main className="flex-1 ml-72 overflow-y-auto scroll-smooth text-lg leading-relaxed">
        
        {/* Seção de apresentação */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Seção sobre mim */}
        <section id="about" className="py-24 px-6">
          <AboutMe />
        </section>

        {/* Seção de carreira */}
        <section id="career" className="py-24 px-6">
          <CareerSection />
        </section>

        {/* Seção de projetos (Onde roda o seu Scrum) */}
        <section id="projects" className="py-24 px-6">
          <ProjectsPage />
        </section>

        {/* Seção de formação acadêmica */}
        <section id="academic" className="py-24 px-6">
          <AcademicPage />
        </section>

        {/* Seção de contato */}
        <section id="contact" className="py-24 px-6">
          <ContactPage />
        </section>

        {/* Rodapé */}
        <Footer />
      </main>
    </div>
  );
}

export default WelcomePage;