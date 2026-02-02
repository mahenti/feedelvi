export function Header() {
  return (
    <header className="w-full" style={{ backgroundColor: '#205a40' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold">
            FeedElvi
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-white/90 hover:text-white font-medium transition-colors">
              Products
            </a>
            <a href="#about" className="text-white/90 hover:text-white font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-white/90 hover:text-white font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="bg-white hover:bg-slate-100 text-emerald-600 px-6 py-2.5 rounded-full font-semibold transition-colors"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
