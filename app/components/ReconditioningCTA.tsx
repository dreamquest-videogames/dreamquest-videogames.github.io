export default function ReconditioningCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#FFFFFF] section-divider">
      {/* Background decorations */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B4EA0]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">// REPAIR &amp; RESTORE</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-[#1A1020] mb-4 font-bold">
            Console{" "}
            <span className="text-[#7B4EA0] glow-purple">Reconditioning</span>
            <br />
            <span className="text-lg sm:text-xl">&amp; Disc Resurfacing</span>
          </h2>
          <p className="text-[#4A4458] max-w-2xl mx-auto text-base leading-relaxed">
            Don&apos;t throw out your broken classics — bring them to us.
            Our technicians restore consoles and discs to their former glory.
            Valerie&apos;s standards are high: if it leaves our shop, it works.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          {/* Console Reconditioning */}
          <div className="bg-white border-l-4 border-l-[#7B4EA0] shadow-[0_4px_20px_rgba(123,78,160,0.15)] p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="font-pixel text-sm text-[#7B4EA0] mb-3 font-bold">Console Reconditioning</h3>
            <ul className="space-y-2 text-sm text-[#4A4458]">
              {[
                "Deep cleaning (inside & out)",
                "Laser lens cleaning & calibration",
                "Cartridge slot & port cleaning",
                "Power & AV output testing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 font-pixel text-[8px] text-[#7B4EA0] font-bold">
              NES · SNES · N64 · PS1 · PS2 · GameCube · Wii and more
            </div>
          </div>

          {/* Disc Resurfacing */}
          <div className="bg-white border-l-4 border-l-[#48D8D0] shadow-[0_4px_20px_rgba(72,216,208,0.18)] p-6">
            <div className="text-4xl mb-4">💿</div>
            <h3 className="font-pixel text-sm text-[#2AA8A2] mb-3 font-bold">Disc Resurfacing</h3>
            <ul className="space-y-2 text-sm text-[#4A4458]">
              {[
                "Professional scratch removal",
                "Disc polishing & buffing",
                "Read verification after service",
                "Bulk orders welcome",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 font-pixel text-[8px] text-[#2AA8A2] font-bold">
              PS1 · PS2 · PS3 · Wii · GameCube · DVD
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#4A4458] text-sm mb-6">
            Pricing varies by service complexity. Most repairs completed within 3–5 business days.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-4 font-pixel text-xs text-white bg-[#7B4EA0] hover:bg-[#9B6FD0] border-2 border-[#7B4EA0] btn-glow transition-all duration-200 pixel-corners"
          >
            Get a Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
