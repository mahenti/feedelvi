import { Building2, Users, Award, Globe, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              {t('aboutPage.badge')}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              {t('aboutPage.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              {t('aboutPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
                {t('aboutPage.overviewTitle')}<br />
                <span className="text-[#2d805b]">{t('aboutPage.overviewHighlight')}</span>
              </h2>
              <p className="text-lg text-[#5a6b5a] leading-relaxed mb-6">
                {t('aboutPage.overviewText1')}
              </p>
              <p className="text-lg text-[#5a6b5a] leading-relaxed">
                {t('aboutPage.overviewText2')}
              </p>
            </div>
            <div className="bg-[#133425] rounded-3xl p-4 lg:p-6">
              <img 
                src="/z23.jpg" 
                alt="Elvi Inkeri Facility" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#133425] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, value: "20+", label: t('aboutPage.stats.years'), color: "#2d805b" },
              { icon: Users, value: "25+", label: t('aboutPage.stats.countries'), color: "#e7dbbf" },
              { icon: Globe, value: "350K+", label: t('aboutPage.stats.tons'), color: "#2d805b" },
              { icon: CheckCircle, value: "100%", label: t('aboutPage.stats.certified'), color: "#e7dbbf" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4" style={{ color: stat.color }} />
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              {t('aboutPage.valuesTitle')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('aboutPage.value1Title'),
                description: t('aboutPage.value1Desc')
              },
              {
                title: t('aboutPage.value2Title'),
                description: t('aboutPage.value2Desc')
              },
              {
                title: t('aboutPage.value3Title'),
                description: t('aboutPage.value3Desc')
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#205a40] mb-4">{value.title}</h3>
                <p className="text-[#5a6b5a]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
