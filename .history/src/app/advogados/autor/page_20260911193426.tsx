const services = [
  {
    title: "Análise da causa de pedir",
    description:
      "Leitura técnica do processo para identificar a presença de matéria médica e os pontos que podem exigir avaliação pericial.",
    price: "R$ 490",
  },
  {
    title: "Quesitos do autor",
    description:
      "Elaboração de quesitos direcionados aos pontos relevantes da discussão médica e pericial.",
    price: "R$ 450",
  },
  {
    title: "Acompanhamento da perícia",
    description:
      "Suporte técnico para preparação e acompanhamento da etapa pericial do processo.",
    price: "R$ 1.800",
  },
  {
    title: "Parecer técnico do assistente",
    description:
      "Análise técnica do caso e elaboração de parecer para qualificar a atuação do advogado.",
    price: "R$ 2.500",
  },
  {
    title: "Crítica ao laudo oficial",
    description:
      "Avaliação técnica do laudo apresentado para identificar inconsistências, omissões e pontos relevantes.",
    price: "R$ 1.500",
  },
  {
    title: "Pacote 10 análises",
    description:
      "Para escritórios que precisam avaliar diferentes processos com matéria médica.",
    price: "R$ 1.950",
  },
];

const plans = [
  {
    name: "Causa de Pedir",
    price: "R$ 1.490",
    description:
      "Para escritórios que precisam de apoio recorrente na análise inicial dos processos.",
  },
  {
    name: "Prova completa",
    price: "R$ 3.250",
    description:
      "Uma estrutura mais completa para processos que exigem maior acompanhamento técnico.",
    featured: true,
  },
  {
    name: "Caso integral",
    price: "R$ 4.200",
    description:
      "Acompanhamento amplo das principais etapas técnicas de um caso.",
  },
];

export default function AdvogadosAutorPage() {
  return (
    <>
      <main className="advogado-page">
        {/* HERO */}
        <section className="advogado-hero">
          <div className="advogado-hero-inner">
            <div className="advogado-hero-copy">
              <span className="section-eyebrow">
                PARA ADVOGADOS DO RECLAMANTE
              </span>

              <h1>
                Uma análise
                <br />
                <em>mais precisa</em>
                <br />
                do seu caso.
              </h1>

              <p>
                Apoio técnico especializado para identificar a matéria médica,
                preparar a prova e chegar à perícia com mais clareza sobre o
                que realmente importa.
              </p>

              <div className="advogado-hero-actions">
                <a href="#triagem" className="btn-primary">
                  Avaliar um processo
                  <span>→</span>
                </a>

                <a href="#solucoes" className="btn-text">
                  Ver soluções
                  <span>↓</span>
                </a>
              </div>
            </div>

            <div className="advogado-hero-aside">
              <span>01</span>

              <p>
                Nem todo processo precisa de uma perícia.
                <br />
                <strong>O primeiro passo é entender se existe matéria médica.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* TRIAGEM */}
        <section id="triagem" className="autor-triagem">
          <div className="autor-triagem-number">01</div>

          <div className="autor-triagem-content">
            <span className="section-eyebrow">TRIAGEM INICIAL</span>

            <h2>
              Antes de contratar,
              <br />
              entenda o seu caso.
            </h2>

            <div className="autor-triagem-body">
              <p>
                Envie o processo para uma avaliação inicial. A EasyMed verifica
                se existe matéria médica relevante e se a atuação pericial faz
                sentido para aquele caso.
              </p>

              <div className="triagem-box">
                <span>COMO FUNCIONA</span>

                <ol>
                  <li>
                    <strong>01</strong>
                    <span>Você envia o processo.</span>
                  </li>

                  <li>
                    <strong>02</strong>
                    <span>Realizamos uma avaliação inicial.</span>
                  </li>

                  <li>
                    <strong>03</strong>
                    <span>Você recebe um direcionamento.</span>
                  </li>
                </ol>

                <small>
                  Avaliação inicial em até 24 horas.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* CONTEXTO */}
        <section className="autor-context">
          <div className="autor-context-heading">
            <span className="section-eyebrow">O QUE ESTÁ EM JOGO</span>

            <h2>
              Uma boa estratégia
              <br />
              começa antes da perícia.
            </h2>
          </div>

          <div className="autor-context-text">
            <p>
              Quando existe uma questão médica envolvida, a qualidade da prova
              pode fazer diferença na compreensão do caso.
            </p>

            <p>
              A EasyMed trabalha junto ao advogado para organizar os elementos
              técnicos, identificar pontos relevantes e transformar informação
              médica em subsídios mais claros para a estratégia processual.
            </p>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section id="solucoes" className="autor-solutions">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">SOLUÇÕES</span>

              <h2>
                Apoio técnico
                <br />
                para cada etapa.
              </h2>
            </div>

            <p>
              Escolha o serviço de acordo com o momento do processo e a
              necessidade do seu escritório.
            </p>
          </div>

          <div className="autor-service-list">
            {services.map((service, index) => (
              <article className="autor-service-row" key={service.title}>
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

        {/* PLANOS */}
        <section className="autor-plans">
          <div className="plans-heading">
            <span className="section-eyebrow">PARA ESCRITÓRIOS</span>

            <h2>
              Quando o volume
              <br />
              pede continuidade.
            </h2>

            <p>
              Soluções estruturadas para escritórios que lidam regularmente
              com processos envolvendo questões médicas.
            </p>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`perito-plan autor-plan ${
                  plan.featured ? "featured" : ""
                }`}
              >
                {plan.featured && (
                  <span className="plan-featured">MAIS COMPLETO</span>
                )}

                {!plan.featured && (
                  <span className="plan-featured invisible">
                    MAIS COMPLETO
                  </span>
                )}

                <h3>{plan.name}</h3>

                <p>{plan.description}</p>

                <div className="plan-price">
                  <strong>{plan.price}</strong>
                  <span>por solução</span>
                </div>

                <a href="#contato" className="plan-button">
                  Quero conhecer
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* RESULTADO */}
        <section className="autor-result">
          <div className="autor-result-left">
            <span className="section-eyebrow">O OBJETIVO</span>

            <h2>
              Mais clareza para
              <br />
              tomar decisões.
            </h2>
          </div>

          <div className="autor-result-right">
            <p>
              O papel da EasyMed não é substituir a estratégia jurídica do
              escritório.
            </p>

            <p>
              É oferecer conhecimento técnico para que o advogado consiga
              compreender melhor a dimensão médica do processo e trabalhar a
              prova com mais segurança.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="autor-cta">
          <span className="section-eyebrow">EASYMED PERÍCIAS</span>

          <h2>
            Tem um processo
            <br />
            para avaliar?
          </h2>

          <p>
            Envie o caso para uma primeira avaliação e descubra se existe
            matéria médica relevante.
          </p>

          <a href="mailto:contato@easymed.com.br" className="btn-primary">
            Enviar processo
            <span>→</span>
          </a>
        </section>
      </main>
    </>
  );
}