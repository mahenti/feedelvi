import { Award, Shield, CheckCircle, Globe, Factory } from "lucide-react";

const partners = [
  { src: "/partners/partners (1).jpg", alt: "Partner 1" },
  { src: "/partners/partners - Copy (1).jpg", alt: "Partner 2" },
  { src: "/partners/partners - Copy (2) (1).jpg", alt: "Partner 3" },
  { src: "/partners/partners - Copy (3) (1).jpg", alt: "Partner 4" },
  { src: "/partners/partners - Copy (4) (1).jpg", alt: "Partner 5" },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System certification ensuring consistent product quality and continuous improvement.",
    icon: Award,
  },
  {
    name: "EU GMP+",
    description: "Good Manufacturing Practice certification for safe feed production across the European Union.",
    icon: Shield,
  },
  {
    name: "HACCP",
    description: "Hazard Analysis Critical Control Points - systematic approach to food safety management.",
    icon: CheckCircle,
  },
  {
    name: "Finnish Feed Authority",
    description: "Licensed and regulated by the Finnish Food Authority for animal feed production.",
    icon: Factory,
  },
];

const exportMarkets = [
  "Finland", "Sweden", "Norway", "Denmark", "Germany", 
  "Poland", "Estonia", "Latvia", "Lithuania", "Netherlands"
];

export function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Award className="w-4 h-4" />
              CERTIFICATIONS & PARTNERS
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Trusted Partners
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Certified by leading international standards. Trusted by farms across 25+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              Our Certification Partners
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              We work with internationally recognized certification bodies to ensure the highest standards of quality and safety.
            </p>
          </div>
          
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center aspect-square"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-w-full max-h-24 w-auto h-auto object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Detail */}
      <section className="bg-[#133425] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Our Certifications
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Every certification represents our commitment to excellence, safety, and transparency in animal nutrition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-[#205a40] rounded-2xl p-8 hover:bg-[#2d805b] transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-8 h-8 text-[#e7dbbf]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{cert.name}</h3>
                    <p className="text-white/80 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-6">
                <Globe className="w-4 h-4" />
                GLOBAL REACH
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
                Serving Markets<br />
                <span className="text-[#2d805b]">Across Europe</span>
              </h2>
              <p className="text-lg text-[#5a6b5a] leading-relaxed mb-6">
                From our base in Finland, we export premium animal feed to farms and distributors across Northern Europe and beyond. Our logistics network ensures timely delivery and consistent quality.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#205a40] text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-black mb-2">25+</div>
                  <div className="text-white/80">Countries Served</div>
                </div>
                <div className="bg-[#133425] text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-black mb-2">100%</div>
                  <div className="text-white/80">EU Compliant</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#133425] mb-6 text-center">Export Markets</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {exportMarkets.map((market, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-[#f5f0e4] text-[#133425] rounded-full font-semibold text-sm"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#205a40] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Interested in distributing FeedElvi products in your region? Let's discuss partnership opportunities.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-[#205a40] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e7dbbf] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
