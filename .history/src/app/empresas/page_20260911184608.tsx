import Header from "@/components/Header";

const services = [
  {
    title: "Análise defensiva do processo",
    description:
      "Leitura técnica dos elementos médicos do processo para identificar riscos e pontos de atenção para a empresa.",
    price: "R$ 1.200",
  },
  {
    title: "Quesitos de defesa",
    description:
      "Preparação dos pontos técnicos que precisam ser esclarecidos durante a perícia.",
    price: "R$ 450",
  },
  {
    title: "Acompanhamento da perícia",
    description:
      "Suporte técnico na preparação e acompanhamento da etapa pericial.",
    price: "R$ 1.800",
  },
  {
    title: "Impugnação ao laudo",
    description:
      "Análise crítica do laudo oficial para identificar inconsistências e pontos que merecem questionamento.",
    price: "R$ 1.500",
  },
  {
    title: "Segunda opinião para acordo",
    description:
      "Avaliação técnica independente para apoiar decisões relacionadas à negociação e ao risco do processo.",
    price: "R$ 800",
  },
  {
    title: "Auditoria preventiva de SST",
    description:
      "Avaliação preventiva da documentação e dos processos de saúde e segurança do trabalho.",
    price: "R$ 3.500",
  },
];

const documents = [
  "PGR",
  "LTCAT",
  "PCMSO",
  "ASOs",
  "PPP",
  "AET",
  "EPI",
];

export default function EmpresasPage() {
  return (
    <>
      <Header />

      <main className="empresas-page">
        {/* HERO */}
        <section className="empresas-hero">
          <div className="empresas-hero-inner">
            <div className="empresas-hero-copy">
              <span className="section-eyebrow">
                PARA EMPRESAS
              </span>

              <h1>
                Prevenir custa
                <br />
                menos do que
                <br />
                <em>remediar.</em>
              </h1>

              <p>
                Apoio técnico para empresas que querem compreender seus riscos,
                fortalecer seus processos e lidar com demandas envolvendo
                saúde e perícias.
              </p>

              <div className="empresas-hero-actions">
                <a href="#preventiva" className="btn-primary">
                  Conheça a prevenção
                  <span>→</span>
                </a>

                <a href="#solucoes" className="btn-text">
                  Ver soluções
                  <span>↓</span>
                </a>
              </div>
            </div>

            <div className="empresas-hero-aside">
              <span>01</span>

              <p>
                <strong>Olhar técnico antes que o problema apareça.</strong>
                <br />
                Prevenção também faz parte de uma boa estratégia.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="empresas-intro">
          <div className="empresas-intro-label">
            <span>01</span>
            <p>PREVENÇÃO</p>
          </div>

          <div className="empresas-intro-content">
            <h2>
              Segurança do trabalho
              <br />
              também é gestão de risco.
            </h2>

            <div className="empresas-intro-grid">
              <p>
                Documentos, procedimentos e registros de saúde e segurança do
                trabalho podem assumir um papel importante quando uma questão
                chega ao Judiciário.
              </p>

              <p>
                A EasyMed ajuda a empresa a olhar para esses elementos de forma
                técnica e preventiva, identificando pontos que podem ser
                aprimorados antes que se transformem em uma vulnerabilidade.
              </p>
            </div>
          </div>
        </section>

        {/* AUDITORIA */}
        <section id="preventiva" className="empresas-auditoria">
          <div className="auditoria-number">02</div>

          <div className="auditoria-content">
            <span className="section-eyebrow">
              AUDITORIA PREVENTIVA DE SST
            </span>

            <h2>
              Descubra onde estão
              <br />
              os pontos de atenção.
            </h2>

            <p className="auditoria-intro">
              Uma análise preventiva permite identificar inconsistências,
              lacunas documentais e pontos que merecem atenção antes que uma
              situação evolua para uma disputa.
            </p>

            <div className="auditoria-grid">
              <div className="auditoria-list">
                <span>DOCUMENTOS E ELEMENTOS AVALIADOS</span>

                <ul>
                  {documents.map((document) => (
                    <li key={document}>
                      <span>+</span>
                      {document}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="auditoria-price">
                <span>INVESTIMENTO</span>

                <strong>R$ 3.500</strong>

                <p>
                  Avaliação preventiva de SST com análise dos principais
                  documentos e elementos disponibilizados pela empresa.
                </p>

                <a href="#contato" className="btn-primary">
                  Solicitar auditoria
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section id="solucoes" className="empresas-solutions">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                QUANDO O PROCESSO JÁ EXISTE
              </span>

              <h2>
                Suporte técnico
                <br />
                para a defesa.
              </h2>
            </div>

            <p>
              Quando uma demanda já chegou ao Judiciário, a EasyMed apoia a
              empresa e seus representantes nas diferentes etapas técnicas.
            </p>
          </div>

          <div className="empresas-service-list">
            {services
              .filter((service) => service.title !== "Auditoria preventiva de SST")
              .map((service, index) => (
                <article
                  className="empresas-service-row"
                  key={service.title}
                >
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="service-main">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <div className="service-price">
                    <span>Investimento</span>
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

        {/* FLUXO */}
        <section className="empresas-flow">
          <div className="flow-heading">
            <span className="section-eyebrow">
              COMO A EASYMED PODE ENTRAR
            </span>

            <h2>
              Antes.
              <br />
              Durante.
              <br />
              Depois.
            </h2>
          </div>

          <div className="flow-items">
            <article>
              <span>01</span>
              <h3>Antes</h3>
              <p>
                Avaliação preventiva e identificação de pontos de atenção na
                documentação e nos processos de SST.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Durante</h3>
              <p>
                Apoio técnico para processos que já estão em andamento e
                exigem preparação ou acompanhamento pericial.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Depois</h3>
              <p>
                Análise dos resultados e identificação de aprendizados para
                melhorar processos futuros.
              </p>
            </article>
          </div>
        </section>

        {/* PLANO */}
        <section className="empresas-plan">
          <div>
            <span className="section-eyebrow">
              PARA OPERAÇÕES CONTÍNUAS
            </span>

            <h2>
              Uma estrutura de suporte
              <br />
              feita para sua realidade.
            </h2>
          </div>

          <div className="empresas-plan-side">
            <p>
              Empresas com demandas recorrentes podem contar com uma estrutura
              personalizada de acordo com seu volume e necessidades.
            </p>

            <div className="plan-proposal">
              <span>EMPRESA</span>
              <strong>Sob proposta</strong>
            </div>

            <a href="#contato" className="btn-light">
              Solicitar proposta
              <span>→</span>
            </a>
          </div>
        </section>

        {/* RESULTADO */}
        <section className="empresas-result">
          <span className="section-eyebrow">O OBJETIVO</span>

          <h2>
            Mais informação.
            <br />
            Menos surpresa.
          </h2>

          <p>
            Uma visão técnica qualificada ajuda a empresa a compreender melhor
            seus riscos e tomar decisões com mais segurança.
          </p>
        </section>

        {/* CTA */}
        <section id="contato" className="empresas-cta">
          <span className="section-eyebrow">
            EASYMED PERÍCIAS
          </span>

          <h2>
            Quer olhar para
            <br />
            sua operação?
          </h2>

          <p>
            Fale com a EasyMed para entender qual solução faz sentido para sua
            empresa.
          </p>

          <a href="mailto:contato@easymed.com.br" className="btn-primary">
            Falar com a EasyMed
            <span>→</span>
          </a>
        </section>
      </main>
    </>
  );
}