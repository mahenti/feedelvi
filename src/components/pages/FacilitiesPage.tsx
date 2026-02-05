import { Factory, MapPin, Shield, Users, Award, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

const facilityImages = [
  { src: '/gallery/z3.jpg', title: 'Main Production Facility', description: 'Our state-of-the-art production plant in Finland' },
  { src: '/gallery/z9.jpg', title: 'Storage Silos', description: 'High-capacity raw material storage' },
  { src: '/gallery/z10.jpg', title: 'Warehouse Interior', description: 'Climate-controlled finished goods storage' },
  { src: '/gallery/z11.jpg', title: 'Pellet Production Line', description: 'Advanced pelleting technology' },
  { src: '/gallery/z12.jpg', title: 'Quality Control Laboratory', description: 'In-house testing and analysis' },
  { src: '/gallery/z13.jpg', title: 'Quality Assurance Team', description: 'Dedicated quality professionals' },
];

const capabilities = [
  { icon: Factory, title: "Production Capacity", value: "350,000", unit: "tons/year", description: "Modern production lines operating 24/7" },
  { icon: Shield, title: "Quality Control", value: "100%", unit: "tested", description: "Every batch undergoes rigorous testing" },
  { icon: Users, title: "Workforce", value: "150+", unit: "employees", description: "Skilled professionals in production & R&D" },
  { icon: Award, title: "Certifications", value: "ISO 9001", unit: "& GMP+", description: "International quality standards" },
];

export function FacilitiesPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Factory className="w-4 h-4" />
              {t('facilitiesPage.badge')}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              {t('facilitiesPage.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              {t('facilitiesPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
                {t('facilitiesPage.overviewTitle')}<br />
                <span className="text-[#2d805b]">{t('facilitiesPage.overviewHighlight')}</span>
              </h2>
              <p className="text-lg text-[#5a6b5a] leading-relaxed mb-6">
                {t('facilitiesPage.overviewDesc')}
              </p>
              <div className="flex items-center gap-3 text-[#5a6b5a]">
                <MapPin className="w-5 h-5 text-[#2d805b]" />
                <span className="font-semibold">{t('facilitiesPage.location')}</span>
              </div>
            </div>
            <div className="bg-[#133425] rounded-3xl p-4">
              <img 
                src="/gallery/z3.jpg" 
                alt="Main Facility" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-[#205a40] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-black text-[#133425] mb-1">{cap.value}</div>
                <div className="text-sm font-bold text-[#2d805b] mb-2">{cap.unit}</div>
                <h3 className="text-lg font-bold text-[#133425] mb-1">{cap.title}</h3>
                <p className="text-sm text-[#5a6b5a]">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#133425] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('facilitiesPage.galleryTitle')}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t('facilitiesPage.galleryDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-[#205a40]">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
                {t('facilitiesPage.techTitle')}
              </h2>
              <p className="text-lg text-[#5a6b5a] leading-relaxed mb-6">
                {t('facilitiesPage.techDesc')}
              </p>
              <ul className="space-y-4">
                {[
                  t('facilitiesPage.techItem1'),
                  t('facilitiesPage.techItem2'),
                  t('facilitiesPage.techItem3'),
                  t('facilitiesPage.techItem4'),
                  t('facilitiesPage.techItem5')
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2d805b] rounded-full" />
                    <span className="text-[#5a6b5a] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f5f0e4] rounded-xl p-6 text-center">
                  <Truck className="w-8 h-8 text-[#205a40] mx-auto mb-2" />
                  <div className="text-2xl font-black text-[#133425]">{t('facilitiesPage.ops24')}</div>
                  <div className="text-sm text-[#5a6b5a]">{t('facilitiesPage.opsLabel')}</div>
                </div>
                <div className="bg-[#f5f0e4] rounded-xl p-6 text-center">
                  <Factory className="w-8 h-8 text-[#205a40] mx-auto mb-2" />
                  <div className="text-2xl font-black text-[#133425]">{t('facilitiesPage.lines')}</div>
                  <div className="text-sm text-[#5a6b5a]">{t('facilitiesPage.linesLabel')}</div>
                </div>
                <div className="bg-[#f5f0e4] rounded-xl p-6 text-center">
                  <Shield className="w-8 h-8 text-[#205a40] mx-auto mb-2" />
                  <div className="text-2xl font-black text-[#133425]">{t('facilitiesPage.qualityRate')}</div>
                  <div className="text-sm text-[#5a6b5a]">{t('facilitiesPage.qualityLabel')}</div>
                </div>
                <div className="bg-[#f5f0e4] rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-[#205a40] mx-auto mb-2" />
                  <div className="text-2xl font-black text-[#133425]">{t('facilitiesPage.rdTeam')}</div>
                  <div className="text-sm text-[#5a6b5a]">{t('facilitiesPage.rdLabel')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
