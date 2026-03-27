import Image from "next/image";
import content from "../../public/content.json";

export default function Footer() {
  const f = content.footer;

  return (
    <footer className="bg-[#1A1020] border-t-2 border-[#7B4EA0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 border border-[#7B4EA0]/60 overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt={content.businessName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-pixel text-sm text-[#7B4EA0] glow-purple">Dream Quest</div>
                <div className="font-pixel text-[9px] text-[#48D8D0]">Video Games</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              {f.description}
            </p>
            <div className="font-pixel text-[9px] text-[#50C890] glow-green">
              {f.tagline}
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="font-pixel text-[9px] text-[#7B4EA0] mb-4">{f.exploreLabel}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {f.exploreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#48D8D0] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service links */}
          <div>
            <h4 className="font-pixel text-[9px] text-[#48D8D0] mb-4">{f.servicesLabel}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {f.serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-[#48D8D0] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#7B4EA0]/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-pixel text-[8px] text-[#50C890] glow-green text-center sm:text-left">
            {f.copyright}
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
