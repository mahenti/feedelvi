import { Award } from 'lucide-react';

const partnerLogos = [
  { src: "/partners/partners (1).jpg", alt: "Partner 1" },
  { src: "/partners/partners - Copy (1).jpg", alt: "Partner 2" },
  { src: "/partners/partners - Copy (2) (1).jpg", alt: "Partner 3" },
  { src: "/partners/partners - Copy (3) (1).jpg", alt: "Partner 4" },
  { src: "/partners/partners - Copy (4) (1).jpg", alt: "Partner 5" },
];

const brandColors = [
  "#205a40",    // Dark Forest Green (Primary)
  "#f5f0e4",    // Cream/Off-white
  "#2d805b",    // Medium Green
  "#133425",    // Very Dark Green
  "#e7dbbf",    // Warm Beige/Tan
];

export function PartnersBanner() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#FAFBF8] to-white" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-6">
          <Award className="w-4 h-4" />
          CERTIFICATIONS
        </span>
        <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
          Trusted Partners
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Certifications & Associations
        </p>
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
