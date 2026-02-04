const partnerLogos = [
  { src: "/partners/partners (1).jpg", alt: "Partner 1" },
  { src: "/partners/partners - Copy (1).jpg", alt: "Partner 2" },
  { src: "/partners/partners - Copy (2) (1).jpg", alt: "Partner 3" },
  { src: "/partners/partners - Copy (3) (1).jpg", alt: "Partner 4" },
  { src: "/partners/partners - Copy (4) (1).jpg", alt: "Partner 5" },
];

const brandColors = [
  "#5B8C5A",    // Primary Green
  "#205a40",    // Dark Green
  "#B8956C",    // Tan/Beige
  "#D4A84B",    // Gold/Amber
  "#9B7CB6",    // Purple
];

export function PartnersBanner() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#FAFBF8] to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
          Trusted Partners
        </h3>
        <p className="text-slate-500 text-sm">Certifications & Associations</p>
      </div>

      {/* Connected Partner Boxes */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-1 min-w-[180px] min-h-[160px] flex items-center justify-center p-6 transition-all duration-300 hover:brightness-110"
              style={{
                backgroundColor: brandColors[index],
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-28 w-auto h-auto object-contain drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
