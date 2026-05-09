const pillars = [
  { num: "IA", label: "Automatización" },
  { num: "Agro", label: "Industria" },
  { num: "CR", label: "Costa Rica" },
];

export default function About() {
  return (
    <section className="intro" id="about">
      <div className="reveal">
        <p className="intro-label">Sobre mí</p>
        <h2 className="intro-name">
          Rubén<br />
          <em>Prieto</em><br />
          Badilla
        </h2>
        <p className="intro-role">Fundador · RP Automatización</p>
        <div className="intro-pillars">
          {pillars.map((p) => (
            <div key={p.num} className="pillar">
              <div className="pillar-num">{p.num}</div>
              <div className="pillar-label">{p.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal">
        <p className="intro-text">
          Soy emprendedor costarricense especializado en{" "}
          <strong>llevar tecnología a donde más se necesita</strong> — negocios
          rurales, comercios locales y la industria agrícola que produce y trabaja
          duro pero sigue invisible en internet.
          <br />
          <br />
          Combino experiencia real en el sector agropecuario con conocimiento en{" "}
          <strong>automatización e inteligencia artificial</strong>, creando
          soluciones concretas que generan resultados medibles: más clientes,
          menos trabajo manual, más tiempo para crecer.
          <br />
          <br />
          No soy una agencia urbana que no conoce el campo.{" "}
          <strong>Conozco el terreno, hablo el idioma, y entrego resultados.</strong>
        </p>
      </div>
    </section>
  );
}
