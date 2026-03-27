const inventory = [
  { era: "Atari", title: "Pitfall!", console: "Atari 2600", price: "$18", condition: "Good", badge: "CLASSIC" },
  { era: "NES", title: "Super Mario Bros. 3", console: "Nintendo NES", price: "$34", condition: "VG", badge: "POPULAR" },
  { era: "SNES", title: "Donkey Kong Country", console: "Super NES", price: "$45", condition: "Excellent", badge: "CIB" },
  { era: "N64", title: "GoldenEye 007", console: "Nintendo 64", price: "$55", condition: "Good", badge: "HOT" },
  { era: "PS1", title: "Castlevania: SOTN", console: "PlayStation", price: "$78", condition: "Very Good", badge: "RARE" },
  { era: "PS2", title: "Shadow of the Colossus", console: "PlayStation 2", price: "$42", condition: "VG+", badge: "CLASSIC" },
  { era: "GameBoy", title: "Pokémon Gold", console: "Game Boy Color", price: "$39", condition: "Good", badge: "RETRO" },
  { era: "GameCube", title: "The Legend of Zelda: Wind Waker", console: "GameCube", price: "$65", condition: "Excellent", badge: "CIB" },
  { era: "Wii", title: "Super Smash Bros. Brawl", console: "Nintendo Wii", price: "$28", condition: "Good", badge: "POPULAR" },
  { era: "Xbox 360", title: "Red Dead Redemption", console: "Xbox 360", price: "$22", condition: "VG", badge: "DEAL" },
  { era: "PS3", title: "The Last of Us", console: "PlayStation 3", price: "$19", condition: "Good", badge: "DEAL" },
  { era: "Switch", title: "Metroid Dread", console: "Nintendo Switch", price: "$44", condition: "Like New", badge: "MODERN" },
  { era: "PS5", title: "God of War Ragnarök", console: "PlayStation 5", price: "$39", condition: "Like New", badge: "MODERN" },
  { era: "Xbox", title: "Halo Infinite", console: "Xbox Series X", price: "$29", condition: "VG+", badge: "MODERN" },
  { era: "DS", title: "Pokémon HeartGold", console: "Nintendo DS", price: "$58", condition: "Good", badge: "HOT" },
  { era: "GBA", title: "Fire Emblem", console: "Game Boy Advance", price: "$85", condition: "Good", badge: "RARE" },
];

const badgeColors: Record<string, string> = {
  CLASSIC: "bg-[#7B2FBE] text-white",
  POPULAR: "bg-[#00BCD4] text-[#0D0D1A]",
  CIB: "bg-[#4CAF50] text-white",
  HOT: "bg-red-600 text-white",
  RARE: "bg-yellow-500 text-[#0D0D1A]",
  RETRO: "bg-orange-500 text-white",
  DEAL: "bg-emerald-500 text-white",
  MODERN: "bg-blue-500 text-white",
};

const eraColors: Record<string, string> = {
  Atari: "#FFB300",
  NES: "#FF5722",
  SNES: "#9C27B0",
  N64: "#00BCD4",
  PS1: "#607D8B",
  PS2: "#1565C0",
  GameBoy: "#43A047",
  GameCube: "#6A1B9A",
  Wii: "#E0E0E0",
  "Xbox 360": "#388E3C",
  PS3: "#0D47A1",
  Switch: "#E53935",
  PS5: "#1A237E",
  Xbox: "#1B5E20",
  DS: "#F57F17",
  GBA: "#AD1457",
};

export default function FeaturedInventory() {
  return (
    <section id="inventory" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#00BCD4]">// BROWSE THE VAULT</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-white mb-4">
            Featured <span className="text-[#00BCD4] glow-teal">Inventory</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A rotating selection from our shelves — spanning 40+ years of gaming history.
            New arrivals hit the floor every week. Call or stop by for the full catalog.
          </p>
        </div>

        {/* Inventory grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {inventory.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0D0D1A] border border-[#7B2FBE]/30 hover:border-[#7B2FBE] card-hover p-4 relative group"
            >
              {/* Era badge */}
              <div
                className="inline-block px-2 py-0.5 text-[9px] font-pixel mb-3 font-bold"
                style={{
                  backgroundColor: `${eraColors[item.era] || "#7B2FBE"}22`,
                  color: eraColors[item.era] || "#7B2FBE",
                  border: `1px solid ${eraColors[item.era] || "#7B2FBE"}66`,
                }}
              >
                {item.era}
              </div>

              {/* Game icon placeholder */}
              <div className="w-full h-24 bg-gradient-to-br from-[#7B2FBE]/20 to-[#00BCD4]/10 border border-[#7B2FBE]/20 mb-3 flex items-center justify-center text-3xl group-hover:border-[#7B2FBE]/50 transition-all">
                🎮
              </div>

              {/* Title */}
              <h3 className="text-white text-xs font-semibold mb-1 leading-tight line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs mb-2">{item.console}</p>

              <div className="flex items-center justify-between">
                {/* Price */}
                <span className="font-pixel text-sm text-[#4CAF50] glow-green">
                  {item.price}
                </span>
                {/* Status badge */}
                <span className={`text-[8px] font-pixel px-1.5 py-0.5 ${badgeColors[item.badge]}`}>
                  {item.badge}
                </span>
              </div>

              <div className="mt-1 text-[9px] text-gray-500">
                Condition: {item.condition}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6 text-sm">
            This is just a sample — we carry hundreds more titles in-store.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 font-pixel text-xs text-white bg-[#7B2FBE] hover:bg-[#9B4FD8] border-2 border-[#7B2FBE] btn-glow transition-all duration-200 pixel-corners"
          >
            Check Availability →
          </a>
        </div>
      </div>
    </section>
  );
}
