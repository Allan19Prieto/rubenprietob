import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="nav-brand">
        <span className="nav-rp">RP</span>
        <span className="nav-name">Rubén Prieto</span>
      </Link>
      <ul className="nav-links">
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#industries">Sectores</a></li>
        <li><a href="#contact" className="nav-cta">Contactar</a></li>
      </ul>
    </nav>
  );
}