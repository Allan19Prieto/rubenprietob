const projects = [
  {
    num: "01",
    tag: "Estadísticas",
    name: "Precios del CENADA",
    desc: "Dashboard de visualización de precios de productos agrícolas del Centro Nacional de Abastecimiento y Distribución de Alimentos de Costa Rica.",
    stack: ["Next.js", "Python", "API CENADA"],
    status: "En desarrollo",
    color: "var(--g700)",
  },
  {
    num: "02",
    tag: "Portafolio",
    name: "RP — Rubén Prieto",
    desc: "Sitio web personal y portafolio profesional. Muestra servicios de automatización, digitalización y proyectos realizados.",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    status: "Activo",
    color: "var(--g800)",
  },
  // Agrega más proyectos aquí
];

export default function Projects() {
  return (
    <section className="py-32 px-[6%] bg-[var(--cream)]" id="projects">
      <div className="max-w-[1300px] mx-auto">
        <p className="flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[var(--g500)] mb-6">
          <span className="w-8 h-px bg-[var(--g400)]" />
          Proyectos
        </p>
        <h2 className="font-cormorant font-light leading-[1.05] tracking-[-0.02em] text-[var(--ink)] mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          Trabajo real,<br />
          <strong className="font-bold italic text-[var(--g600)]">resultados concretos.</strong>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(42,90,42,0.15)]">
          {projects.map((p) => (
            <div key={p.num}
              className="p-12 flex flex-col gap-6 transition-colors duration-300 hover:bg-[var(--g50)]"
              style={{ background: "var(--cream)" }}>
              <div className="flex justify-between items-start">
                <span className="font-cormorant text-[3rem] font-bold text-[rgba(42,90,42,0.15)] leading-none">{p.num}</span>
                <span className={`text-[0.65rem] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full ${p.status === "Activo" ? "bg-[var(--g100)] text-[var(--g600)]" : "bg-amber-100 text-amber-700"}`}>
                  {p.status}
                </span>
              </div>
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[var(--g400)] mb-2">{p.tag}</p>
                <h3 className="font-cormorant text-[1.8rem] font-semibold text-[var(--ink)] leading-tight mb-3">{p.name}</h3>
                <p className="text-[0.85rem] leading-[1.75] text-[var(--gray)]">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[rgba(42,90,42,0.1)]">
                {p.stack.map((s) => (
                  <span key={s} className="text-[0.7rem] font-semibold tracking-[0.08em] px-3 py-1 bg-[var(--g100)] text-[var(--g700)] rounded-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}