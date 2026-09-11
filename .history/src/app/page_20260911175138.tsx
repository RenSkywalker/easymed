import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="EasyMed Perícias - Página inicial"
          >
            <Image
              src="/logo.png"
              alt="EasyMed Perícias"
              width={190}
              height={90}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="main-nav" aria-label="Navegação principal">
            <Link href="#servicos">Serviços</Link>
            <Link href="#como-funciona">Como funciona</Link>
            <Link href="#sobre">Sobre nós</Link>
          </nav>

          <Link href="#contato" className="header-button">
            Fale conosco
          </Link>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              SUPORTE ESPECIALIZADO PARA PERITOS
            </span>

            <h1 id="hero-title">
              Seu trabalho é a perícia.
              <span>A organização fica com a EasyMed.</span>
            </h1>

            <p className="hero-description">
              Suporte especializado para simplificar sua rotina,
              organizar demandas e liberar seu tempo para o que
              realmente importa.
            </p>

            <div className="hero-actions">
              <Link href="#servicos" className="button button-primary">
                Conheça nossos serviços
              </Link>

              <Link href="#sobre" className="button button-secondary">
                Conheça a EasyMed
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-shape hero-shape-one" />
            <div className="hero-shape hero-shape-two" />

            <div className="hero-logo-card">
              <Image
                src="/logo.png"
                alt=""
                width={300}
                height={150}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVIÇOS
      ====================================================== */}

      <section
        id="servicos"
        className="services-section"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">NOSSOS SERVIÇOS</span>

            <h2 id="services-title">
              Tudo organizado para você se concentrar no que importa.
            </h2>

            <p>
              A EasyMed oferece suporte em diferentes etapas da rotina
              profissional de peritos, ajudando a reduzir a burocracia
              e manter as demandas organizadas.
            </p>
          </div>

          <div className="services-list">
            <article className="service-item">
              <span className="service-number">01</span>

              <div>
                <h3>Cadastro em varas</h3>

                <p>
                  Suporte e organização das demandas relacionadas ao
                  cadastro em varas.
                </p>
              </div>
            </article>

            <article className="service-item">
              <span className="service-number">02</span>

              <div>
                <h3>Pré-laudos</h3>

                <p>
                  Apoio na organização das informações necessárias
                  para a preparação de pré-laudos.
                </p>
              </div>
            </article>

            <article className="service-item">
              <span className="service-number">03</span>

              <div>
                <h3>Esclarecimentos</h3>

                <p>
                  Suporte para dúvidas e demandas relacionadas à
                  rotina profissional do perito.
                </p>
              </div>
            </article>

            <article className="service-item">
              <span className="service-number">04</span>

              <div>
                <h3>Gestão de agenda</h3>

                <p>
                  Mais organização para compromissos, atividades e
                  demandas da rotina de perícias.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESTAQUE
      ====================================================== */}

      <section className="statement-section">
        <div className="container statement-content">
          <span className="eyebrow eyebrow-light">
            DA BUROCRACIA AO ESSENCIAL
          </span>

          <h2>
            Mais tempo para o que
            <span>realmente importa.</span>
          </h2>

          <p>
            A EasyMed oferece suporte especializado para ajudar
            profissionais que atuam com perícias a manter suas
            demandas organizadas e sua rotina mais simples.
          </p>
        </div>
      </section>

      {/* =====================================================
          COMO FUNCIONA
      ====================================================== */}

      <section
        id="como-funciona"
        className="process-section"
        aria-labelledby="process-title"
      >
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">COMO FUNCIONA</span>

            <h2 id="process-title">
              Um suporte mais simples para a sua rotina.
            </h2>
          </div>

          <div className="process-list">
            <div className="process-item">
              <span>01</span>
              <h3>Você apresenta sua necessidade</h3>
            </div>

            <div className="process-item">
              <span>02</span>
              <h3>A EasyMed organiza a demanda</h3>
            </div>

            <div className="process-item">
              <span>03</span>
              <h3>Realizamos o suporte necessário</h3>
            </div>

            <div className="process-item">
              <span>04</span>
              <h3>Você acompanha tudo com mais tranquilidade</h3>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOBRE
      ====================================================== */}

      <section
        id="sobre"
        className="about-section"
        aria-labelledby="about-title"
      >
        <div className="container about-grid">
          <div>
            <span className="eyebrow">SOBRE A EASYMED</span>

            <h2 id="about-title">
              Da burocracia ao essencial.
            </h2>
          </div>

          <div className="about-content">
            <p>
              A EasyMed Perícias atua oferecendo suporte especializado
              para profissionais que trabalham com perícias.
            </p>

            <p>
              Nosso objetivo é tornar a rotina mais organizada,
              proporcionando suporte em demandas operacionais para
              que o perito possa dedicar mais atenção ao seu trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section id="contato" className="cta-section">
        <div className="container cta-content">
          <span className="eyebrow">FALE COM A EASYMED</span>

          <h2>
            Precisa de suporte para sua rotina de perícias?
          </h2>

          <p>
            Entre em contato e conheça as soluções da EasyMed
            para profissionais que atuam com perícias.
          </p>

          <a href="#" className="button button-light">
            Falar com a EasyMed
          </a>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>easymed</strong>
            <span>PERÍCIAS</span>
          </div>

          <p>
            Da burocracia ao essencial.
          </p>

          <p className="copyright">
            © {new Date().getFullYear()} EasyMed Perícias. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}