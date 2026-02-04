import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  onOpenQuote: () => void;
}

export function Header({ onOpenQuote }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language.startsWith('fi') ? 'fi' : 'en';
    const newLang = currentLang === 'en' ? 'fi' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-gradient-to-b from-[#205a40] via-[#205a40]/60 to-transparent backdrop-blur-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-4 sm:-ml-16 lg:-ml-24">
            <img 
              src="/logotranspe.png" 
              alt="FeedElvi Logo" 
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/products" className="text-white font-bold hover:text-[#e7dbbf] transition-colors drop-shadow-lg text-sm lg:text-base">
              {t('nav.products')}
            </Link>
            <Link to="/about" className="text-white font-bold hover:text-[#e7dbbf] transition-colors drop-shadow-lg text-sm lg:text-base">
              {t('nav.about')}
            </Link>
            <Link to="/partners" className="text-white font-bold hover:text-[#e7dbbf] transition-colors drop-shadow-lg text-sm lg:text-base">
              Partners
            </Link>
            <Link to="/contact" className="text-white font-bold hover:text-[#e7dbbf] transition-colors drop-shadow-lg text-sm lg:text-base">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Language Switcher & Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white font-bold hover:text-[#e7dbbf] transition-colors drop-shadow-lg px-3 py-1.5 rounded-full border border-white/30 hover:border-[#e7dbbf]/50"
              aria-label={t('language.switch')}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{i18n.language.startsWith('fi') ? 'FI' : 'EN'}</span>
            </button>
            <button 
              onClick={onOpenQuote}
              className="bg-white hover:bg-[#e7dbbf] text-[#205a40] px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wide transition-all transform hover:scale-105 shadow-lg"
            >
              {t('nav.getQuote')}
            </button>
          </div>

          {/* Mobile Burger Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-40 bg-[#133425]/95 backdrop-blur-lg md:hidden">
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white font-bold hover:text-[#e7dbbf] transition-colors px-4 py-2 rounded-full border border-white/30 mb-4"
          >
            <Globe className="w-5 h-5" />
            <span>{i18n.language.startsWith('fi') ? 'Suomi' : 'English'}</span>
          </button>
          <Link 
            to="/products" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-[#e7dbbf] transition-colors"
          >
            {t('nav.products')}
          </Link>
          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-[#e7dbbf] transition-colors"
          >
            {t('nav.about')}
          </Link>
          <Link 
            to="/partners" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-[#e7dbbf] transition-colors"
          >
            Partners
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-[#e7dbbf] transition-colors"
          >
            {t('nav.contact')}
          </Link>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="bg-white hover:bg-[#e7dbbf] text-[#205a40] px-8 py-3 rounded-full font-black text-lg uppercase tracking-wide transition-all mt-4"
          >
            {t('nav.getQuote')}
          </button>
        </div>
      </div>
    )}
    </>
  );
}
