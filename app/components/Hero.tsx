import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-grid scanlines overflow-hidden pt-16">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B4EA0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#48D8D0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-[#48D8D0]/40 bg-[#48D8D0]/5 rounded-none">
              <span className="w-2 h-2 bg-[#50C890] rounded-full animate-pulse" />
              <span className="font-pixel text-[8px] text-[#48D8D0]">Now Open — Retro &amp; Modern</span>
            </div>

            <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl leading-relaxed mb-6">
              <span className="text-white">Dream Quest</span>
              <br />
              <span className="text-[#7B4EA0] glow-purple">Video Games</span>
            </h1>

            <p className="font-pixel text-sm sm:text-base text-[#48D8D0] glow-teal mb-4">
              &quot;Keeping Score Since &apos;24&quot;
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 max-w-xl">
              Your ultimate destination for retro classics and modern hits.
              Buy, sell, and trade games spanning every era — from dusty Atari
              cartridges to the latest PS5 titles.
            </p>

            <p className="text-[#50C890] font-medium mb-8">
              ⚔️ Guarded by <strong>Valerie the Viking</strong> — our warrior mascot who battles bad deals so you don&apos;t have to.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 font-pixel text-xs text-[#48D8D0] bg-transparent hover:bg-[#48D8D0]/10 border-2 border-[#48D8D0] btn-glow-teal transition-all duration-200 pixel-corners"
              >
                Sell Your Games
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-[#50C890]">✓</span>
                <span>Atari to PS5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#50C890]">✓</span>
                <span>All Games Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#50C890]">✓</span>
                <span>Fair Prices Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Logo / Mascot display */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 pixel-border rounded-none">
              <Image
                src="/logo.jpg"
                alt="Valerie the Viking — Dream Quest Video Games mascot"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-[#7B4EA0] px-3 py-1 font-pixel text-[8px] text-white pixel-corners shadow-lg shadow-purple-900/50">
              RETRO
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#48D8D0] px-3 py-1 font-pixel text-[8px] text-[#0A0E14] pixel-corners shadow-lg shadow-cyan-900/50">
              MODERN
            </div>
            {/* Mascot label */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="font-pixel text-[8px] text-[#50C890] glow-green">⚔ Valerie the Viking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
