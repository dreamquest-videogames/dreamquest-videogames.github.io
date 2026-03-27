export default function ReconditioningCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#060A10] to-[#0A0E14]">
      {/* Background decorations */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B4EA0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="pixel-border bg-[#0A0E14]/80 p-8 sm:p-12">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="font-pixel text-[10px] text-[#7B4EA0]">// REPAIR & RESTORE</span>
            </div>
            <h2 className="font-pixel text-xl sm:text-2xl text-white mb-4">
              Console{" "}
              <span className="text-[#7B4EA0] glow-purple">Reconditioning</span>
              <br />
              <span className="text-lg sm:text-xl">& Disc Resurfacing</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
              Don&apos;t throw out your broken classics — bring them to us.
              Our technicians restore consoles and discs to their former glory.
              Valerie&apos;s standards are high: if it leaves our shop, it works.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {/* Console Reconditioning */}
            <div className="bg-[#7B4EA0]/10 border border-[#7B4EA0]/30 p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-pixel text-sm text-[#7B4EA0] mb-3">Console Reconditioning</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  Deep cleaning (inside &amp; out)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  Laser lens cleaning &amp; calibration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  Yellowing removal (retro consoles)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  Cartridge slot &amp; port cleaning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  Power &amp; AV output testing
                </li>
              </ul>
              <div className="mt-4 font-pixel text-[8px] text-[#7B4EA0]">
                NES · SNES · N64 · PS1 · PS2 · GameCube · Wii and more
              </div>
            </div>

            {/* Disc Resurfacing */}
            <div className="bg-[#48D8D0]/10 border border-[#48D8D0]/30 p-6">
              <div className="text-4xl mb-4">💿</div>
              <h3 className="font-pixel text-sm text-[#48D8D0] mb-3">Disc Resurfacing</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  Professional scratch removal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  Disc polishing &amp; buffing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  Read verification after service
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  Bulk orders welcome
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#50C890] mt-0.5">✓</span>
                  24-48 hour turnaround
                </li>
              </ul>
              <div className="mt-4 font-pixel text-[8px] text-[#48D8D0]">
                PS1 · PS2 · PS3 · Wii · GameCube · DVD
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-6">
              Pricing varies by service complexity. Most repairs completed within 3–5 business days.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 font-pixel text-xs text-white bg-[#7B4EA0] hover:bg-[#9B6FD0] border-2 border-[#7B4EA0] btn-glow transition-all duration-200 pixel-corners"
            >
              Get a Repair Quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
