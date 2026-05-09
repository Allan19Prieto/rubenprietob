const industries = [
  {
    icon: "🌾",
    name: "Industria Agrícola",
    desc: "Fincas, cooperativas, distribuidores y productores agropecuarios",
  },
  {
    icon: "🥦",
    name: "Verdulerías y Abastos",
    desc: "Comercios de frutas, verduras y productos frescos con pedidos online",
  },
  {
    icon: "🍽️",
    name: "Restaurantes y Sodas",
    desc: "Menú digital, pedidos automáticos y atención por WhatsApp las 24h",
  },
  {
    icon: "🦷",
    name: "Consultorios y Clínicas",
    desc: "Dentistas, médicos y profesionales de salud con citas automatizadas",
  },
  {
    icon: "🏪",
    name: "Comercios Locales",
    desc: "Pulperías, ferreterías, farmacias y tiendas rurales con presencia digital",
  },
  {
    icon: "🚀",
    name: "Emprendimientos Rurales",
    desc: "Proyectos nuevos que necesitan visibilidad y estructura digital desde cero",
  },
];

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="industries-inner">
        <p className="section-label reveal">Sectores que atendemos</p>
        <h2 className="industries-title reveal">
          Donde más se necesita,<br />
          <strong>ahí estamos.</strong>
        </h2>
        <div className="industries-list reveal">
          {industries.map((item) => (
            <div key={item.name} className="industry-item">
              <div className="industry-icon">{item.icon}</div>
              <div>
                <div className="industry-name">{item.name}</div>
                <div className="industry-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
