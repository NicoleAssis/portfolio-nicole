import React, { useState } from "react";

function ExperienceCard({ tag, title, description, details }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mb-6 transition hover:border-pink-400 hover:shadow-lg hover:-translate-y-1">
      <span className="text-pink-400 text-xs font-bold uppercase">{tag}</span>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
      <button
        className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold transition hover:scale-105"
        onClick={() => setOpen(!open)}
      >
        {open ? "Fechar ▴" : "Mais Informações ▾"}
      </button>
      {open && (
        <div className="mt-4 p-4 bg-slate-800 rounded-lg border-l-4 border-pink-400">
          <ul className="list-disc list-inside text-slate-200">
            {details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
