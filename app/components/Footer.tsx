import Image from "next/image";

export default function Footer() {
  const currentYear = 2024;

  return (
    <footer className="bg-[#050510] border-t border-[#7B2FBE]/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 border border-[#7B2FBE]/60 overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Dream Quest Video Games"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-pixel text-sm text-[#7B2FBE] glow-purple">Dream Quest</div>
                <div className="font-pixel text-[9px] text-[#00BCD4]">Video Games</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              Your local destination for retro and modern video games, accessories,
              anime collectibles, and console restoration services.
            </p>
            <div className="font-pixel text-[9px] text-[#4CAF50] glow-green">
              &quot;Keeping Score Since &apos;24&quot;
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-pixel text-[9px] text-[#7B2FBE] mb-4">EXPLORE</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { href: "#services", label: "Our Services" },
                { href: "#inventory", label: "Featured Inventory" },
                { href: "#collectibles", label: "Anime Collectibles" },
                { href: "#about", label: "About Us" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#00BCD4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-pixel text-[9px] text-[#00BCD4] mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Buy & Sell Games",
                "Gaming Accessories",
                "Anime Collectibles",
                "Console Reconditioning",
                "Disc Resurfacing",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="hover:text-[#00BCD4] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#7B2FBE]/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-pixel text-[8px] text-[#4CAF50] glow-green text-center sm:text-left">
            ⚔️ Guarded by Valerie the Viking © {currentYear} Dream Quest Video Games
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
