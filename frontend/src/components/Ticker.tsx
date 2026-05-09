const items = [
  "Automatización con IA", "Digitalización Agro", "Negocios Locales",
  "Chatbots WhatsApp", "Páginas Web", "Consultoría Digital", "Costa Rica",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  );
}