import React from "react";

function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-8 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest border-b-2 border-pink-400 mb-12">
        Contato
      </h2>

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-10 w-full max-w-xl text-center shadow-lg space-y-6 text-lg md:text-xl">
        <p className="text-slate-200 mb-6">
          Fique à vontade para entrar em contato comigo:
        </p>

        <div className="space-y-5">
          <p className="text-pink-400 font-semibold">
            Email:{" "}
            <a
              href="mailto:nicoleassis.dev@gmail.com"
              className="text-blue-400 hover:text-pink-400 transition"
            >
              nicassissiqueira@gmail.com
            </a>
          </p>

          <p className="text-pink-400 font-semibold">
            Telefone:{" "}
            <span className="text-blue-400">+55 (41) 99259-6582</span>
          </p>

          <p className="text-pink-400 font-semibold">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/nicoleassissiqueira/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-pink-400 transition"
            >
              linkedin.com/in/nicoleassissiqueira
            </a>
          </p>

          <p className="text-pink-400 font-semibold">
            GitHub:{" "}
            <a
              href="https://github.com/NicoleAssis"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-pink-400 transition"
            >
              github.com/NicoleAssis
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
