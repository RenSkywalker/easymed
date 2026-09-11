"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const handleCurrentPageClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === href) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">

        <Link
          href="/"
          className="brand"
          aria-label="EasyMed Perícias"
          onClick={(event) =>
            handleCurrentPageClick(event, "/")
          }
        >
          <img
            src="/logo.png"
            alt="EasyMed Perícias"
            className="brand-logo"
          />
        </Link>

        <nav className="main-nav">

          <Link
            href="/"
            onClick={(event) =>
              handleCurrentPageClick(event, "/")
            }
          >
            Início
          </Link>

          <div className="nav-dropdown">

            <button
              type="button"
              className="nav-dropdown-trigger"
            >
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
                <small>
                  Suporte e gestão da rotina pericial
                </small>
              </Link>

              <Link
                href="/advogados/autor"
                onClick={(event) =>
                  handleCurrentPageClick(event, "/advogados/autor")
                }
              >
                <strong>
                  Advogado do reclamante
                </strong>
                <small>
                  Análise técnica e suporte à perícia
                </small>
              </Link>

              <Link
                href="/advogados/defesa"
                onClick={(event) =>
                  handleCurrentPageClick(event, "/advogados/defesa")
                }
              >
                <strong>
                  Advogado da defesa
                </strong>
                <small>
                  Estratégia técnica para a defesa
                </small>
              </Link>

              <Link
                href="/empresas"
                onClick={(event) =>
                  handleCurrentPageClick(event, "/empresas")
                }
              >
                <strong>Empresas</strong>
                <small>
                  Prevenção e suporte em perícias
                </small>
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

        <Link
          href="/contato"
          className="header-button"
          onClick={(event) =>
            handleCurrentPageClick(event, "/contato")
          }
        >
          Falar com a EasyMed
        </Link>

      </div>
    </header>
  );
}