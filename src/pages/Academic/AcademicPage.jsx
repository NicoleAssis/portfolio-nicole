import React from "react";

function AcademicPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl font-bold uppercase tracking-widest border-b-2 border-pink-400 mb-8">
        Formação Acadêmica
      </h2>

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-2xl text-center shadow-lg space-y-6">
        <div>
          <h3 className="text-pink-400 font-semibold text-lg">
            🎓 Engenharia de Software — UniSenai
          </h3>
          <p className="text-slate-300">
            Graduação em andamento com foco em desenvolvimento de sistemas, análise de dados e otimização de processos industriais.
          </p>
        </div>

        <div>
          <h3 className="text-pink-400 font-semibold text-lg">
            💻 Técnico em Desenvolvimento de Sistemas — Senai
          </h3>
          <p className="text-slate-300">
            Formação técnica voltada para programação, banco de dados e arquitetura de software, com ênfase em aplicações web e automação.
          </p>
        </div>

        <div>
          <h3 className="text-pink-400 font-semibold text-lg">
            ⚙️ Técnico em Mecatrônica — Senai
          </h3>
          <p className="text-slate-300">
            Formação técnica em integração de sistemas mecânicos, eletrônicos e computacionais, aplicados à indústria 4.0.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AcademicPage;
