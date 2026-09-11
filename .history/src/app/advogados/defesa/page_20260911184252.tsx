import Header from "@/components/Header";

const services = [
  {
    title: "Análise defensiva do processo",
    description:
      "Leitura técnica do processo para identificar riscos, pontos sensíveis e questões médicas relevantes para a defesa.",
    price: "R$ 1.200",
  },
  {
    title: "Quesitos de defesa",
    description:
      "Elaboração de quesitos direcionados aos aspectos técnicos que precisam ser esclarecidos durante a perícia.",
    price: "R$ 450",
  },
  {
    title: "Acompanhamento da perícia",
    description:
      "Suporte técnico durante a preparação e acompanhamento da etapa pericial.",
    price: "R$ 1.800",
  },
  {
    title: "Impugnação ao laudo",
    description:
      "Análise crítica do laudo oficial para identificar inconsistências, omissões e pontos que merecem questionamento.",
    price: "R$ 1.500",
  },
  {
    title: "Segunda opinião para acordo",
    description:
      "Avaliação técnica independente para auxiliar o escritório na compreensão dos riscos antes de uma decisão.",
    price: "R$ 800",
  },
  {
    title: "Auditoria preventiva de SST",
    description:
      "Avaliação documental preventiva para identificar vulnerabilidades antes que elas se transformem em problemas judiciais.",
    price: "R$ 3.500",
  },
];

const plans = [
  {
    name: "Defesa completa",
    price: "R$ 4.500",
    description:
      "Uma solução integrada para processos que exigem acompanhamento técnico em diferentes etapas.",
    featured: true,
  },
  {
    name: "Escritório parceiro",
    price: "R$ 2.900",
    description:
      "Suporte recorrente para escritórios que atuam regularmente em processos com matéria médica.",
  },
  {
    name: "Empresa",
    price: "Sob proposta",
    description:
      "Uma estrutura personalizada de acordo com o volume, operação e necessidades da empresa.",
  },
];

export default function AdvogadosDefesaPage() {
  return (
    <>
      <Header />

      <main className="defesa-page">
        {/* HERO */}
        <section className="defesa-hero">
          <div className="defesa-hero-inner">
            <div className="defesa-hero-copy">
              <span className="section-eyebrow">
                PARA DEFESA E RECLAMADAS
              </span>

              <h1>
                Antecipar riscos
                <br />
                é parte da
                <br />
                <em>defesa.</em>
              </h1>

              <p>
                Apoio técnico especializado para compreender a dimensão médica
                do processo, preparar a perícia e identificar pontos de atenção
                antes que eles se tornem problemas maiores.
              </p>

              <div className="defesa-hero-actions">
                <a href="#solucoes" className="btn-primary">
                  Conheça as soluções
                  <span>→</span>
                </a>

                <a href="#preventiva" className="btn-text">
                  Conheça a atuação preventiva
                  <span>↓</span>
                </a>
              </div>
            </div>

            <div className="defesa-hero-aside">
              <span>01</span>

              <p>
                <strong>Informação técnica antes da decisão.</strong>
                <br />
                Para compreender melhor o risco e trabalhar a estratégia de
                defesa com mais segurança.
              </p>
            </div>
          </div>
        </section>

        {/* CONTEXTO */}
        <section className="defesa-context">
          <div className="defesa-context-label">
            <span>01</span>
            <p>VISÃO TÉCNICA</p>
          </div>

          <div className="defesa-context-content">
            <h2>
              Uma defesa eficiente
              <br />
              começa antes do laudo.
            </h2>

            <div className="defesa-context-grid">
              <p>
                Processos envolvendo saúde, doença ocupacional, acidentes ou
                capacidade laboral podem reunir informações técnicas difíceis
                de interpretar apenas pela perspectiva jurídica.
              </p>

              <p>
                A EasyMed aproxima o conhecimento médico da estratégia
                processual, ajudando a identificar riscos, preparar perguntas e
                avaliar tecnicamente os elementos apresentados no processo.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section id="solucoes" className="defesa-solutions">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">SOLUÇÕES</span>

              <h2>
                Suporte técnico
                <br />
                quando importa.
              </h2>
            </div>

            <p>
              Da preparação dos quesitos à análise do laudo, escolha o apoio
              necessário para cada momento do processo.
            </p>
          </div>

          <div className="defesa-service-list">
            {services.map((service, index) => (
              <article className="defesa-service-row" key={service.title}>
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

        {/* PREVENTIVA */}
        <section id="preventiva" className="defesa-preventiva">
          <div className="preventiva-number">02</div>

          <div className="preventiva-content">
            <span className="section-eyebrow">ATUAÇÃO PREVENTIVA</span>

            <h2>
              Não espere o processo
              <br />
              para descobrir a vulnerabilidade.
            </h2>

            <div className="preventiva-grid">
              <div>
                <p>
                  A auditoria preventiva de SST permite avaliar documentos e
                  procedimentos antes que uma questão se transforme em uma
                  discussão judicial.
                </p>

                <a href="#contato" className="btn-primary">
                  Solicitar avaliação
                  <span>→</span>
                </a>
              </div>

              <div className="preventiva-list">
                <span>O QUE PODE SER AVALIADO</span>

                <ul>
                  <li>PGR</li>
                  <li>LTCAT</li>
                  <li>PCMSO</li>
                  <li>ASOs</li>
                  <li>PPP</li>
                  <li>AET</li>
                  <li>Documentação de EPI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section className="defesa-plans">
          <div className="plans-heading">
            <span className="section-eyebrow">ESTRUTURA CONTÍNUA</span>

            <h2>
              Para quem precisa
              <br />
              de suporte recorrente.
            </h2>

            <p>
              Soluções para escritórios e empresas que lidam regularmente com
              demandas envolvendo questões médicas.
            </p>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`perito-plan defesa-plan ${
                  plan.featured ? "featured" : ""
                }`}
              >
                {plan.featured ? (
                  <span className="plan-featured">SOLUÇÃO COMPLETA</span>
                ) : (
                  <span className="plan-featured invisible">
                    SOLUÇÃO COMPLETA
                  </span>
                )}

                <h3>{plan.name}</h3>

                <p>{plan.description}</p>

                <div className="plan-price">
                  <strong>{plan.price}</strong>

                  {plan.price !== "Sob proposta" && (
                    <span>por solução</span>
                  )}
                </div>

                <a href="#contato" className="plan-button">
                  Quero conhecer
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* RESULTADO */}
        <section className="defesa-result">
          <div>
            <span className="section-eyebrow">O PAPEL DA EASYMED</span>

            <h2>
              Técnica para
              <br />
              apoiar a decisão.
            </h2>
          </div>

          <div className="defesa-result-copy">
            <p>
              A EasyMed não substitui o trabalho jurídico nem determina a
              estratégia da defesa.
            </p>

            <p>
              O objetivo é fornecer uma leitura técnica qualificada para que o
              advogado compreenda melhor os elementos médicos envolvidos e
              possa tomar suas decisões com mais informação.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="defesa-cta">
          <span className="section-eyebrow">EASYMED PERÍCIAS</span>

          <h2>
            Existe um processo
            <br />
            para analisar?
          </h2>

          <p>
            Conte o que está acontecendo e descubra qual tipo de suporte
            técnico pode fazer sentido para o seu caso.
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