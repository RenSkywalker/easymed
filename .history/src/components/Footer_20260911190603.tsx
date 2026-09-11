import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-brand">

          <Link href="/" className="footer-logo">
            <img
              src="/logo.png"
              alt="EasyMed Perícias"
            />
          </Link>

          <p>
            Suporte especializado para quem trabalha
            com perícias e questões médico-legais.
          </p>

        </div>

        <div className="footer-column">

          <span className="footer-title">
            Soluções
          </span>

          <Link href="/peritos">
            Peritos
          </Link>

          <Link href="/advogados/autor">
            Advogado do reclamante
          </Link>

          <Link href="/advogados/defesa">
            Advogado da defesa
          </Link>

          <Link href="/empresas">
            Empresas
          </Link>

        </div>

        <div className="footer-column">

          <span className="footer-title">
            EasyMed
          </span>

          <Link href="/software">
            Software
          </Link>

          <Link href="/materiais">
            Materiais
          </Link>

          <Link href="/contato">
            Contato
          </Link>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} EasyMed Perícias
        </span>

        <span>
          Da burocracia ao essencial.
        </span>

      </div>

    </footer>
  );
}