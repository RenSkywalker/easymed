"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const handleCurrentPageClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === href) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
    setSolutionsOpen(false);
  };

  const handleMobileLink = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="EasyMed Perícias"
          onClick={(event) => handleCurrentPageClick(event, "/")}
        >
          <img
            src="/logo.png"
            alt="EasyMed Perícias"
            className="brand-logo"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="main-nav">
          <Link
            href="/"
            onClick={(event) => handleCurrentPageClick(event, "/")}
          >
            Início
          </Link>

          <div className="nav-dropdown">
            <button type="button" className="nav-dropdown-trigger">
              Soluções <span>⌄</span>
            </button>

            <div className="nav-dropdown-menu">
              <Link
                href="/peritos"
                onClick={(event) =>
                  handleCurrentPageClick(event, "/peritos")
                }
              >
                <strong>Peritos</strong>
                <small>Suporte e gestão da rotina pericial</small>
              </Link>

              <Link
                href="/advogados/autor"
                onClick={(event) =>
                  handleCurrentPageClick(event, "/advogados/autor")
                }
              >
                <strong>Advogado do reclamante</strong>
                <small>Análise técnica e suporte à perícia</small>
              </Link>

              <Link
                href="/advogados/defesa"
                onClick={(event) =>
                  handleCurrentPageClick(event, "/advogados/defesa")
                }
              >
                <strong>Advogado da defesa</strong>
                <small>Estratégia técnica para a defesa</small>
              </Link>

              <Link
                href="/empresas"
                onClick={(event) =>
                  handleCurrentPageClick(event, "/empresas")
                }
              >
                <strong>Empresas</strong>
                <small>Prevenção e suporte em perícias</small>
              </Link>
            </div>
          </div>

          <Link
            href="/software"
            onClick={(event) =>
              handleCurrentPageClick(event, "/software")
            }
          >
            Software
          </Link>

          <Link
            href="/materiais"
            onClick={(event) =>
              handleCurrentPageClick(event, "/materiais")
            }
          >
            Materiais
          </Link>
        </nav>

        {/* CTA DESKTOP */}
        <Link
          href="/contato"
          className="header-button"
          onClick={(event) =>
            handleCurrentPageClick(event, "/contato")
          }
        >
          Falar com a EasyMed
        </Link>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-inner">
          <Link
            href="/"
            onClick={(event) => handleCurrentPageClick(event, "/")}
          >
            Início
          </Link>

          <button
            type="button"
            className="mobile-solutions-button"
            onClick={() => setSolutionsOpen(!solutionsOpen)}
          >
            <span>Soluções</span>
            <span className={solutionsOpen ? "rotated" : ""}>⌄</span>
          </button>

          <div
            className={`mobile-solutions ${
              solutionsOpen ? "is-open" : ""
            }`}
          >
            <Link
              href="/peritos"
              onClick={handleMobileLink}
            >
              <strong>Peritos</strong>
              <small>Suporte e gestão da rotina pericial</small>
            </Link>

            <Link
              href="/advogados/autor"
              onClick={handleMobileLink}
            >
              <strong>Advogado do reclamante</strong>
              <small>Análise técnica e suporte à perícia</small>
            </Link>

            <Link
              href="/advogados/defesa"
              onClick={handleMobileLink}
            >
              <strong>Advogado da defesa</strong>
              <small>Estratégia técnica para a defesa</small>
            </Link>

            <Link
              href="/empresas"
              onClick={handleMobileLink}
            >
              <strong>Empresas</strong>
              <small>Prevenção e suporte em perícias</small>
            </Link>
          </div>

          <Link
            href="/software"
            onClick={handleMobileLink}
          >
            Software
          </Link>

          <Link
            href="/materiais"
            onClick={handleMobileLink}
          >
            Materiais
          </Link>

          <Link
            href="/contato"
            className="mobile-menu-button-cta"
            onClick={handleMobileLink}
          >
            Falar com a EasyMed
          </Link>
        </div>
      </div>
    </header>
  );
}