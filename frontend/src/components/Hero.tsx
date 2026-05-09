export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-noise" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-bg-text">RP</div>

      <p className="hero-eyebrow">
        Automatización &amp; Digitalización · Costa Rica
      </p>

      <h1 className="hero-headline">
        Llevamos tu<br />
        negocio al<br />
        <strong>siguiente nivel</strong><br />
        <span className="line-accent">con inteligencia artificial.</span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-desc">
          Automatizamos y digitalizamos pequeños negocios, comercios rurales y
          la industria agrícola de Costa Rica. Tecnología real, resultados
          concretos.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Empezar ahora →</a>
          <a href="#services" className="btn-ghost">Ver servicios</a>
        </div>
      </div>
    </section>
  );
}