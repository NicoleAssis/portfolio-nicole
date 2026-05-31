import React from "react";

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-900 rounded-2xl shadow-lg flex flex-col md:flex-row gap-12"
    >
      {/* Informações de contato */}
      <div className="flex-1 text-slate-200">
        <h2 className="text-4xl font-bold mb-6 text-pink-400">Contato</h2>
        <p className="mb-6 leading-relaxed">
          Fique à vontade para entrar em contato comigo através dos canais
          abaixo. Seja para oportunidades, colaborações ou apenas trocar ideias!
        </p>

        <ul className="space-y-4">
          <li>
            <span className="font-semibold text-white">📧 Email:</span>{" "}
            <a
              href="mailto:nicassissiqueira@gmail.com"
              className="text-blue-400 hover:text-pink-400 transition"
            >
              nicassissiqueira@gmail.com
            </a>
          </li>
          <li>
            <span className="font-semibold text-white">📱 Telefone:</span>{" "}
            <a
              href="tel:+5541992596582"
              className="text-blue-400 hover:text-pink-400 transition"
            >
              (41) 99259-6582
            </a>
          </li>
          <li>
            <span className="font-semibold text-white">💼 LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/nicoleassissiqueira/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-pink-400 transition"
            >
              linkedin.com/in/nicoleassissiqueira
            </a>
          </li>
          <li>
            <span className="font-semibold text-white">💻 GitHub:</span>{" "}
            <a
              href="https://github.com/NicoleAssis"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-pink-400 transition"
            >
              github.com/NicoleAssis
            </a>
          </li>
        </ul>
      </div>

      {/* Formulário de contato */}
      <div className="flex-1">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Seu email"
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Sua mensagem"
            rows="4"
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium hover:opacity-90 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
