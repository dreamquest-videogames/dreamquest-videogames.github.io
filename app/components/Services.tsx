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

const colorMap = {
  purple: "pixel-border card-hover",
  teal: "pixel-border-teal card-hover",
  green: "pixel-border-green card-hover",
};

const iconBgMap = {
  purple: "bg-[#7B2FBE]/20 border border-[#7B2FBE]/40",
  teal: "bg-[#00BCD4]/20 border border-[#00BCD4]/40",
  green: "bg-[#4CAF50]/20 border border-[#4CAF50]/40",
};

const highlightColorMap = {
  purple: "text-[#7B2FBE]",
  teal: "text-[#00BCD4]",
  green: "text-[#4CAF50]",
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B2FBE]">// WHAT WE DO</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-white mb-4">
            Our <span className="text-[#7B2FBE] glow-purple">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From trade-ins to restoration — Valerie the Viking keeps watch over every transaction.
            Here&apos;s everything we offer under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`${colorMap[service.color as keyof typeof colorMap]} bg-white/3 p-6 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 text-2xl mb-4 ${iconBgMap[service.color as keyof typeof iconBgMap]}`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-pixel text-sm text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Highlight tag */}
              <div className={`font-pixel text-[8px] ${highlightColorMap[service.color as keyof typeof highlightColorMap]}`}>
                → {service.highlight}
              </div>
            </div>
          ))}

          {/* Bonus card — span 2 columns on large screens */}
          <div className="pixel-border bg-white/3 p-6 card-hover md:col-span-2 lg:col-span-3 lg:max-w-none border-[#4CAF50] shadow-[0_0_10px_rgba(76,175,80,0.5)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-4xl">⚔️</div>
              <div>
                <h3 className="font-pixel text-sm text-[#4CAF50] glow-green mb-2">
                  The Valerie Guarantee
                </h3>
                <p className="text-gray-300 text-sm">
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
