const products = [
  {
    number: "01",
    title: "Kit de Modelos do Perito",
    description:
      "Modelos desenvolvidos para apoiar diferentes momentos da rotina de quem atua com perícias.",
    price: "R$ 597",
  },
  {
    number: "02",
    title: "Biblioteca de Prompts",
    description:
      "Uma coleção de prompts para ajudar na organização, pesquisa e estruturação do trabalho.",
    price: "R$ 397",
  },
  {
    number: "03",
    title: "Combo Modelos + Prompts",
    description:
      "A combinação dos dois materiais para quem quer reunir ferramentas de apoio em uma única solução.",
    price: "R$ 797",
    featured: true,
  },
  {
    number: "04",
    title: "Curso Primeira Nomeação",
    description:
      "Conteúdo voltado para quem está se preparando para iniciar sua atuação como perito.",
    price: "R$ 1.997",
  },
];

export default function MateriaisPage() {
  return (
    <>
      <Header />

      <main className="materiais-page">
        {/* HERO */}
        <section className="materiais-hero">
          <div className="materiais-hero-inner">
            <div className="materiais-hero-copy">
              <span className="section-eyebrow">
                MATERIAIS EASYMED
              </span>

              <h1>
                Ferramentas para
                <br />
                <em>trabalhar melhor.</em>
              </h1>

              <p>
                Modelos, prompts e conteúdos desenvolvidos para apoiar o perito
                em diferentes momentos da sua atuação profissional.
              </p>

              <a href="#produtos" className="btn-primary">
                Ver materiais
                <span>↓</span>
              </a>
            </div>

            <div className="materiais-hero-note">
              <span>01</span>

              <p>
                <strong>Conhecimento também é ferramenta.</strong>
                <br />
                Tenha recursos práticos para apoiar sua rotina.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="materiais-intro">
          <div className="materiais-intro-number">
            01
          </div>

          <div>
            <span className="section-eyebrow">
              UMA BIBLIOTECA PARA O PERITO
            </span>

            <h2>
              Menos tempo começando
              <br />
              do zero.
            </h2>

            <div className="materiais-intro-grid">
              <p>
                A rotina pericial envolve documentos, modelos, organização e
                diferentes etapas de trabalho.
              </p>

              <p>
                Os materiais da EasyMed foram pensados para oferecer uma base
                prática para quem quer estruturar melhor sua atividade.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="materiais-products">
          <div className="materiais-products-heading">
            <div>
              <span className="section-eyebrow">
                PRODUTOS
              </span>

              <h2>
                Escolha o que
                <br />
                você precisa.
              </h2>
            </div>

            <p>
              Adquira materiais específicos ou reúna diferentes recursos em
              uma solução mais completa.
            </p>
          </div>

          <div className="materiais-product-list">
            {products.map((product) => (
              <article
                key={product.number}
                className={`material-product ${
                  product.featured ? "featured" : ""
                }`}
              >
                <span className="material-number">
                  {product.number}
                </span>

                <div className="material-product-content">
                  <h3>{product.title}</h3>

                  <p>{product.description}</p>
                </div>

                <div className="material-product-price">
                  <span>INVESTIMENTO</span>
                  <strong>{product.price}</strong>
                </div>

                <a href="#contato" className="material-product-link">
                  Quero conhecer
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* DESTAQUE */}
        <section className="materiais-highlight">
          <div className="highlight-number">
            02
          </div>

          <div className="highlight-content">
            <span className="section-eyebrow">
              PARA QUEM ESTÁ COMEÇANDO
            </span>

            <h2>
              Primeira nomeação
              <br />
              sem começar perdido.
            </h2>

            <p>
              O início da atuação como perito traz dúvidas que vão muito além
              do conhecimento técnico. Organização, preparação e entendimento
              da rotina também fazem parte desse processo.
            </p>

            <div className="highlight-course">
              <div>
                <span>CURSO PRIMEIRA NOMEAÇÃO</span>
                <strong>R$ 1.997</strong>
              </div>

              <a href="#contato" className="btn-light">
                Conhecer o curso
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* COMBO */}
        <section className="materiais-combo">
          <div className="combo-copy">
            <span className="section-eyebrow">
              COMBO
            </span>

            <h2>
              Modelos +
              <br />
              Prompts.
            </h2>

            <p>
              Para quem quer reunir ferramentas práticas de organização e apoio
              ao trabalho em um único pacote.
            </p>

            <a href="#contato" className="btn-primary">
              Conhecer o combo
              <span>→</span>
            </a>
          </div>

          <div className="combo-price">
            <span>COMBO MODELOS + PROMPTS</span>
            <strong>R$ 797</strong>

            <div className="combo-lines">
              <div>
                <span>Modelos do Perito</span>
                <b>R$ 597</b>
              </div>

              <div>
                <span>Biblioteca de Prompts</span>
                <b>R$ 397</b>
              </div>
            </div>
          </div>
        </section>

        {/* OBSERVAÇÃO */}
        <section className="materiais-note">
          <span className="section-eyebrow">
            APOIO PROFISSIONAL
          </span>

          <h2>
            Ferramentas ajudam.
            <br />
            O conhecimento continua sendo seu.
          </h2>

          <p>
            Os materiais são recursos de apoio à atividade profissional. Eles
            não substituem a análise, o conhecimento técnico ou a
            responsabilidade do perito sobre seu trabalho.
          </p>
        </section>

        {/* CTA */}
        <section id="contato" className="materiais-cta">
          <span className="section-eyebrow">
            EASYMED PERÍCIAS
          </span>

          <h2>
            Encontre o material
            <br />
            para o seu momento.
          </h2>

          <p>
            Conheça as opções disponíveis e escolha a ferramenta que melhor
            corresponde à sua necessidade.
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