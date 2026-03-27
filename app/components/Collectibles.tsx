const collectibles = [
  {
    name: "Dragon Ball Z — Son Goku Ultra Instinct",
    series: "Dragon Ball Z",
    type: "Premium Figure",
    height: "12 inch",
    price: "$89",
    status: "In Stock",
  },
  {
    name: "Demon Slayer — Tanjiro Kamado",
    series: "Demon Slayer",
    type: "Statue",
    height: "10 inch",
    price: "$74",
    status: "In Stock",
  },
  {
    name: "Naruto — Nine-Tails Chakra Mode",
    series: "Naruto Shippuden",
    type: "Premium Figure",
    height: "14 inch",
    price: "$110",
    status: "Limited",
  },
  {
    name: "Attack on Titan — Levi Ackerman",
    series: "Attack on Titan",
    type: "Action Figure",
    height: "8 inch",
    price: "$58",
    status: "In Stock",
  },
  {
    name: "My Hero Academia — Izuku Midoriya",
    series: "My Hero Academia",
    type: "Statue",
    height: "11 inch",
    price: "$69",
    status: "In Stock",
  },
  {
    name: "One Piece — Monkey D. Luffy Gear 5",
    series: "One Piece",
    type: "Premium Figure",
    height: "13 inch",
    price: "$99",
    status: "Preorder",
  },
];

const statusColors: Record<string, string> = {
  "In Stock": "text-[#4CAF50] border-[#4CAF50]/40 bg-[#4CAF50]/10",
  Limited: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
  Preorder: "text-[#00BCD4] border-[#00BCD4]/40 bg-[#00BCD4]/10",
};

export default function Collectibles() {
  return (
    <section id="collectibles" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#4CAF50]">// ANIME & FIGURES</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-white mb-4">
            Anime <span className="text-[#4CAF50] glow-green">Collectibles</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Museum-quality anime statues and premium figures from the most iconic series.
            Hand-selected by our team for quality, detail, and collector value.
          </p>
        </div>

        {/* Collectibles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {collectibles.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0D0D1A] border border-[#4CAF50]/20 hover:border-[#4CAF50]/60 card-hover p-5 group"
            >
              {/* Figure display area */}
              <div className="w-full h-40 bg-gradient-to-br from-[#4CAF50]/10 to-[#7B2FBE]/10 border border-[#4CAF50]/20 group-hover:border-[#4CAF50]/40 mb-4 flex flex-col items-center justify-center transition-all">
                <span className="text-5xl mb-2">⛩️</span>
                <span className="font-pixel text-[8px] text-[#4CAF50]/60">{item.height}</span>
              </div>

              {/* Details */}
              <div className="mb-2">
                <span className="font-pixel text-[8px] text-[#7B2FBE]">{item.series}</span>
              </div>
              <h3 className="text-white text-sm font-semibold mb-1 leading-tight">
                {item.name}
              </h3>
              <p className="text-gray-500 text-xs mb-3">{item.type}</p>

              <div className="flex items-center justify-between">
                <span className="font-pixel text-base text-[#4CAF50] glow-green">
                  {item.price}
                </span>
                <span className={`font-pixel text-[8px] px-2 py-1 border ${statusColors[item.status]}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="pixel-border-green bg-[#4CAF50]/5 p-6 sm:p-8 text-center">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="font-pixel text-base text-[#4CAF50] glow-green mb-3">
            Collector&apos;s Paradise
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
            Our collectibles rotate constantly. If you&apos;re hunting for a specific figure or series,
            drop us a message — we&apos;ll put you on our lookout list and reach out when it arrives.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 font-pixel text-xs text-white bg-[#4CAF50] hover:bg-[#66BB6A] border-2 border-[#4CAF50] transition-all duration-200 pixel-corners"
          >
            Request a Figure →
          </a>
        </div>
      </div>
    </section>
  );
}
