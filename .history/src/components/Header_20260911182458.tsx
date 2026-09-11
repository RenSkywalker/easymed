import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="EasyMed Perícias - início"
        >
          <Image
            src="/logo.png"
            alt="EasyMed Perícias"
            width={180}
            height={80}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="main-nav" aria-label="Navegação principal">
          <Link href="#solucoes">Soluções</Link>
          <Link href="#software">Software</Link>
          <Link href="#sobre">Sobre</Link>
        </nav>

        <Link href="#contato" className="header-button">
          Fale conosco
        </Link>
      </div>
    </header>
  );
}