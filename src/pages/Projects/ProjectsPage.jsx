import React from "react";

function ContactPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl font-bold uppercase tracking-widest border-b-2 border-pink-400 mb-8">
        Contato
      </h2>

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-md text-center shadow-lg">
        <p className="text-slate-300 mb-4">
          Fique à vontade para entrar em contato comigo:
        </p>

        <div className="space-y-3">
          <p className="text-pink-400 font-semibold">
            ✉️ Email:{" "}
            <a
              href="mailto:nicoleassis.dev@gmail.com"
              className="text-blue-400 hover:text-pink-400 transition"
            >
              nicoleassis.dev@gmail.com
            </a>
          </p>

          <p className="text-pink-400 font-semibold">
            📞 Telefone:{" "}
            <span className="text-blue-400">+55 (41) 99999-9999</span>
          </p>

          <p className="text-pink-400 font-semibold">
            💼 LinkedIn:{" "}
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
            🧠 GitHub:{" "}
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
