import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Sidebar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpa a sessão no Context / LocalStorage
    logout(); 
    // Redireciona de forma segura para a raiz (Login) do HashRouter
    navigate("/"); 
  };

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

        {/* Links ajustados com a rota mãe #/welcome antes de cada ID de seção */}
        <nav className="flex flex-col space-y-6 text-slate-200 font-medium text-lg">
          <a href="#/welcome#hero" className="hover:text-pink-400 focus:text-pink-400 transition">
            Início
          </a>
          <a href="#/welcome#about" className="hover:text-pink-400 focus:text-pink-400 transition">
            Sobre mim
          </a>
          <a href="#/welcome#career" className="hover:text-pink-400 focus:text-pink-400 transition">
            Carreira
          </a>
          <a href="#/welcome#projects" className="hover:text-pink-400 focus:text-pink-400 transition">
            Projetos
          </a>
          <a href="#/welcome#academic" className="hover:text-pink-400 focus:text-pink-400 transition">
            Formação
          </a>
          <a href="#/welcome#contact" className="hover:text-pink-400 focus:text-pink-400 transition">
            Contato
          </a>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold text-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      >
        Sair
      </button>
    </aside>
  );
}

export default Sidebar;