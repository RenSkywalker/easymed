import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">

        <Link href="/" className="brand" aria-label="EasyMed Perícias">
          <img
            src="/logo.png"
            alt="EasyMed Perícias"
            className="brand-logo"
          />
        </Link>

        <nav className="main-nav">

          <Link href="/">
            Início
          </Link>

          <div className="nav-dropdown">
            <button className="nav-dropdown-trigger">
              Soluções
              <span>⌄</span>
            </button>

            <div className="nav-dropdown-menu">

              <Link href="/peritos">
                <strong>Peritos</strong>
                <small>Suporte e gestão da rotina pericial</small>
              </Link>

              <Link href="/advogados/autor">
                <strong>Advogado do reclamante</strong>
                <small>Análise técnica e suporte à perícia</small>
              </Link>

              <Link href="/advogados/defesa">
                <strong>Advogado da defesa</strong>
                <small>Estratégia técnica para a defesa</small>
              </Link>

              <Link href="/empresas">
                <strong>Empresas</strong>
                <small>Prevenção e suporte em perícias</small>
              </Link>

            </div>
          </div>

          <Link href="/software">
            Software
          </Link>

          <Link href="/materiais">
            Materiais
          </Link>

        </nav>

        <Link href="/contato" className="header-button">
          Falar com a EasyMed
        </Link>

      </div>
    </header>
  );
}