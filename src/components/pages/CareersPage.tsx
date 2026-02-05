import { Users, Briefcase, Heart, GraduationCap, MapPin, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const benefits = [
  { icon: Heart, titleKey: "careersPage.benefit1Title", descKey: "careersPage.benefit1Desc" },
  { icon: GraduationCap, titleKey: "careersPage.benefit2Title", descKey: "careersPage.benefit2Desc" },
  { icon: Briefcase, titleKey: "careersPage.benefit3Title", descKey: "careersPage.benefit3Desc" },
  { icon: Users, titleKey: "careersPage.benefit4Title", descKey: "careersPage.benefit4Desc" }
];

const openPositions = [
  {
    title: "Production Supervisor",
    department: "Operations",
    location: "Helsinki, Finland",
    type: "Full-time"
  },
  {
    title: "Quality Control Specialist",
    department: "Quality Assurance",
    location: "Helsinki, Finland",
    type: "Full-time"
  },
  {
    title: "Sales Manager - Export",
    department: "Sales",
    location: "Helsinki, Finland",
    type: "Full-time"
  },
  {
    title: "R&D Nutritionist",
    department: "Research & Development",
    location: "Helsinki, Finland",
    type: "Full-time"
  },
  {
    title: "Logistics Coordinator",
    department: "Supply Chain",
    location: "Helsinki, Finland",
    type: "Full-time"
  }
];

const values = [
  { titleKey: "careersPage.value1", descKey: "careersPage.value1Desc" },
  { titleKey: "careersPage.value2", descKey: "careersPage.value2Desc" },
  { titleKey: "careersPage.value3", descKey: "careersPage.value3Desc" },
  { titleKey: "careersPage.value4", descKey: "careersPage.value4Desc" }
];

export function CareersPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Users className="w-4 h-4" />
              {t('careersPage.badge')}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              {t('careersPage.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              {t('careersPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              {t('careersPage.whyTitle')}
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              {t('careersPage.whyDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#205a40] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#133425] mb-3">{t(benefit.titleKey)}</h3>
                <p className="text-[#5a6b5a] text-sm leading-relaxed">{t(benefit.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#133425] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('careersPage.valuesTitle')}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t('careersPage.valuesDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-[#205a40] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#e7dbbf] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#133425] font-black text-xl">{t(value.titleKey)[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t(value.titleKey)}</h3>
                <p className="text-white/70 text-sm">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              {t('careersPage.positionsTitle')}
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              {t('careersPage.positionsDesc')}
            </p>
          </div>
          
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#133425] mb-2 group-hover:text-[#2d805b] transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#5a6b5a]">
                      <span className="bg-[#205a40]/10 text-[#205a40] px-3 py-1 rounded-full font-medium">
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="bg-[#e7dbbf] text-[#133425] px-3 py-1 rounded-full font-medium">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#205a40] font-bold group-hover:gap-4 transition-all">
                    <span>{t('careersPage.viewDetails')}</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="bg-[#205a40] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            {t('careersPage.ctaTitle')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('careersPage.ctaDesc')}
          </p>
          <a 
            href="mailto:careers@feedelvi.fi"
            className="inline-block bg-white text-[#205a40] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e7dbbf] transition-colors"
          >
            {t('careersPage.sendApplication')}
          </a>
        </div>
      </section>
    </div>
  );
}
