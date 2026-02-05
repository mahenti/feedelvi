import { Shield, CheckCircle, Award, Microscope, FileCheck, TestTube } from "lucide-react";
import { useTranslation } from "react-i18next";

const qualityProcesses = [
  {
    icon: Microscope,
    titleKey: "qualityPage.stage1Title",
    descKey: "qualityPage.stage1Desc"
  },
  {
    icon: TestTube,
    titleKey: "qualityPage.stage2Title",
    descKey: "qualityPage.stage2Desc"
  },
  {
    icon: FileCheck,
    titleKey: "qualityPage.stage3Title",
    descKey: "qualityPage.stage3Desc"
  }
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "GMP+ FSA", description: "Feed Safety Assurance" },
  { name: "HACCP", description: "Hazard Analysis Critical Control Points" },
  { name: "FAMI-QS", description: "Feed Additives and Premixtures" }
];

const testingParameters = [
  "Protein content analysis",
  "Moisture levels",
  "Mycotoxin screening",
  "Heavy metals detection",
  "Microbiological testing",
  "Pellet durability",
  "Nutritional profile verification",
  "Contaminant screening"
];

export function QualityPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Shield className="w-4 h-4" />
              {t('qualityPage.badge')}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              {t('qualityPage.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              {t('qualityPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
                {t('qualityPage.promiseTitle')}<br />
                <span className="text-[#2d805b]">{t('qualityPage.promiseHighlight')}</span>
              </h2>
              <p className="text-lg text-[#5a6b5a] leading-relaxed mb-6">
                {t('qualityPage.promiseDesc')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#205a40] rounded-xl p-6 text-center">
                  <Award className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">{t('qualityPage.batchTested')}</div>
                  <div className="text-white/80 text-sm">{t('qualityPage.batchTestedLabel')}</div>
                </div>
                <div className="bg-[#133425] rounded-xl p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-3xl font-black text-white">{t('qualityPage.isoCertified')}</div>
                  <div className="text-white/80 text-sm">{t('qualityPage.isoLabel')}</div>
                </div>
              </div>
            </div>
            <div className="bg-[#133425] rounded-3xl p-4">
              <img 
                src="/gallery/z12.jpg" 
                alt="Quality Laboratory" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="bg-[#133425] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('qualityPage.processTitle')}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t('qualityPage.processDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {qualityProcesses.map((process, index) => (
              <div key={index} className="bg-[#205a40] rounded-2xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#e7dbbf] rounded-full flex items-center justify-center text-[#133425] font-black text-xl">
                  {index + 1}
                </div>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 mt-2">
                  <process.icon className="w-7 h-7 text-[#e7dbbf]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t(process.titleKey)}</h3>
                <p className="text-white/80 leading-relaxed">{t(process.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              {t('qualityPage.certificationsTitle')}
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              {t('qualityPage.certificationsDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#205a40] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#133425] mb-2">{cert.name}</h3>
                <p className="text-sm text-[#5a6b5a]">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Parameters */}
      <section className="bg-[#205a40] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                {t('qualityPage.testingTitle')}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {t('qualityPage.testingDesc')}
              </p>
              <ul className="space-y-4">
                {testingParameters.map((param, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-[#e7dbbf] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#133425]" />
                    </div>
                    <span className="text-white font-medium">{param}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#133425] mb-6 text-center">{t('qualityPage.metricsTitle')}</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#5a6b5a] font-medium">{t('qualityPage.batchAcceptance')}</span>
                    <span className="text-[#205a40] font-bold">99.7%</span>
                  </div>
                  <div className="w-full bg-[#f5f0e4] rounded-full h-3">
                    <div className="bg-[#2d805b] h-3 rounded-full" style={{ width: '99.7%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#5a6b5a] font-medium">{t('qualityPage.satisfaction')}</span>
                    <span className="text-[#205a40] font-bold">98.5%</span>
                  </div>
                  <div className="w-full bg-[#f5f0e4] rounded-full h-3">
                    <div className="bg-[#2d805b] h-3 rounded-full" style={{ width: '98.5%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#5a6b5a] font-medium">{t('qualityPage.delivery')}</span>
                    <span className="text-[#205a40] font-bold">96.8%</span>
                  </div>
                  <div className="w-full bg-[#f5f0e4] rounded-full h-3">
                    <div className="bg-[#2d805b] h-3 rounded-full" style={{ width: '96.8%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#5a6b5a] font-medium">{t('qualityPage.consistency')}</span>
                    <span className="text-[#205a40] font-bold">99.2%</span>
                  </div>
                  <div className="w-full bg-[#f5f0e4] rounded-full h-3">
                    <div className="bg-[#2d805b] h-3 rounded-full" style={{ width: '99.2%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
