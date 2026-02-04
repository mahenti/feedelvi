import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#133425] text-white overflow-hidden" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Top Section - Large Typography */}
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
            Let's Talk
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#e7dbbf] uppercase" style={{ fontFamily: 'Onest, sans-serif', fontWeight: 900, letterSpacing: '0.05em' }}>
            ABOUT YOUR FEED NEEDS
          </p>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2d805b] mb-4">
              Contact
            </h3>
            <div className="space-y-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <a href="mailto:info@feedelvi.fi" className="flex items-center gap-3 group font-bold">
                <Mail className="w-5 h-5 text-[#2d805b]" />
                <span className="text-lg group-hover:text-[#e7dbbf] transition-colors">
                  info@feedelvi.fi
                </span>
              </a>
              <a href="tel:+358123456789" className="flex items-center gap-3 group font-bold">
                <Phone className="w-5 h-5 text-[#2d805b]" />
                <span className="text-lg group-hover:text-[#e7dbbf] transition-colors">
                  +358 12 345 6789
                </span>
              </a>
              <div className="flex items-start gap-3 font-bold">
                <MapPin className="w-5 h-5 text-[#2d805b] mt-1" />
                <span className="text-lg text-white/80">
                  FI-00000 Helsinki<br />Finland
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2d805b] mb-4">
              Products
            </h3>
            <ul className="space-y-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {['Bovine Nutrition', 'Ovine-Caprine', 'Porcine Feed', 'Lagomorph', 'Poultry Range'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg text-white/80 hover:text-[#e7dbbf] transition-colors flex items-center gap-2 group font-bold">
                    {item}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2d805b] mb-4">
              Company
            </h3>
            <ul className="space-y-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {['About Us', 'Our Facilities', 'Sustainability', 'Quality Standards', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg text-white/80 hover:text-[#e7dbbf] transition-colors flex items-center gap-2 group font-bold">
                    {item}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2d805b] mb-4">
              Certified
            </h3>
            <div className="space-y-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <div className="px-4 py-3 bg-[#205a40]/50 rounded-lg">
                <span className="text-sm font-bold">ISO 9001</span>
              </div>
              <div className="px-4 py-3 bg-[#205a40]/50 rounded-lg">
                <span className="text-sm font-bold">EU GMP+</span>
              </div>
              <div className="px-4 py-3 bg-[#205a40]/50 rounded-lg">
                <span className="text-sm font-bold">HACCP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Statement */}
        <div className="border-t border-[#205a40] pt-16 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img src="/Faviconwhite.png" alt="FeedElvi" className="w-32 h-32" />
            <p className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-left">
              <span className="text-[#e7dbbf]">Finnish</span> Quality.<br />
              <span className="text-[#2d805b]">Global</span> Standards.<br />
              <span className="text-white">Trusted</span> Nutrition.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#205a40]">
          <div className="text-2xl font-black tracking-tight">
            FEED<span className="text-[#2d805b]">ELVI</span>
          </div>
          <p className="text-sm text-white/60">
            © 2026 FeedElvi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/60 hover:text-[#e7dbbf] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-[#e7dbbf] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
