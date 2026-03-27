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
    border: "border-[#7B2FBE]/30 hover:border-[#7B2FBE]/70",
    icon: "bg-[#7B2FBE]/20",
    stat: "text-[#7B2FBE]",
    label: "text-[#7B2FBE]/60",
  },
  teal: {
    border: "border-[#00BCD4]/30 hover:border-[#00BCD4]/70",
    icon: "bg-[#00BCD4]/20",
    stat: "text-[#00BCD4]",
    label: "text-[#00BCD4]/60",
  },
  green: {
    border: "border-[#4CAF50]/30 hover:border-[#4CAF50]/70",
    icon: "bg-[#4CAF50]/20",
    stat: "text-[#4CAF50]",
    label: "text-[#4CAF50]/60",
  },
};

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#00BCD4]">// WHY DREAM QUEST</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-white mb-4">
            Why Choose <span className="text-[#00BCD4] glow-teal">Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
                className={`bg-[#080810] border ${colors.border} p-6 card-hover transition-all duration-300`}
              >
                {/* Icon + stat row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 flex items-center justify-center text-2xl ${colors.icon}`}>
                    {signal.icon}
                  </div>
                  <div className="text-right">
                    <div className={`font-pixel text-lg ${colors.stat}`}>{signal.stat}</div>
                    <div className={`font-pixel text-[7px] ${colors.label}`}>{signal.statLabel}</div>
                  </div>
                </div>

                <h3 className="font-pixel text-xs text-white mb-3">{signal.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{signal.description}</p>
              </div>
            );
          })}
        </div>

        {/* Valerie lore section */}
        <div className="bg-gradient-to-r from-[#7B2FBE]/10 via-[#0D0D1A] to-[#00BCD4]/10 border border-[#7B2FBE]/30 p-8 sm:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="font-pixel text-[10px] text-[#7B2FBE] mb-4">⚔️ THE LEGEND OF VALERIE ⚔️</div>
            <h3 className="font-pixel text-base text-white mb-4">
              Our Mascot Has a Story
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Valerie the Viking didn&apos;t choose the quest — the quest chose her.
              A warrior of pixels and persistence, she once roamed the digital realms
              from Atari dungeons to PS5 boss battles. She&apos;s seen every era,
              fought every final boss, and traded in every game imaginable.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Now she guards the Dream Quest vault, ensuring every game that passes
              through her hands is worthy of a new player&apos;s shelf. She&apos;s the reason
              we don&apos;t sell junk. She won&apos;t allow it.
            </p>
            <div className="mt-6 font-pixel text-[8px] text-[#4CAF50] glow-green">
              &quot;Every cartridge tells a story. Make sure it&apos;s a good one.&quot; — Valerie
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
