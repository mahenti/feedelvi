import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full" style={{ backgroundColor: '#205a40' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-16 lg:-ml-24">
            <img 
              src="/logotranspe.png" 
              alt="FeedElvi Logo" 
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/products" className="text-white/90 hover:text-white font-medium transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-white/90 hover:text-white font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link 
            to="/contact" 
            className="bg-white hover:bg-slate-100 text-emerald-600 px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wide transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
