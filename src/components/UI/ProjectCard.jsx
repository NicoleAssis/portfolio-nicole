import React, { useState } from "react";

function ProjectCard({ title, tech, description, details, repo }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 transition hover:border-pink-400 hover:shadow-lg hover:-translate-y-1">
      {/*  agora usa 'tech' em vez de 'tag' */}
      <span className="text-pink-400 text-xs font-bold uppercase">{tech}</span>

      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-slate-300">{description}</p>

      <button
        className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold transition hover:scale-105"
        onClick={() => setOpen(!open)}
      >
        {open ? "Fechar ▴" : "Ver Detalhes ▾"}
      </button>

      {open && (
        <div className="mt-4 p-4 bg-slate-800 rounded-lg border-l-4 border-pink-400">
          <p className="text-slate-200">{details}</p>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="block mt-3 text-blue-400 font-bold hover:text-pink-400"
            >
              Repositório →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
