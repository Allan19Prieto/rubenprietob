const links = [
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#industries", label: "Sectores" },
  { href: "#contact", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-rp">RP</span>
          <span className="footer-name">Rubén Prieto Badilla</span>
        </div>
        <ul className="footer-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <p className="footer-copy">© 2025 · RP Rubén Prieto · Costa Rica</p>
      </div>
    </footer>
  );
}
