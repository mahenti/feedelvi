import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Mail className="w-4 h-4" />
              {t('contactPage.badge')}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              {t('contactPage.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              {t('contactPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-black text-[#133425] mb-8">
                {t('contactPage.infoTitle')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#205a40] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#133425] mb-1">{t('contactPage.emailLabel')}</h3>
                    <p className="text-[#5a6b5a]">info@feedelvi.fi</p>
                    <p className="text-[#5a6b5a]">sales@feedelvi.fi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#205a40] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#133425] mb-1">{t('contactPage.phoneLabel')}</h3>
                    <p className="text-[#5a6b5a]">+358 12 345 6789</p>
                    <p className="text-[#5a6b5a]">+358 12 345 6790</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#205a40] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#133425] mb-1">{t('contactPage.addressLabel')}</h3>
                    <p className="text-[#5a6b5a]">Elvi Inkeri Oy</p>
                    <p className="text-[#5a6b5a]">FI-00000 Helsinki</p>
                    <p className="text-[#5a6b5a]">Finland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#205a40] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#133425] mb-1">{t('contactPage.hoursLabel')}</h3>
                    <p className="text-[#5a6b5a]">{t('contactPage.hoursValue')}</p>
                    <p className="text-[#5a6b5a]">{t('contactPage.hoursClosed')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-[#133425] mb-6">
                {t('contactPage.formTitle')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#133425] mb-2">
                    {t('contactPage.nameLabel')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] focus:border-[#205a40] focus:outline-none transition-colors"
                    placeholder={t('contactPage.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#133425] mb-2">
                    {t('contactPage.emailLabel')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] focus:border-[#205a40] focus:outline-none transition-colors"
                    placeholder={t('contactPage.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#133425] mb-2">
                    {t('contactPage.companyLabel')}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] focus:border-[#205a40] focus:outline-none transition-colors"
                    placeholder={t('contactPage.companyPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#133425] mb-2">
                    {t('contactPage.messageLabel')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#e7dbbf] focus:border-[#205a40] focus:outline-none transition-colors resize-none"
                    placeholder={t('contactPage.messagePlaceholder')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#205a40] hover:bg-[#133425] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t('contactPage.sendButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
