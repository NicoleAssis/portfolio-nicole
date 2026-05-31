import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Texto de direitos autorais */}
        <p className="text-sm">
          © {new Date().getFullYear()} Nicole Assis. Todos os direitos reservados.
        </p>

        {/* Links rápidos */}
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-pink-400 transition">Sobre</a>
          <a href="#projects" className="hover:text-pink-400 transition">Projetos</a>
          <a href="#academic" className="hover:text-pink-400 transition">Formação</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contato</a>
        </nav>

        {/* Ícones sociais */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/nicoleassissiqueira/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://github.com/NicoleAssis"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="mailto:nicassissiqueira@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
