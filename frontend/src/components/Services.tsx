const services = [
  {
    num: "01",
    icon: "🤖",
    category: "Automatización IA",
    name: "Tu negocio trabajando solo",
    desc: "Implementamos sistemas de inteligencia artificial que atienden clientes, procesan pedidos y gestionan comunicaciones las 24 horas, sin que tengas que estar presente.",
    features: [
      "Chatbot de WhatsApp con IA",
      "Respuestas automáticas de atención",
      "Automatización de pedidos y citas",
      "Flujos de seguimiento de clientes",
      "Integración con tus herramientas actuales",
    ],
  },
  {
    num: "02",
    icon: "🌿",
    category: "Digitalización Agro",
    name: "La industria agrícola al mundo digital",
    desc: "Llevamos fincas, cooperativas y negocios agrícolas a internet. Presencia digital completa, herramientas de gestión y automatización para el sector que más lo necesita.",
    features: [
      "Página web para tu finca o negocio agro",
      "Perfil de Google Maps y redes sociales",
      "Sistema de pedidos en línea",
      "Automatización de ventas agropecuarias",
      "Visibilidad ante compradores y distribuidores",
    ],
  },
  {
    num: "03",
    icon: "💡",
    category: "Consultoría Digital",
    name: "Guía estratégica para crecer con tecnología",
    desc: "Acompañamos a empresas y emprendimientos a trazar su hoja de ruta digital. Sin tecnicismos, sin humo — solo un plan claro y ejecutable para digitalizar tu operación.",
    features: [
      "Diagnóstico digital de tu negocio",
      "Plan de transformación personalizado",
      "Selección de herramientas adecuadas",
      "Capacitación a tu equipo",
      "Acompañamiento mensual continuo",
    ],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header reveal">
        <h2 className="services-title">
          Tres servicios.<br />
          <strong>Un solo objetivo.</strong>
        </h2>
        <p className="services-sub">
          Soluciones digitales diseñadas para negocios que producen en serio y
          quieren competir en serio.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.num} className="service-card reveal">
            <div className="service-num">{s.num}</div>
            <div className="service-icon-wrap">{s.icon}</div>
            <p className="service-category">{s.category}</p>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
            <ul className="service-features">
              {s.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
