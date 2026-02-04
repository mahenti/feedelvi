import { Award, Building2, Factory, Users, Globe, Shield } from 'lucide-react';

const productionExcellenceImages = [
  { src: '/gallery/z1.jpg', title: 'Automated Production Line', category: 'Manufacturing' },
  { src: '/gallery/z2.jpg', title: 'Precision Processing Equipment', category: 'Processing' },
  { src: '/gallery/z4.jpg', title: 'Quality Control Systems', category: 'Quality' },
  { src: '/gallery/z5.jpg', title: 'Advanced Mixing Technology', category: 'Technology' },
  { src: '/gallery/z6.jpg', title: 'Pellet Production Unit', category: 'Production' },
  { src: '/gallery/z7.jpg', title: 'Material Handling Systems', category: 'Logistics' },
  { src: '/gallery/z8.jpg', title: 'High-Capacity Machinery', category: 'Equipment' },
];
const facilityImages = [
  { src: '/gallery/z3.jpg', title: 'Main Production Facility', category: 'Facility' },
  { src: '/gallery/z9.jpg', title: 'Storage Silos', category: 'Storage' },
  { src: '/gallery/z10.jpg', title: 'Warehouse Interior', category: 'Warehouse' },
  { src: '/gallery/z11.jpg', title: 'Pellet Production Line', category: 'Production' },
  { src: '/gallery/z12.jpg', title: 'Quality Control Laboratory', category: 'Laboratory' },
  { src: '/gallery/z13.jpg', title: 'Quality Assurance Team', category: 'Team' },
  { src: '/gallery/z14.jpg', title: 'Production Operations', category: 'Operations' },
  { src: '/gallery/z15.jpg', title: 'Packaging Department', category: 'Packaging' },
  { src: '/gallery/z16.jpg', title: 'Raw Material Storage', category: 'Storage' },
  { src: '/gallery/z17.jpg', title: 'Finished Goods Warehouse', category: 'Warehouse' },
  { src: '/gallery/z18.jpg', title: 'Research & Development', category: 'R&D' },
  { src: '/gallery/z19.jpg', title: 'Management Team', category: 'Leadership' },
  { src: '/gallery/z20.jpg', title: 'Administrative Building', category: 'Office' },
  { src: '/gallery/z21.jpg', title: 'Training Center', category: 'Training' },
  { src: '/gallery/z22.jpg', title: 'Maintenance Workshop', category: 'Maintenance' },
  { src: '/gallery/z24.jpg', title: 'Distribution Center', category: 'Distribution' },
  { src: '/gallery/z25.jpg', title: 'Technical Engineering Team', category: 'Engineering' },
  { src: '/gallery/z26.jpg', title: 'Customer Support Team', category: 'Support' },
];

const teamRoles = [
  { name: 'Dr. Anna Korhonen', role: 'Chief Nutritionist', initials: 'AK', color: '#205a40' },
  { name: 'Mikael Virtanen', role: 'Production Manager', initials: 'MV', color: '#2d805b' },
  { name: 'Sofia Lindqvist', role: 'Quality Director', initials: 'SL', color: '#133425' },
  { name: 'Erik Johansson', role: 'R&D Lead', initials: 'EJ', color: '#5B8C5A' },
  { name: 'Olivia Bergström', role: 'Technical Expert', initials: 'OB', color: '#205a40' },
  { name: 'Lars Nieminen', role: 'Customer Relations', initials: 'LN', color: '#2d805b' },
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

        {/* Production Excellence - Featured Images */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Factory className="w-6 h-6 text-emerald-600" />
            Production Excellence
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionExcellenceImages.slice(0, 6).map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">
                    {image.category}
                  </span>
                  <h4 className="text-white font-bold mt-1">
                    {image.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Facilities - Masonry Style */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Globe className="w-6 h-6 text-emerald-600" />
            Our Facilities
          </h3>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {facilityImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl break-inside-avoid cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h4 className="text-white font-bold mt-1">
                      {image.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The People Behind the Quality */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-emerald-600" />
            The People Behind the Quality
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamRoles.map((person, index) => (
              <div 
                key={index}
                className="group text-center"
              >
                <div 
                  className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-black text-white mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: person.color }}
                >
                  {person.initials}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">
                  {person.name}
                </h4>
                <p className="text-sm text-slate-500">
                  {person.role}
                </p>
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
