import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
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
            <Link to="/products" className="text-white font-bold hover:text-emerald-200 transition-colors drop-shadow-lg">
              Products
            </Link>
            <Link to="/about" className="text-white font-bold hover:text-emerald-200 transition-colors drop-shadow-lg">
              About
            </Link>
            <Link to="/contact" className="text-white font-bold hover:text-emerald-200 transition-colors drop-shadow-lg">
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
