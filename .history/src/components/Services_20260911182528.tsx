import Link from "next/link";

const audiences = [
  {
    number: "01",
    title: "Sou perito",
    description:
      "Suporte, ferramentas e soluções para organizar sua rotina e tornar seu trabalho mais eficiente.",
    href: "/peritos",
  },
  {
    number: "02",
    title: "Sou advogado",
    description:
      "Apoio técnico para análise de casos, quesitos, acompanhamento de perícias e pareceres.",
    href: "/advogados",
  },
  {
    number: "03",
    title: "Represento uma empresa",
    description:
      "Estratégia técnica para defesa, prevenção e gestão de riscos médico-periciais.",
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
          <span className="eyebrow">ENCONTRE SUA SOLUÇÃO</span>

          <h2 id="solutions-title">
            A EasyMed acompanha diferentes momentos da sua rotina.
          </h2>

          <p>
            Escolha o caminho que mais se aproxima da sua necessidade
            e conheça as soluções desenvolvidas para cada perfil.
          </p>
        </div>

        <div className="audience-list">
          {audiences.map((audience) => (
            <Link
              key={audience.number}
              href={audience.href}
              className="audience-item"
            >
              <span className="audience-number">
                {audience.number}
              </span>

              <div className="audience-main">
                <h3>{audience.title}</h3>

                <p>{audience.description}</p>
              </div>

              <span className="audience-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}