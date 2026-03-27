import content from "../../public/content.json";

export default function ReconditioningCTA() {
  const r = content.reconditioning;

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden section-divider"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B4EA0]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">{r.sectionLabel}</span>
          </div>
          <h2
            className="font-pixel text-xl sm:text-2xl mb-4 font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {r.heading}
          </h2>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {r.subheading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          {/* Console Reconditioning */}
          <div
            className="border-l-4 border-l-[#7B4EA0] p-6"
            style={{
              background: "var(--bg-card)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="font-pixel text-sm text-[#7B4EA0] mb-3 font-bold">{r.console.title}</h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              {r.console.features.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 font-pixel text-[8px] text-[#7B4EA0] font-bold">{r.console.footnote}</div>
          </div>

          {/* Disc Resurfacing */}
          <div
            className="border-l-4 border-l-[#48D8D0] p-6"
            style={{
              background: "var(--bg-card)",
              boxShadow: "0 4px 20px rgba(72,216,208,0.18)",
            }}
          >
            <div className="text-4xl mb-4">💿</div>
            <h3 className="font-pixel text-sm text-[#2AA8A2] mb-3 font-bold">{r.disc.title}</h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              {r.disc.features.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 font-pixel text-[8px] text-[#2AA8A2] font-bold">{r.disc.footnote}</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            {r.pricingNote}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-4 font-pixel text-xs text-white bg-[#7B4EA0] hover:bg-[#9B6FD0] border-2 border-[#7B4EA0] btn-glow transition-all duration-200 pixel-corners"
          >
            {r.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
