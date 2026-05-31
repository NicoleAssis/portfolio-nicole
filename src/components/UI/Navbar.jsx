import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50 flex justify-between items-center px-10 py-4 border-b border-slate-800">
      <h1 className="text-pink-400 font-bold text-lg tracking-widest">Nicole Assis</h1>
      <div className="flex space-x-6 text-sm font-semibold">
        <Link to="/welcome" className="text-slate-200 hover:text-pink-400 transition">Início</Link>
        <Link to="/academic" className="text-slate-200 hover:text-pink-400 transition">Formação</Link>
        <Link to="/projects" className="text-slate-200 hover:text-pink-400 transition">Projetos</Link>
        <Link to="/contact" className="text-slate-200 hover:text-pink-400 transition">Contato</Link>
        <button
          onClick={logout}
          className="bg-gradient-to-r from-blue-500 to-pink-400 text-white px-4 py-1 rounded-full hover:scale-105 transition"
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
