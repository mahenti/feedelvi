export function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Logo.JPG" 
              alt="FeedElvi Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              Products
            </a>
            <a href="#about" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
