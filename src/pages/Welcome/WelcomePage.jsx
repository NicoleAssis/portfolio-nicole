import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Sidebar from "../../components/UI/Sidebar";
import HeroSection from "../../components/UI/HeroSection";
import CareerSection from "../../components/UI/CareerSection";
import ProjectsGrid from "../../components/UI/ProjectsGrid";
import AcademicPage from "../Academic/AcademicPage";
import ContactPage from "../Contact/ContactPage";
import Footer from "../../components/UI/Footer";
import AboutMe from "../../components/UI/AboutMe"; // ✅ corrigido

function WelcomePage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo principal */}
      <main className="flex-1 ml-72 overflow-y-auto scroll-smooth text-lg leading-relaxed">
        {/* Seção de apresentação */}
        <HeroSection />

        {/* Seção sobre mim */}
        <section id="about" className="py-24 px-6">
          <AboutMe />
        </section>

        {/* Seção de carreira */}
        <section id="career" className="py-24 px-6">
          <CareerSection />
        </section>

        {/* Seção de projetos */}
        <section id="projects" className="py-24 px-6">
          <ProjectsGrid />
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
