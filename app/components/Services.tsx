const services = [
  {
    icon: "🎮",
    title: "Buy & Sell Games",
    description:
      "Trade in your old games for cash or store credit. We buy and sell titles from every era — Atari, NES, SNES, N64, PS1, PS2, GameBoy, Wii, Xbox, PS4/5, Switch, and everything in between.",
    highlight: "Atari → PS5 / Series X / Switch",
    color: "purple",
  },
  {
    icon: "🕹️",
    title: "Gaming Accessories",
    description:
      "Controllers, cables, memory cards, headsets, adapters, and more. We stock accessories for vintage and modern consoles. Rare finds and everyday essentials in one place.",
    highlight: "Vintage to next-gen gear",
    color: "teal",
  },
  {
    icon: "🔧",
    title: "Console Reconditioning",
    description:
      "Breathe new life into your old consoles. We clean, repair, and recondition everything from yellowed SNES units to finicky disc drives. Get it working like the day it was made.",
    highlight: "All eras repaired & restored",
    color: "purple",
  },
  {
    icon: "💿",
    title: "Disc Resurfacing",
    description:
      "Scratched discs killing your save file? Our professional disc resurfacing service removes scratches and restores readability. We handle PS1, PS2, PS3, Wii, DVD, and more.",
    highlight: "Professional scratch removal",
    color: "teal",
  },
];

const cardStyleMap = {
  purple: {
    border: "border-l-4 border-l-[#7B4EA0]",
    icon: "bg-[#7B4EA0]/20 text-[#7B4EA0]",
    highlight: "text-[#7B4EA0]",
  },
  teal: {
    border: "border-l-4 border-l-[#48D8D0]",
    icon: "bg-[#48D8D0]/20 text-[#2AA8A2]",
    highlight: "text-[#2AA8A2]",
  },
  green: {
    border: "border-l-4 border-l-[#50C890]",
    icon: "bg-[#50C890]/20 text-[#3A9A70]",
    highlight: "text-[#3A9A70]",
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 section-divider"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">// WHAT WE DO</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl mb-4 font-bold" style={{ color: 'var(--text-primary)' }}>
            Our <span className="text-[#7B4EA0] glow-purple">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            From trade-ins to restoration — Valerie the Viking keeps watch over every transaction.
            Here&apos;s everything we offer under one roof.
          </p>
        </div>

        {/* Services grid — 3 cols, last orphan centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, idx) => {
            const styles = cardStyleMap[service.color as keyof typeof cardStyleMap];
            const isOrphan = services.length % 3 === 1 && idx === services.length - 1;
            return (
              <div
                key={idx}
                className={`${styles.border} p-6 card-hover transition-all duration-300${isOrphan ? " lg:col-start-2" : ""}`}
                style={{
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 text-2xl mb-4 ${styles.icon}`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="font-pixel text-sm mb-3 font-bold" style={{ color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>

                {/* Highlight tag */}
                <div className={`font-pixel text-[8px] ${styles.highlight} font-bold`}>
                  → {service.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Valerie Guarantee — full-width */}
        <div
          className="border-l-4 border-l-[#50C890] shadow-[0_4px_20px_rgba(80,200,144,0.2)] p-6 card-hover"
          style={{ background: 'var(--bg-card)' }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-4xl">⚔️</div>
            <div>
              <h3 className="font-pixel text-sm text-[#3A9A70] glow-green mb-2 font-bold">
                The Valerie Guarantee
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Every game we sell is tested and verified before hitting our shelves. Valerie doesn&apos;t let bad deals pass through —
                if a game doesn&apos;t work, we make it right. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
