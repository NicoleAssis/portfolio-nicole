import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Sidebar() {
  const { logout } = useContext(AuthContext);

  return (
    <aside
      role="navigation"
      aria-label="Menu lateral"
      className="fixed left-0 top-0 h-full w-72 bg-slate-950 border-r border-slate-800 flex flex-col justify-between p-8 z-50"
    >
      <div>
        <h1 className="text-pink-400 font-bold text-2xl tracking-widest mb-10">
          Nicole Assis
        </h1>

        <nav className="flex flex-col space-y-6 text-slate-200 font-medium text-lg">
          <a href="#hero" className="hover:text-pink-400 focus:text-pink-400 transition">
            Início
          </a>
          <a href="#about" className="hover:text-pink-400 focus:text-pink-400 transition">
            Sobre mim
          </a>
          <a href="#career" className="hover:text-pink-400 focus:text-pink-400 transition">
            Carreira
          </a>
          <a href="#projects" className="hover:text-pink-400 focus:text-pink-400 transition">
            Projetos
          </a>
          <a href="#academic" className="hover:text-pink-400 focus:text-pink-400 transition">
            Formação
          </a>
          <a href="#contact" className="hover:text-pink-400 focus:text-pink-400 transition">
            Contato
          </a>
        </nav>
      </div>

      <button
        onClick={logout}
        className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold text-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      >
        Sair
      </button>
    </aside>
  );
}

export default Sidebar;
