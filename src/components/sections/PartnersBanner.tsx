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
    <section className="w-full py-16 bg-gradient-to-b from-[#FAFBF8] to-white" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-black text-slate-800 uppercase tracking-wider mb-2">
          TRUSTED PARTNERS
        </h3>
        <p className="text-slate-500 text-lg">Certifications & Associations</p>
      </div>

      {/* Connected Partner Boxes - Full Width */}
      <div className="flex flex-col md:flex-row w-full">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-1 min-h-[280px] flex items-center justify-center p-8 transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: brandColors[index],
            }}
          >
            {/* Logo */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-32 w-auto h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
