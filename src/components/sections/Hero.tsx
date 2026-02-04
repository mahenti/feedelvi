import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export function Hero() {
  const { t } = useTranslation();
  const words = ["Nutrition", "Feed", "Pellet", "Growth"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl" style={{ fontFamily: 'Onest, sans-serif', textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}>
            <span className="text-[#e7dbbf]">{t('hero.title').split(' ')[0]}</span> {t('hero.title').split(' ').slice(1, -1).join(' ')} <span className="inline-block min-w-[200px] md:min-w-[280px] lg:min-w-[340px] text-left transition-all duration-300">{words[currentIndex]}</span>
          </h1>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(43 30% 97%)"
          />
        </svg>
      </div>
    </section>
  );
}
