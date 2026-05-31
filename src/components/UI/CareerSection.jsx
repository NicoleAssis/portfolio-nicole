import React from "react";
import ExperienceCard from "./ExperienceCard";

function CareerSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-center uppercase tracking-widest border-b-2 border-pink-400 inline-block mb-8">
        Carreira
      </h2>
      <p className="text-slate-200 mb-12 animate">
        Acadêmica em Engenharia de Software pela UniSenai. Formada em Técnico em Desenvolvimento de Sistemas pelo Senai e em Mecatrônica.
        Atuando na Renault do Brasil com análise de dados e melhoria de processos.
        Tenho forte interesse em Iniciação Científica, colaborando em pesquisas de Machine Learning e otimização industrial.
      </p>

      <h2 className="text-2xl font-bold text-center uppercase tracking-widest border-b-2 border-pink-400 inline-block mb-8">
        Experiência Industrial
      </h2>

      <ExperienceCard
        tag="Renault • Atual"
        title="Analista de Projetos e Processos"
        description="Híbrido entre Engenharia de Produção e Desenvolvimento de Software."
        details={[
          "Foco em redução de desperdícios via cronoanálise.",
          "Automação RPA e Python para processos.",
          "Estruturação de Dashboards no Looker e Spotfire.",
          "Pipelines de dados com Power Query e Power Automate."
        ]}
      />

      <ExperienceCard
        tag="Renault • 2024-2026"
        title="Estágio em Engenharia de Processos"
        description="Transformação digital e padronização de dados entre diferentes setores."
        details={[
          "Criação de processos e pesquisa de mapeamento de dados industriais.",
          "Criação de POCs avançadas em Power BI com DAX.",
          "Padronização de dados entre setores distintos."
        ]}
      />
    </section>
  );
}

export default CareerSection;
