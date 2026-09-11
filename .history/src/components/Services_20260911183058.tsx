const audiences = [
  {
    number: "01",
    label: "PARA PERITOS",
    title: "Mais estrutura para o seu trabalho pericial.",
    description:
      "Organize sua rotina, conte com suporte especializado e tenha ferramentas para acompanhar seus processos com mais clareza.",
    href: "/peritos",
  },
  {
    number: "02",
    label: "PARA ADVOGADOS",
    title: "Suporte técnico para decisões mais bem fundamentadas.",
    description:
      "Da análise inicial aos quesitos, acompanhamento e pareceres, conte com apoio especializado nas questões médico-periciais.",
    href: "/advogados",
  },
  {
    number: "03",
    label: "PARA EMPRESAS",
    title: "Prevenção e estratégia para reduzir riscos.",
    description:
      "Análise técnica, suporte em processos e auditoria preventiva para ajudar sua empresa a tomar decisões com mais segurança.",
    href: "/empresas",
  },
];

export default function Services() {
  return (
    <section
      id="solucoes"
      className="services-section"
      aria-labelledby="solutions-title"
    >
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">SOLUÇÕES EASYMED</span>

          <h2 id="solutions-title">
            Experiência técnica para diferentes necessidades.
          </h2>

          <p>
            Cada situação exige um tipo de suporte. Conheça as soluções
            da EasyMed para peritos, advogados e empresas.
          </p>
        </div>

        <div className="audience-list">
          {audiences.map((audience) => (
            <a
              key={audience.number}
              href={audience.href}
              className="audience-item"
            >
              <span className="audience-number">
                {audience.number}
              </span>

              <div className="audience-main">
                <span className="audience-label">
                  {audience.label}
                </span>

                <h3>{audience.title}</h3>

                <p>{audience.description}</p>
              </div>

              <span className="audience-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}