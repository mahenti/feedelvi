import { Award, Building2, Factory, Users, Globe, Shield } from 'lucide-react';

const trustIndicators = [
  { icon: Factory, value: '20+', label: 'Years of Excellence', color: '#5B8C5A' },
  { icon: Building2, value: '350K+', label: 'Tons Annual Capacity', color: '#205a40' },
  { icon: Users, value: '25+', label: 'Countries Served', color: '#B8956C' },
  { icon: Shield, value: '100%', label: 'EU Certified', color: '#D4A84B' },
];

export function GallerySection() {
  // Gallery section - no images, text only
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FAFBF8] via-white to-[#F0F4F0] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-6">
            <Award className="w-4 h-4" />
            TRUST & TRANSPARENCY
          </span>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Behind the Feed
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Step inside our world-class Finnish facilities where premium nutrition comes to life. 
            Every pellet reflects our commitment to quality, innovation, and animal welfare.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {trustIndicators.map((indicator, index) => (
            <div 
              key={index}
              className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100"
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: indicator.color }}
              />
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${indicator.color}15` }}
                >
                  <indicator.icon className="w-6 h-6" style={{ color: indicator.color }} />
                </div>
                <div>
                  <div className="text-3xl font-black" style={{ color: indicator.color }}>
                    {indicator.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {indicator.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Facility Images - Production Excellence */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Factory className="w-6 h-6 text-emerald-600" />
            Production Excellence
          </h3>
          <p className="text-slate-600">World-class production facilities ensuring the highest quality standards.</p>
        </div>

        {/* Production Gallery - Our Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Globe className="w-6 h-6 text-emerald-600" />
            Our Facilities
          </h3>
          <p className="text-slate-600">State-of-the-art manufacturing plants across Finland.</p>
        </div>

        {/* Team Section - The People Behind the Quality */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-emerald-600" />
            The People Behind the Quality
          </h3>
          <p className="text-slate-600">Dedicated professionals committed to excellence in animal nutrition.</p>
        </div>

        {/* Trust Statement */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Transparency Builds Trust
          </h3>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
            We believe in showing you exactly how your animal nutrition is made. 
            From raw materials to final pellets, every step meets the highest Finnish standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20">
              ISO 9001 Certified
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20">
              EU GMP+ Standards
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20">
              HACCP Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
