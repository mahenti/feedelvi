import { useTranslation } from "react-i18next";

export function FinlandSection() {
  const { t } = useTranslation();
  return (
    <section className="relative py-24">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('/globe (1).jpg')" }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-4 shadow-md">🇫🇮 {t('finland.badge')}</span>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>{t('finland.title')}<span className="text-emerald-600">{t('finland.highlight')}</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('finland.description')}</p>
        </div>

        {/* picfi Image */}
        <div className="flex justify-center mb-12">
          <img 
            src="/picfi.png" 
            alt="Finland" 
            className="w-full max-w-5xl h-auto object-contain rounded-3xl shadow-2xl"
          />
        </div>

        {/* Stats & Certification */}
        <div className="flex flex-col items-center gap-4 mb-16">
          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-emerald-600">20+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wide mt-1">{t('finland.stats.years')}</div>
            </div>
            <div className="w-16 h-px sm:w-px sm:h-16 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-blue-600">350K+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wide mt-1">{t('finland.stats.tons')}</div>
            </div>
          </div>
          
          {/* Elvi Certified */}
          <div className="flex items-center gap-3">
            <span className="text-slate-500 font-black text-sm uppercase tracking-wide">{t('finland.certified')}</span>
            <a 
              href="https://elvimerkki.fi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
            >
              <img 
                src="/certview.png" 
                alt="Elvi Certified" 
                className="h-24 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-8 text-center">
          <p className="text-2xl font-medium text-slate-900" dangerouslySetInnerHTML={{ __html: t('finland.trustStatement') }}></p>
        </div>
      </div>
    </section>
  );
}
