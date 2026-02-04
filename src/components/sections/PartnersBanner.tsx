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

const textColors = [
  "#FFFFFF",    // White
  "#FFFFFF",    // White
  "#2D3A2D",    // Dark text for light bg
  "#2D3A2D",    // Dark text for light bg
  "#FFFFFF",    // White
];

export function PartnersBanner() {
  return (
    <section className="w-full">
      {/* Connected Partner Boxes - Full Width */}
      <div className="flex flex-col md:flex-row w-full">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-1 min-h-[280px] flex flex-col items-center justify-center p-8 transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: brandColors[index],
            }}
          >
            {/* Text Content */}
            {index === 0 && (
              <div className="text-center mb-6">
                <h3 
                  className="text-4xl md:text-5xl font-black uppercase tracking-wider"
                  style={{ color: textColors[index] }}
                >
                  TRUSTED
                </h3>
              </div>
            )}
            {index === 1 && (
              <div className="text-center mb-6">
                <h3 
                  className="text-4xl md:text-5xl font-black uppercase tracking-wider"
                  style={{ color: textColors[index] }}
                >
                  PARTNERS
                </h3>
              </div>
            )}
            {index === 2 && (
              <div className="text-center mb-6">
                <h3 
                  className="text-4xl md:text-5xl font-black uppercase tracking-wider"
                  style={{ color: textColors[index] }}
                >
                  CERTIFICATIONS
                </h3>
              </div>
            )}
            {index === 3 && (
              <div className="text-center mb-6">
                <h3 
                  className="text-4xl md:text-5xl font-black uppercase tracking-wider"
                  style={{ color: textColors[index] }}
                >
                  &
                </h3>
                <p className="text-xs mt-2 opacity-80 uppercase tracking-widest" style={{ color: textColors[index] }}>
                  and
                </p>
              </div>
            )}
            {index === 4 && (
              <div className="text-center mb-6">
                <h3 
                  className="text-4xl md:text-5xl font-black uppercase tracking-wider"
                  style={{ color: textColors[index] }}
                >
                  ASSOCIATIONS
                </h3>
              </div>
            )}
            
            {/* Logo */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-24 w-auto h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
