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
    icon: "⛩️",
    title: "Anime Collectibles",
    description:
      "High-quality anime statues, figures, and collectibles from your favorite franchises. From Dragon Ball Z to Demon Slayer — curated pieces for serious collectors.",
    highlight: "Premium figures & statues",
    color: "green",
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
    shadow: "shadow-[0_4px_20px_rgba(123,78,160,0.15)]",
    icon: "bg-[#7B4EA0]/20 text-[#7B4EA0]",
    highlight: "text-[#7B4EA0]",
  },
  teal: {
    border: "border-l-4 border-l-[#48D8D0]",
    shadow: "shadow-[0_4px_20px_rgba(72,216,208,0.18)]",
    icon: "bg-[#48D8D0]/20 text-[#2AA8A2]",
    highlight: "text-[#2AA8A2]",
  },
  green: {
    border: "border-l-4 border-l-[#50C890]",
    shadow: "shadow-[0_4px_20px_rgba(80,200,144,0.18)]",
    icon: "bg-[#50C890]/20 text-[#3A9A70]",
    highlight: "text-[#3A9A70]",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0EAF7] section-divider">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">// WHAT WE DO</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-[#1A1020] mb-4 font-bold">
            Our <span className="text-[#7B4EA0] glow-purple">Services</span>
          </h2>
          <p className="text-[#4A4458] max-w-2xl mx-auto text-base">
            From trade-ins to restoration — Valerie the Viking keeps watch over every transaction.
            Here&apos;s everything we offer under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:last-child:nth-child(3n+1)]:lg:col-start-2">
          {services.map((service, idx) => {
            const styles = cardStyleMap[service.color as keyof typeof cardStyleMap];
            return (
              <div
                key={idx}
                className={`bg-white ${styles.border} ${styles.shadow} p-6 card-hover transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 text-2xl mb-4 ${styles.icon}`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="font-pixel text-sm text-[#1A1020] mb-3 font-bold">
                  {service.title}
                </h3>
                <p className="text-[#4A4458] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Highlight tag */}
                <div className={`font-pixel text-[8px] ${styles.highlight} font-bold`}>
                  → {service.highlight}
                </div>
              </div>
            );
          })}

          {/* Valerie Guarantee — full-width */}
          <div className="bg-white border-l-4 border-l-[#50C890] shadow-[0_4px_20px_rgba(80,200,144,0.2)] p-6 card-hover md:col-span-2 lg:col-span-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-4xl">⚔️</div>
              <div>
                <h3 className="font-pixel text-sm text-[#3A9A70] glow-green mb-2 font-bold">
                  The Valerie Guarantee
                </h3>
                <p className="text-[#4A4458] text-sm">
                  Every game we sell is tested and verified before hitting our shelves. Valerie doesn&apos;t let bad deals pass through —
                  if a game doesn&apos;t work, we make it right. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
