const features = [
  {
    number: "01",
    title: "Processos organizados",
    description:
      "Tenha uma visão clara dos processos ativos, informações importantes e próximos passos.",
  },
  {
    number: "02",
    title: "Informações centralizadas",
    description:
      "Reúna em um só lugar os dados necessários para acompanhar cada trabalho.",
  },
  {
    number: "03",
    title: "Critérios estruturados",
    description:
      "Organize os pontos relevantes da análise de forma estruturada e consistente.",
  },
  {
    number: "04",
    title: "Cálculos e registros",
    description:
      "Mantenha cálculos, observações e registros relacionados ao processo organizados.",
  },
  {
    number: "05",
    title: "Agenda e prazos",
    description:
      "Acompanhe compromissos e prazos importantes da sua rotina pericial.",
  },
  {
    number: "06",
    title: "Visão da operação",
    description:
      "Entenda melhor o andamento dos seus processos sem depender de planilhas espalhadas.",
  },
];

const plans = [
  {
    name: "Solo",
    price: "R$ 297",
    limit: "Até 20 processos ativos",
    description:
      "Para quem está começando ou trabalha com uma quantidade menor de processos.",
    trial: "14 dias para experimentar",
  },
  {
    name: "Pro",
    price: "R$ 397",
    limit: "Até 50 processos ativos",
    description:
      "Para peritos que já possuem uma rotina consolidada e precisam de mais capacidade.",
    featured: true,
  },
  {
    name: "Ilimitado",
    price: "R$ 497",
    limit: "Processos ilimitados",
    description:
      "Para uma operação com maior volume de processos e necessidade de escala.",
  },
];

export default function SoftwarePage() {
  return (
    <>
      <main className="software-page">
        {/* HERO */}
        <section className="software-hero-page">
          <div className="software-hero-page-inner">
            <div className="software-hero-copy">
              <span className="section-eyebrow">
                SOFTWARE EASYMED
              </span>

              <h1>
                Mais do que
                <br />
                organizar processos.
                <br />
                <em>Organize o raciocínio.</em>
              </h1>

              <p>
                Uma plataforma criada para ajudar o perito a organizar sua
                operação, suas informações e os critérios que fazem parte do
                trabalho pericial.
              </p>

              <div className="software-hero-actions">
                <a href="#planos" className="btn-light">
                  Conhecer os planos
                  <span>→</span>
                </a>

                <a href="#recursos" className="software-hero-link">
                  Ver recursos
                  <span>↓</span>
                </a>
              </div>
            </div>

            <div className="software-dashboard">
              <div className="dashboard-top">
                <span>EasyMed</span>
                <span>Visão geral</span>
              </div>

              <div className="dashboard-title">
                <span>SEUS PROCESSOS</span>
                <strong>18 ativos</strong>
              </div>

              <div className="dashboard-bars">
                <div>
                  <span>Em análise</span>
                  <i style={{ width: "72%" }} />
                </div>

                <div>
                  <span>Aguardando</span>
                  <i style={{ width: "48%" }} />
                </div>

                <div>
                  <span>Em andamento</span>
                  <i style={{ width: "61%" }} />
                </div>

                <div>
                  <span>Concluídos</span>
                  <i style={{ width: "84%" }} />
                </div>
              </div>

              <div className="dashboard-footer">
                <span>Próximo prazo</span>
                <strong>14 SET</strong>
              </div>
            </div>
          </div>
        </section>

        {/* POSICIONAMENTO */}
        <section className="software-position">
          <div className="software-position-number">01</div>

          <div className="software-position-content">
            <span className="section-eyebrow">
              POR QUE EXISTE
            </span>

            <h2>
              A ferramenta organiza.
              <br />
              A decisão continua sendo sua.
            </h2>

            <div className="software-position-grid">
              <p>
                O trabalho pericial envolve informações, documentos, critérios,
                cálculos e diferentes etapas. Quando tudo isso está espalhado,
                acompanhar cada caso pode se tornar desnecessariamente
                trabalhoso.
              </p>

              <p>
                O software da EasyMed foi pensado para estruturar esse
                processo. Ele apoia a organização e a análise, mas a conclusão
                técnica continua sendo responsabilidade do profissional.
              </p>
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section id="recursos" className="software-features">
          <div className="software-features-heading">
            <span className="section-eyebrow">
              RECURSOS
            </span>

            <h2>
              Tudo em um lugar.
            </h2>

            <p>
              Uma estrutura pensada para acompanhar a rotina real de quem
              trabalha com perícias.
            </p>
          </div>

          <div className="software-feature-list">
            {features.map((feature) => (
              <article key={feature.number}>
                <span>{feature.number}</span>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FLUXO */}
        <section className="software-flow">
          <div className="software-flow-heading">
            <span className="section-eyebrow">
              SUA ROTINA
            </span>

            <h2>
              Menos procura.
              <br />
              Mais visão.
            </h2>
          </div>

          <div className="software-flow-items">
            <article>
              <span>01</span>
              <h3>Receba</h3>
              <p>
                Registre as informações importantes assim que um novo processo
                chegar.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Organize</h3>
              <p>
                Estruture documentos, dados, critérios e observações em um
                único ambiente.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Analise</h3>
              <p>
                Tenha uma visão mais clara dos elementos que fazem parte de
                cada caso.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Conclua</h3>
              <p>
                Use as informações organizadas como apoio para sua conclusão
                profissional.
              </p>
            </article>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="software-plans-page">
          <div className="software-plans-heading">
            <span className="section-eyebrow">
              PLANOS
            </span>

            <h2>
              Comece no seu ritmo.
            </h2>

            <p>
              Escolha a capacidade que corresponde ao volume da sua operação.
            </p>
          </div>

          <div className="software-plans-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`software-plan ${
                  plan.featured ? "featured" : ""
                }`}
              >
                {plan.featured && (
                  <span className="software-plan-featured">
                    MAIS ESCOLHIDO
                  </span>
                )}

                {!plan.featured && (
                  <span className="software-plan-featured invisible">
                    MAIS ESCOLHIDO
                  </span>
                )}

                <h3>{plan.name}</h3>

                <p>{plan.description}</p>

                <div className="software-plan-limit">
                  {plan.limit}
                </div>

                <div className="software-plan-price">
                  <strong>{plan.price}</strong>
                  <span>/mês</span>
                </div>

                {plan.trial && (
                  <small>{plan.trial}</small>
                )}

                <a href="#contato" className="software-plan-button">
                  Quero começar
                  <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* OBSERVAÇÃO */}
        <section className="software-note">
          <div>
            <span className="section-eyebrow">
              IMPORTANTE
            </span>

            <h2>
              Tecnologia como
              <br />
              apoio, não como substituta.
            </h2>
          </div>

          <p>
            O software foi pensado para apoiar o trabalho do perito na
            organização das informações e do raciocínio. A análise técnica,
            interpretação profissional e conclusão do caso permanecem sob
            responsabilidade do perito.
          </p>
        </section>

        {/* CTA */}
        <section id="contato" className="software-cta">
          <span className="section-eyebrow">
            SOFTWARE EASYMED
          </span>

          <h2>
            Organize sua
            <br />
            próxima perícia.
          </h2>

          <p>
            Escolha um plano e comece a transformar sua rotina em uma operação
            mais organizada.
          </p>

          <a href="#planos" className="btn-primary">
            Ver planos
            <span>→</span>
          </a>
        </section>
      </main>
    </>
  );
}