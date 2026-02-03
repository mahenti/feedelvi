export function FinlandSection() {
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
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-4 shadow-md">🇫🇮 FINNISH ANIMAL NUTRITION</span>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Premium Feed.<span className="text-emerald-600">Global Reach.</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">From our mills in Finland to farms across 5 continents — delivering consistent, high-performance nutrition for cattle, poultry, swine, and more.</p>
        </div>

        {/* Animal Categories Image */}
        <div className="flex justify-center mb-12">
          <img 
            src="/2nd.png" 
            alt="Animal Categories" 
            className="max-h-64 w-auto object-contain rounded-3xl shadow-2xl"
          />
        </div>

        {/* Stats & Certification Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {/* Stats Grid */}
          <div className="flex gap-4">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl px-8 py-6 text-center shadow-lg border border-emerald-400/30">
              <div className="text-4xl font-black text-white">20+</div>
              <div className="text-sm font-medium text-emerald-100">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl px-8 py-6 text-center shadow-lg border border-blue-400/30">
              <div className="text-4xl font-black text-white">350+</div>
              <div className="text-sm font-medium text-blue-100">Tons per year</div>
            </div>
          </div>
          
          {/* Elvi Certified Badge */}
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-slate-200">
            <span className="text-slate-600 font-medium">Certified by:</span>
            <a 
              href="https://elvimerkki.fi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
            >
              <img 
                src="/certview.png" 
                alt="Elvi Certified" 
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-8 text-center">
          <p className="text-2xl font-medium text-slate-900">From Finnish fields to global farms — <span className="text-emerald-600 font-bold">nutrition that performs.</span></p>
        </div>
      </div>
    </section>
  );
}
