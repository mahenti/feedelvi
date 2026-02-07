import { Globe, MapPin, Package, TrendingUp, Award, Users, CheckCircle, ArrowRight, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const distributorLocations = [
  { country: "Finland", city: "Helsinki", region: "Nordics" },
  { country: "Sweden", city: "Stockholm", region: "Nordics" },
  { country: "Norway", city: "Oslo", region: "Nordics" },
  { country: "Denmark", city: "Copenhagen", region: "Nordics" },
  { country: "Estonia", city: "Tallinn", region: "Baltics" },
  { country: "Latvia", city: "Riga", region: "Baltics" },
  { country: "Lithuania", city: "Vilnius", region: "Baltics" },
  { country: "Poland", city: "Warsaw", region: "Central Europe" },
  { country: "Germany", city: "Berlin", region: "Central Europe" },
  { country: "Netherlands", city: "Amsterdam", region: "Western Europe" },
  { country: "Belgium", city: "Brussels", region: "Western Europe" },
  { country: "France", city: "Paris", region: "Western Europe" }
];

const benefits = [
  {
    icon: Package,
    titleKey: "distributorsPage.benefit1Title",
    descKey: "distributorsPage.benefit1Desc"
  },
  {
    icon: TrendingUp,
    titleKey: "distributorsPage.benefit2Title",
    descKey: "distributorsPage.benefit2Desc"
  },
  {
    icon: Award,
    titleKey: "distributorsPage.benefit3Title",
    descKey: "distributorsPage.benefit3Desc"
  },
  {
    icon: Users,
    titleKey: "distributorsPage.benefit4Title",
    descKey: "distributorsPage.benefit4Desc"
  }
];

const requirements = [
  "distributorsPage.req1",
  "distributorsPage.req2",
  "distributorsPage.req3",
  "distributorsPage.req4",
  "distributorsPage.req5",
  "distributorsPage.req6"
];

export function DistributorsPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Globe className="w-4 h-4" />
              {t('distributorsPage.badge')}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              {t('distributorsPage.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              {t('distributorsPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              {t('distributorsPage.presenceTitle')}
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              {t('distributorsPage.presenceDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distributorLocations.map((location, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#205a40] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#133425] mb-1">{location.country}</h3>
                    <p className="text-[#5a6b5a] text-sm">{location.city}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-[#e7dbbf] text-[#133425] text-xs font-bold rounded-full">
                      {location.region}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#133425] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('distributorsPage.benefitsTitle')}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t('distributorsPage.benefitsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-[#205a40] rounded-2xl p-8 text-center hover:bg-[#2d805b] transition-colors"
              >
                <div className="w-16 h-16 bg-[#e7dbbf] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#133425]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t(benefit.titleKey)}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{t(benefit.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Application */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Requirements */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
                {t('distributorsPage.requirementsTitle')}
              </h2>
              <p className="text-lg text-[#5a6b5a] leading-relaxed mb-8">
                {t('distributorsPage.requirementsDesc')}
              </p>
              
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#205a40] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[#5a6b5a] font-medium text-lg">{t(req)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 bg-[#e7dbbf] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#133425] mb-3">
                  {t('distributorsPage.supportTitle')}
                </h3>
                <p className="text-[#5a6b5a]">
                  {t('distributorsPage.supportDesc')}
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#133425] mb-2">
                {t('distributorsPage.formTitle')}
              </h3>
              <p className="text-[#5a6b5a] mb-8">
                {t('distributorsPage.formDesc')}
              </p>

              {submitted ? (
                <div className="bg-[#2d805b] rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {t('distributorsPage.successTitle')}
                  </h4>
                  <p className="text-white/90">
                    {t('distributorsPage.successMessage')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#133425] mb-2">
                      {t('distributorsPage.companyLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] bg-[#f5f0e4] text-[#133425] focus:outline-none focus:ring-2 focus:ring-[#205a40]"
                      placeholder={t('distributorsPage.companyPlaceholder')}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#133425] mb-2">
                        {t('distributorsPage.nameLabel')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] bg-[#f5f0e4] text-[#133425] focus:outline-none focus:ring-2 focus:ring-[#205a40]"
                        placeholder={t('distributorsPage.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#133425] mb-2">
                        {t('distributorsPage.emailLabel')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] bg-[#f5f0e4] text-[#133425] focus:outline-none focus:ring-2 focus:ring-[#205a40]"
                        placeholder={t('distributorsPage.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#133425] mb-2">
                        {t('distributorsPage.phoneLabel')}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] bg-[#f5f0e4] text-[#133425] focus:outline-none focus:ring-2 focus:ring-[#205a40]"
                        placeholder={t('distributorsPage.phonePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#133425] mb-2">
                        {t('distributorsPage.countryLabel')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] bg-[#f5f0e4] text-[#133425] focus:outline-none focus:ring-2 focus:ring-[#205a40]"
                        placeholder={t('distributorsPage.countryPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#133425] mb-2">
                      {t('distributorsPage.messageLabel')}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] bg-[#f5f0e4] text-[#133425] focus:outline-none focus:ring-2 focus:ring-[#205a40] resize-none"
                      placeholder={t('distributorsPage.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#205a40] hover:bg-[#2d805b] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {t('distributorsPage.submitButton')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#205a40] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            {t('distributorsPage.ctaTitle')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('distributorsPage.ctaDesc')}
          </p>
          <a 
            href="mailto:distributors@feedelvi.fi"
            className="inline-flex items-center gap-2 bg-white text-[#205a40] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e7dbbf] transition-colors"
          >
            {t('distributorsPage.ctaEmail')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
