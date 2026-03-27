const trustSignals = [
  {
    icon: "🛡️",
    title: "Every Game Tested",
    description:
      "We test every single game before it hits our shelves. No mystery cartridges. No disc roulette. What you buy works — period.",
    stat: "100%",
    statLabel: "Tested Before Sale",
    color: "purple",
  },
  {
    icon: "⚔️",
    title: "Fair Trade-In Prices",
    description:
      "Valerie doesn't let bad deals through. We offer competitive prices for your trade-ins — check our current rates or bring in your collection for a free quote.",
    stat: "Fair",
    statLabel: "Trade-In Values",
    color: "teal",
  },
  {
    icon: "🎯",
    title: "Passion-Driven",
    description:
      "We're gamers first, store owners second. Our team plays everything from Atari to modern-day. That passion shows in how we curate inventory and serve every customer.",
    stat: "40+",
    statLabel: "Years of Gaming History",
    color: "green",
  },
  {
    icon: "🔄",
    title: "Satisfaction Guarantee",
    description:
      "Not happy with your purchase? Bring it back. We stand behind everything we sell. Valerie's reputation is on the line with every transaction.",
    stat: "100%",
    statLabel: "Satisfaction Guaranteed",
    color: "purple",
  },
  {
    icon: "📦",
    title: "Massive Selection",
    description:
      "From Atari 2600 to PS5, we carry hundreds of titles across all eras. Rare finds, budget grabs, and everything in between — one store, one roof.",
    stat: "500+",
    statLabel: "Titles in Stock",
    color: "teal",
  },
  {
    icon: "🤝",
    title: "Community First",
    description:
      "Dream Quest isn't a faceless chain — we're a local store built by gamers for gamers. We know our customers' names, not just their loyalty card numbers.",
    stat: "Local",
    statLabel: "Community Store",
    color: "green",
  },
];

const colorMap = {
  purple: {
    cardBorder: "border-l-4 border-l-[#7B4EA0]",
    shadow: "shadow-[0_4px_20px_rgba(123,78,160,0.15)]",
    icon: "bg-[#7B4EA0]/20 text-[#7B4EA0]",
    stat: "text-[#7B4EA0]",
    label: "text-[#7B4EA0]/80",
  },
  teal: {
    cardBorder: "border-l-4 border-l-[#48D8D0]",
    shadow: "shadow-[0_4px_20px_rgba(72,216,208,0.18)]",
    icon: "bg-[#48D8D0]/20 text-[#2AA8A2]",
    stat: "text-[#2AA8A2]",
    label: "text-[#2AA8A2]/80",
  },
  green: {
    cardBorder: "border-l-4 border-l-[#50C890]",
    shadow: "shadow-[0_4px_20px_rgba(80,200,144,0.18)]",
    icon: "bg-[#50C890]/20 text-[#3A9A70]",
    stat: "text-[#3A9A70]",
    label: "text-[#3A9A70]/80",
  },
};

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0EAF7] section-divider">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">// WHY DREAM QUEST</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-[#1A1020] mb-4 font-bold">
            Why Choose <span className="text-[#2AA8A2] glow-teal">Us</span>
          </h2>
          <p className="text-[#4A4458] max-w-2xl mx-auto text-base">
            In a world of online marketplaces and big-box retailers, Dream Quest is something different.
            A place where games are respected, history is preserved, and every customer matters.
          </p>
        </div>

        {/* Trust signals grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustSignals.map((signal, idx) => {
            const colors = colorMap[signal.color as keyof typeof colorMap];
            return (
              <div
                key={idx}
                className={`bg-white ${colors.cardBorder} ${colors.shadow} p-6 card-hover transition-all duration-300`}
              >
                {/* Icon + stat row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 flex items-center justify-center text-2xl rounded-sm ${colors.icon}`}>
                    {signal.icon}
                  </div>
                  <div className="text-right">
                    <div className={`font-pixel text-lg font-bold ${colors.stat}`}>{signal.stat}</div>
                    <div className={`font-pixel text-[7px] ${colors.label}`}>{signal.statLabel}</div>
                  </div>
                </div>

                <h3 className="font-pixel text-xs text-[#1A1020] mb-3 font-bold">{signal.title}</h3>
                <p className="text-[#4A4458] text-sm leading-relaxed">{signal.description}</p>
              </div>
            );
          })}
        </div>

        {/* Valerie lore section */}
        <div className="bg-white border-l-4 border-l-[#7B4EA0] shadow-[0_4px_20px_rgba(123,78,160,0.18)] p-8 sm:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="font-pixel text-[10px] text-[#7B4EA0] mb-4 font-bold">⚔️ THE LEGEND OF VALERIE ⚔️</div>
            <h3 className="font-pixel text-base text-[#1A1020] mb-4 font-bold">
              Our Mascot Has a Story
            </h3>
            <p className="text-[#4A4458] text-sm leading-relaxed mb-4">
              Valerie the Viking didn&apos;t choose the quest — the quest chose her.
              A warrior of pixels and persistence, she once roamed the digital realms
              from Atari dungeons to PS5 boss battles. She&apos;s seen every era,
              fought every final boss, and traded in every game imaginable.
            </p>
            <p className="text-[#4A4458] text-sm leading-relaxed">
              Now she guards the Dream Quest vault, ensuring every game that passes
              through her hands is worthy of a new player&apos;s shelf. She&apos;s the reason
              we don&apos;t sell junk. She won&apos;t allow it.
            </p>
            <div className="mt-6 font-pixel text-[8px] text-[#50C890] glow-green">
              &quot;Every cartridge tells a story. Make sure it&apos;s a good one.&quot; — Valerie
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
