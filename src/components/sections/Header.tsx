import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenQuote: () => void;
}

export function Header({ onOpenQuote }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        ? "bg-[#205a40]/90 backdrop-blur-md shadow-lg" 
        : "bg-gradient-to-b from-[#205a40] via-[#205a40]/60 to-transparent"
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
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/products" className="text-white font-bold hover:text-[#e7dbbf] transition-colors drop-shadow-lg">
              Products
            </Link>
            <Link to="/about" className="text-white font-bold hover:text-[#e7dbbf] transition-colors drop-shadow-lg">
              About
            </Link>
            <Link to="/contact" className="text-white font-bold hover:text-[#e7dbbf] transition-colors drop-shadow-lg">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={onOpenQuote}
            className="hidden md:block bg-white hover:bg-[#e7dbbf] text-[#205a40] px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wide transition-all transform hover:scale-105 shadow-lg"
          >
            Get Quote
          </button>

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
          <Link 
            to="/products" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-[#e7dbbf] transition-colors"
          >
            Products
          </Link>
          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-[#e7dbbf] transition-colors"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-[#e7dbbf] transition-colors"
          >
            Contact
          </Link>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="bg-white hover:bg-[#e7dbbf] text-[#205a40] px-8 py-3 rounded-full font-black text-lg uppercase tracking-wide transition-all mt-4"
          >
            Get Quote
          </button>
        </div>
      </div>
    )}
    </>
  );
}
