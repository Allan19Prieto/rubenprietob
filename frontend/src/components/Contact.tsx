"use client";
import { useState } from "react";

const badges = [
  {
    icon: "🌿",
    title: "Digitalización Agro",
    desc: "Para productores, fincas y cooperativas",
  },
  {
    icon: "🤖",
    title: "Automatización con IA",
    desc: "Para negocios locales y comercios",
  },
  {
    icon: "💡",
    title: "Consultoría Digital",
    desc: "Para empresas que quieren una hoja de ruta",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="reveal">
          <p className="contact-label">Hablemos</p>
          <h2 className="contact-title">
            ¿Listo para dar el<br />
            <strong>siguiente paso?</strong>
          </h2>
          <p className="contact-text">
            Cuéntame sobre tu negocio y lo que quieres lograr. Te respondo
            personalmente con un diagnóstico honesto y sin compromisos.
          </p>
          <div className="contact-badges">
            {badges.map((b) => (
              <div key={b.title} className="contact-badge">
                <div className="badge-icon">{b.icon}</div>
                <div className="badge-text">
                  <strong>{b.title}</strong>
                  <span>{b.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          {submitted ? (
            <div className="form-success" style={{ display: "block" }}>
              <div className="form-success-icon">✅</div>
              <h3>¡Mensaje recibido!</h3>
              <p>
                Te contactaré pronto con un diagnóstico personalizado para tu
                negocio.
              </p>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="form-row">
                <div className="field">
                  <label>Nombre</label>
                  <input type="text" placeholder="Tu nombre" required />
                </div>
                <div className="field">
                  <label>Empresa / Negocio</label>
                  <input type="text" placeholder="Nombre del negocio" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>Correo electrónico</label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>
                <div className="field">
                  <label>WhatsApp</label>
                  <input type="tel" placeholder="+506 0000-0000" />
                </div>
              </div>
              <div className="field">
                <label>¿Qué servicio necesitas?</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option>🤖 Automatización con IA</option>
                  <option>🌿 Digitalización Agro</option>
                  <option>🌐 Página web para mi negocio</option>
                  <option>💡 Consultoría digital</option>
                  <option>Otro / No sé aún</option>
                </select>
              </div>
              <div className="field">
                <label>Cuéntame sobre tu negocio</label>
                <textarea placeholder="¿Qué hace tu negocio? ¿Qué problema quieres resolver? ¿Qué resultado esperas?" />
              </div>
              <div className="form-submit">
                <button type="submit" className="btn-submit">
                  Enviar mensaje <span>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
