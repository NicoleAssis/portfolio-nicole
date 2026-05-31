import React from "react";

function SkillsSection() {
  const skills = [
    "Python (AI/RPA)",
    "React & Vite",
    "Node.js",
    "GraphQL",
    "Looker & Spotfire",
    "SQL & TypeScript"
  ];

  return (
    <section className="animate">
      <h2 className="text-2xl font-bold text-center uppercase tracking-widest border-b-2 border-pink-400 inline-block relative left-1/2 transform -translate-x-1/2 mb-8">
        Tecnologias
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-slate-800 px-4 py-2 rounded-full border border-slate-600 text-sm transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-400 hover:text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
