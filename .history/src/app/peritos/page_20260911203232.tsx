import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluções para Peritos | EasyMed Perícias",
  description:
    "Serviços e suporte especializado para peritos: dossiês, pré-laudos, cálculos, esclarecimentos, assessoria e gestão de processos.",
  alternates: {
    canonical: "/peritos",
  },
};

const services = [
  {
    title: "Dossiê do caso",
    description:
      "Organização das informações essenciais do processo para facilitar a leitura e a preparação da perícia.",
    price: "R$ 180",
  },
  {
    title: "Pré-laudo estruturado",
    description:
      "Estruturação técnica das informações do caso para apoiar a elaboração do laudo.",
    price: "R$ 350",
  },
  {
    title: "Cálculos e auditoria",
    description:
      "Conferência e análise dos cálculos relacionados ao processo.",
    price: "R$ 120",
  },
  {
    title: "Esclarecimentos",
    description:
      "Apoio na organização e preparação de esclarecimentos relacionados ao trabalho pericial.",
    price: "R$ 100",
  },
  {
    title: "Assessoria de início",
    description:
      "Suporte para quem está começando na atuação como perito, desde a organização inicial até os primeiros processos.",
    price: "R$ 2.500 – R$ 4.500",
  },
  {
    title: "Pacote Processo completo",
    description:
      "Uma solução integrada para acompanhar as principais etapas de um processo pericial.",
    price: "R$ 500",
  },
];

const plans = [
  {
    name: "Essencial",
    price: "R$ 990",
    description: "Para quem precisa de suporte recorrente para sua rotina.",
  },
  {
    name: "Pleno",
    price: "R$ 1.890",
    description:
      "Para peritos com uma operação maior e necessidade de acompanhamento contínuo.",
    featured: true,
  },
  {
    name: "Full",
    price: "R$ 3.490",
    description:
      "Para uma estrutura mais completa de suporte e organização da atividade pericial.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "#service",
  name: "Soluções para Peritos",
  description:
    "Serviços e suporte especializado para profissionais que atuam com perícias.",
  provider: {
    "@id": "#organization",
  },
  serviceType: "Suporte especializado para perícias",
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Peritos",
      item: "/peritos",
    },
  ],
};

export default function PeritosPage() {
  return (
    <>
      <main className="peritos-page">
        {/* HERO */}
        <section className="peritos-hero">
          <div className="peritos-hero-inner">
            <div className="peritos-hero-copy">
              <span className="section-eyebrow">PARA PERITOS</span>

              <h1>
                Mais tempo para
                <br />
                <em>analisar.</em>
              </h1>

              <p>
                A EasyMed apoia o perito na organização, preparação e
                acompanhamento do trabalho pericial — da nomeação à entrega.
              </p>

              <div className="peritos-hero-actions">
                <a href="#solucoes" className="btn-primary">
                  Conheça as soluções
                </a>

                <a href="#planos" className="btn-text">
                  Ver planos
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="peritos-hero-note">
              <div className="note-line" />

              <p>
                <strong>O trabalho continua sendo seu.</strong>
                <br />
                A EasyMed entra para organizar o que toma tempo e dar suporte
                ao que precisa de atenção.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="peritos-intro">
          <div className="peritos-intro-label">
            <span>01</span>
            <p>O DESAFIO</p>
          </div>

          <div className="peritos-intro-content">
            <h2>
              A perícia exige conhecimento.
              <br />
              A rotina exige muito mais.
            </h2>

            <div className="peritos-intro-grid">
              <p>
                Entre processos, documentos, prazos, cálculos, agenda e
                elaboração de laudos, uma parte importante do tempo do perito
                acaba ficando longe da análise técnica.
              </p>

              <p>
                A EasyMed foi pensada para reduzir essa carga operacional,
                oferecendo suporte especializado sem tirar do profissional o
                controle sobre suas decisões.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section id="solucoes" className="peritos-solutions">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">SOLUÇÕES</span>

              <h2>
                Escolha o suporte
                <br />
                que precisa.
              </h2>
            </div>

            <p>
              Serviços independentes para demandas específicas ou uma estrutura
              de apoio para acompanhar sua rotina.
            </p>
          </div>

          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-row" key={service.title}>
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-price">
                  <span>A partir de</span>
                  <strong>{service.price}</strong>
                </div>

                <a href="#contato" className="service-link">
                  Solicitar
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="peritos-plans">
          <div className="plans-heading">
            <span className="section-eyebrow">SUPORTE CONTÍNUO</span>

            <h2>
              Quando você precisa
              <br />
              de uma equipe ao lado.
            </h2>

            <p>
              Planos mensais para peritos que querem transformar tarefas
              operacionais em uma rotina mais organizada.
            </p>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`perito-plan ${plan.featured ? "featured" : ""}`}
              >
                {plan.featured && (
                  <span className="plan-featured">MAIS PROCURADO</span>
                )}

                <h3>{plan.name}</h3>

                <p>{plan.description}</p>

                <div className="plan-price">
                  <strong>{plan.price}</strong>
                  <span>/mês</span>
                </div>

                <a href="#contato" className="plan-button">
                  Quero este plano
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SOFTWARE */}
        <section className="peritos-software">
          <div className="software-copy">
            <span className="section-eyebrow">TECNOLOGIA</span>

            <h2>
              Sua operação pode ser
              <br />
              mais organizada.
            </h2>

            <p>
              Além do suporte especializado, a EasyMed está desenvolvendo uma
              plataforma para ajudar o perito a organizar seus processos,
              informações, critérios e rotina em um único ambiente.
            </p>

            <a href="/software" className="btn-light">
              Conheça o software
              <span>→</span>
            </a>
          </div>

          <div className="software-side">
            <span>01</span>
            <p>
              Organização
              <br />
              sem substituir
              <br />
              sua análise.
            </p>
          </div>
        </section>

        {/* MATERIAIS */}
        <section className="peritos-materials">
          <div className="materials-number">02</div>

          <div className="materials-copy">
            <span className="section-eyebrow">MATERIAIS</span>

            <h2>
              Conhecimento para
              <br />
              trabalhar melhor.
            </h2>

            <p>
              Modelos, prompts e conteúdos desenvolvidos para apoiar o perito
              em diferentes momentos da sua atuação profissional.
            </p>

            <a href="/materiais" className="btn-primary">
              Ver materiais
              <span>→</span>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="peritos-cta">
          <span className="section-eyebrow">EASYMED PERÍCIAS</span>

          <h2>
            Vamos organizar
            <br />
            sua rotina?
          </h2>

          <p>
            Conte o que você precisa e veja qual solução faz mais sentido para
            sua atuação.
          </p>

          <a href="mailto:contato@easymed.com.br" className="btn-primary">
            Falar com a EasyMed
            <span>→</span>
          </a>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
        }}
        />
    </>
  );
}