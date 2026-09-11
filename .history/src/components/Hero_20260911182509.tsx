import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">
            INTELIGÊNCIA E SUPORTE PARA PERÍCIAS
          </span>

          <h1 id="hero-title">
            Menos burocracia.
            <span>Mais tempo para o que importa.</span>
          </h1>

          <p className="hero-description">
            A EasyMed reúne suporte técnico, serviços especializados,
            materiais e tecnologia para tornar a rotina de profissionais
            que atuam com perícias mais organizada e eficiente.
          </p>

          <div className="hero-actions">
            <Link href="#solucoes" className="button button-primary">
              Conheça nossas soluções
            </Link>

            <Link href="#software" className="button button-secondary">
              Conheça o software
            </Link>
          </div>

          <div className="hero-note">
            <span />
            Da burocracia ao essencial.
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <div className="hero-frame-top">
              <span>easymed</span>
              <span>PERÍCIAS</span>
            </div>

            <div className="hero-frame-content">
              <span className="hero-frame-label">
                SUPORTE ESPECIALIZADO
              </span>

              <strong>
                Seu trabalho.
                <br />
                Nossa estrutura.
              </strong>

              <div className="hero-frame-line" />

              <p>
                Serviços, conhecimento e tecnologia para
                acompanhar sua rotina profissional.
              </p>
            </div>

            <div className="hero-frame-number">
              01
            </div>
          </div>

          <div className="hero-accent hero-accent-one" />
          <div className="hero-accent hero-accent-two" />
        </div>
      </div>
    </section>
  );
}