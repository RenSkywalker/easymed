import Link from "next/link";

const plans = [
  {
    name: "Solo",
    price: "297",
    description: "Para quem está começando ou trabalha com uma carteira menor.",
    limit: "Até 20 processos ativos",
  },
  {
    name: "Pro",
    price: "397",
    description: "Para uma rotina profissional com maior volume de processos.",
    limit: "Até 50 processos ativos",
    featured: true,
  },
  {
    name: "Ilimitado",
    price: "497",
    description: "Para quem precisa de liberdade para crescer sem limitar sua operação.",
    limit: "Processos ilimitados",
  },
];

export default function Software() {
  return (
    <section
      id="software"
      className="software-section"
      aria-labelledby="software-title"
    >
      <div className="container">
        <div className="software-heading">
          <div>
            <span className="eyebrow">SOFTWARE EASYMED</span>

            <h2 id="software-title">
              Mais do que organizar processos.
              <span>Organize o seu raciocínio.</span>
            </h2>
          </div>

          <p>
            Uma ferramenta pensada para acompanhar o trabalho do
            perito, estruturando informações e critérios ao longo
            da análise.
          </p>
        </div>

        <div className="software-feature">
          <div className="software-feature-copy">
            <span className="software-feature-number">
              TECNOLOGIA A SERVIÇO DA PERÍCIA
            </span>

            <h3>
              Você continua tomando as decisões.
              A tecnologia ajuda a organizar o caminho.
            </h3>

            <p>
              O sistema reúne informações do caso, organiza critérios
              e estrutura a análise para facilitar sua rotina.
              A conclusão continua sendo sua.
            </p>

            <Link href="/software" className="software-link">
              Conheça o software
              <span>↗</span>
            </Link>
          </div>

          <div className="software-feature-visual">
            <div className="software-window">
              <div className="software-window-bar">
                <span />
                <span />
                <span />
              </div>

              <div className="software-window-body">
                <div className="software-sidebar">
                  <strong>easymed</strong>

                  <span>Processos</span>
                  <span>Agenda</span>
                  <span>Análises</span>
                  <span>Documentos</span>
                </div>

                <div className="software-dashboard">
                  <small>VISÃO GERAL</small>

                  <h4>
                    Sua rotina,
                    <br />
                    organizada.
                  </h4>

                  <div className="software-stat-grid">
                    <div>
                      <strong>20</strong>
                      <span>processos</span>
                    </div>

                    <div>
                      <strong>08</strong>
                      <span>em análise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="plans-header">
          <span className="eyebrow">PLANOS</span>

          <h3>
            Escolha a estrutura que acompanha
            <span>o seu momento profissional.</span>
          </h3>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plan-card ${
                plan.featured ? "plan-card-featured" : ""
              }`}
            >
              {plan.featured && (
                <span className="plan-featured-label">
                  MAIS ESCOLHIDO
                </span>
              )}

              <h4>{plan.name}</h4>

              <p className="plan-description">
                {plan.description}
              </p>

              <div className="plan-price">
                <small>R$</small>
                <strong>{plan.price}</strong>
                <span>/mês</span>
              </div>

              <div className="plan-limit">
                {plan.limit}
              </div>

              <Link href="/software" className="plan-button">
                Conhecer plano
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}