import content from "../../public/content.json";

const colorMap = {
  purple: {
    cardBorder: "border-l-4 border-l-[#7B4EA0]",
    icon: "bg-[#7B4EA0]/20 text-[#7B4EA0]",
    stat: "text-[#7B4EA0]",
    label: "text-[#7B4EA0]/80",
  },
  teal: {
    cardBorder: "border-l-4 border-l-[#48D8D0]",
    icon: "bg-[#48D8D0]/20 text-[#2AA8A2]",
    stat: "text-[#2AA8A2]",
    label: "text-[#2AA8A2]/80",
  },
  green: {
    cardBorder: "border-l-4 border-l-[#50C890]",
    icon: "bg-[#50C890]/20 text-[#3A9A70]",
    stat: "text-[#3A9A70]",
    label: "text-[#3A9A70]/80",
  },
};

export default function WhyChooseUs() {
  const w = content.whyUs;

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 section-divider"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">{w.sectionLabel}</span>
          </div>
          <h2
            className="font-pixel text-xl sm:text-2xl mb-4 font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Why Choose <span className="text-[#2AA8A2] glow-teal">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--text-secondary)" }}>
            {w.subheading}
          </p>
        </div>

        {/* Trust signals grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {w.trustPoints.map((signal, idx) => {
            const colors = colorMap[signal.color as keyof typeof colorMap] ?? colorMap.purple;
            return (
              <div
                key={idx}
                className={`${colors.cardBorder} p-6 card-hover transition-all duration-300`}
                style={{
                  background: "var(--bg-card)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 flex items-center justify-center text-2xl rounded-sm ${colors.icon}`}>
                    {signal.icon}
                  </div>
                  <div className="text-right">
                    <div className={`font-pixel text-lg font-bold ${colors.stat}`}>{signal.stat}</div>
                    <div className={`font-pixel text-[7px] ${colors.label}`}>{signal.statLabel}</div>
                  </div>
                </div>
                <h3
                  className="font-pixel text-xs mb-3 font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {signal.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {signal.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Valerie lore section */}
        <div
          className="border-l-4 border-l-[#7B4EA0] shadow-[0_4px_20px_rgba(123,78,160,0.18)] p-8 sm:p-10"
          style={{ background: "var(--bg-card)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="font-pixel text-[10px] text-[#7B4EA0] mb-4 font-bold">
              ⚔️ THE LEGEND OF VALERIE ⚔️
            </div>
            <h3
              className="font-pixel text-base mb-4 font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {w.mascotStory.subheading}
            </h3>
            {w.mascotStory.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {para}
              </p>
            ))}
            <div className="mt-6 font-pixel text-[8px] text-[#50C890] glow-green">
              {w.mascotStory.quote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
