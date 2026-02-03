const partners = [
  { name: "ELVIMERKKI", color: "#5B8C5A" },
  { name: "MASOLA", color: "#205a40" },
  { name: "KESTÄVÄSTI SUOMESTA", color: "#B8956C" },
  { name: "PUHTAAN LEIVÄN PUOLESTA", color: "#D4A84B" },
  { name: "TÄYSJYVÄ", color: "#9B7CB6" },
  { name: "REILU KAUPPA", color: "#C98B8B" },
  { name: "NORDIC SWAN ECOLABEL", color: "#5B8C5A" },
  { name: "JOUTSENMERKKI", color: "#205a40" },
  { name: "ELVIMERKKI", color: "#5B8C5A" },
  { name: "MASOLA", color: "#205a40" },
  { name: "KESTÄVÄSTI SUOMESTA", color: "#B8956C" },
  { name: "PUHTAAN LEIVÄN PUOLESTA", color: "#D4A84B" },
  { name: "TÄYSJYVÄ", color: "#9B7CB6" },
  { name: "REILU KAUPPA", color: "#C98B8B" },
  { name: "NORDIC SWAN ECOLABEL", color: "#5B8C5A" },
  { name: "JOUTSENMERKKI", color: "#205a40" },
];

export function PartnersBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#FAFBF8] via-white to-[#F0F4F0] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">
          Trusted By Industry Leaders
        </h3>
      </div>

      {/* Scrolling Banner Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFBF8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F0F4F0] to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
              style={{
                borderColor: partner.color,
                backgroundColor: `${partner.color}10`,
              }}
            >
              <span
                className="text-lg font-black uppercase tracking-wider whitespace-nowrap"
                style={{ color: partner.color }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
