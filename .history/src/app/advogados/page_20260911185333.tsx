import Link from "next/link";

export default function AdvogadosPage() {
  return (
    <main className="audience-page">

      <section className="inner-hero">
        <div className="inner-hero-content">
          <span className="eyebrow">PARA ADVOGADOS</span>

          <h1>
            Mais clareza técnica para
            <em> decisões jurídicas melhores.</em>
          </h1>

          <p>
            Apoio especializado na análise médica dos processos, tanto para
            advogados de reclamantes quanto para escritórios que atuam na defesa.
          </p>

          <div className="hero-actions">
            <Link href="/advogados/autor" className="btn-primary">
              Advogado do autor
            </Link>

            <Link href="/advogados/defesa" className="btn-secondary">
              Advogado da defesa
            </Link>
          </div>
        </div>

        <div className="inner-hero-note">
          <span>01</span>
          <p>
            A EasyMed entra onde o processo exige compreensão técnica da
            matéria médica.
          </p>
        </div>
      </section>

      <section className="editorial-section">
        <div className="section-heading">
          <span className="section-number">02</span>
          <div>
            <span className="eyebrow">ESCOLHA O SEU CENÁRIO</span>
            <h2>O suporte muda conforme a estratégia do caso.</h2>
          </div>
        </div>

        <div className="audience-choice-grid">

          <Link href="/advogados/autor" className="audience-choice">
            <span className="choice-number">01</span>

            <div>
              <h3>Advogado do reclamante</h3>
              <p>
                Análise da causa de pedir, quesitos, acompanhamento da perícia,
                parecer técnico e crítica ao laudo oficial.
              </p>

              <span className="choice-link">
                Conhecer soluções para o autor →
              </span>
            </div>
          </Link>

          <Link href="/advogados/defesa" className="audience-choice">
            <span className="choice-number">02</span>

            <div>
              <h3>Advogado da defesa</h3>
              <p>
                Apoio técnico para análise defensiva, quesitos, acompanhamento,
                impugnação ao laudo e decisões relacionadas à perícia.
              </p>

              <span className="choice-link">
                Conhecer soluções para a defesa →
              </span>
            </div>
          </Link>

        </div>
      </section>

      <section className="editorial-section soft-section">
        <div className="statement-block">
          <span className="eyebrow">NOSSO PAPEL</span>

          <h2>
            Informação médica organizada para ajudar você a
            <em> enxergar o processo com mais clareza.</em>
          </h2>

          <p>
            A EasyMed não substitui a atuação jurídica. Nosso trabalho é
            oferecer suporte técnico para que o advogado compreenda melhor
            os elementos médicos envolvidos no processo e possa tomar suas
            decisões com mais segurança.
          </p>
        </div>
      </section>

      <section className="final-cta">
        <span className="eyebrow">EASYMED PERÍCIAS</span>

        <h2>
          Existe uma questão médica no seu processo?
        </h2>

        <p>
          Envie o caso para uma avaliação inicial e entenda como podemos
          contribuir.
        </p>

        <Link href="/contato" className="btn-primary">
          Falar com a EasyMed
        </Link>
      </section>

    </main>
  );
}