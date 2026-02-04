import { Award, Building2, Factory, Users, Globe, Shield } from 'lucide-react';

const facilityImages = [
  { src: '/aa1.jpg', title: 'Modern Production Line', category: 'Production' },
  { src: '/aa2s1.jpg', title: 'Quality Control Lab', category: 'Quality' },
];

const productionImages = [
  { src: '/s1a1.jpg', title: 'Manufacturing Excellence', category: 'Manufacturing' },
  { src: '/s1a2.jpg', title: 'State-of-the-Art Equipment', category: 'Equipment' },
  { src: '/s1a3.jpg', title: 'Precision Processing', category: 'Processing' },
  { src: '/s1a4.jpg', title: 'Advanced Machinery', category: 'Machinery' },
  { src: '/s1a5.jpg', title: 'Quality Standards', category: 'Standards' },
  { src: '/s1a6.jpg', title: 'Production Floor', category: 'Facility' },
  { src: '/s1a7.jpg', title: 'Technical Operations', category: 'Operations' },
  { src: '/s1a8.jpg', title: 'Industrial Scale', category: 'Scale' },
  { src: '/s1a9.jpg', title: 'Modern Facility', category: 'Facility' },
  { src: '/s1a10.jpg', title: 'Engineering Excellence', category: 'Engineering' },
  { src: '/s1a11.jpg', title: 'Quality Assurance', category: 'Quality' },
  { src: '/s1a12.jpg', title: 'Production Capacity', category: 'Capacity' },
  { src: '/s1a13.jpg', title: 'World-Class Facility', category: 'Facility' },
  { src: '/s1a14.jpg', title: 'Research & Development', category: 'R&D' },
  { src: '/s1a15.jpg', title: 'Innovation Hub', category: 'Innovation' },
];

const teamImages = [
  { src: '/s2a1.jpg', title: 'Expert Team', category: 'Team' },
  { src: '/s2a2.jpg', title: 'Professional Staff', category: 'Staff' },
  { src: '/s2a3.jpg', title: 'Skilled Workforce', category: 'Workforce' },
  { src: '/s2a4.jpg', title: 'Dedicated Personnel', category: 'Personnel' },
];

const trustIndicators = [
  { icon: Factory, value: '20+', label: 'Years of Excellence', color: '#5B8C5A' },
  { icon: Building2, value: '350K+', label: 'Tons Annual Capacity', color: '#205a40' },
  { icon: Users, value: '25+', label: 'Countries Served', color: '#B8956C' },
  { icon: Shield, value: '100%', label: 'EU Certified', color: '#D4A84B' },
];

export function GallerySection() {
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

        {/* Featured Facility Images */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Factory className="w-6 h-6 text-emerald-600" />
            Production Excellence
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {facilityImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wide">
                    {image.category}
                  </span>
                  <h4 className="text-white text-xl font-bold mt-1">
                    {image.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Production Gallery - Masonry Style */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Globe className="w-6 h-6 text-emerald-600" />
            Our Facilities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {productionImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden cursor-pointer aspect-square"
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h4 className="text-white text-lg font-bold mt-1">
                      {image.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-emerald-600" />
            The People Behind the Quality
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-emerald-300 text-xs font-bold uppercase tracking-wide">
                    {image.category}
                  </span>
                  <h4 className="text-white font-bold">
                    {image.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
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
