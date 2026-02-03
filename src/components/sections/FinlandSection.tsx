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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-4 drop-shadow-md">🇫🇮 FINNISH ANIMAL NUTRITION</span>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 drop-shadow-lg">Premium Feed.<span className="text-emerald-600">Global Reach.</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto drop-shadow-sm">From our mills in Finland to farms across 5 continents — delivering consistent, high-performance nutrition for cattle, poultry, swine, and more.</p>
        </div>

        {/* Animal Categories Image */}
        <div className="flex justify-center mb-16">
          <img 
            src="/2nd.png" 
            alt="Animal Categories" 
            className="w-full max-w-4xl h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Stats Grid - 2 items with solid colors */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          <div className="bg-emerald-600 rounded-2xl p-8 text-center shadow-xl drop-shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-5xl font-black text-white drop-shadow-lg">20+</div>
            <div className="text-lg font-semibold text-emerald-100">Years Experience</div>
          </div>
          <div className="bg-blue-600 rounded-2xl p-8 text-center shadow-xl drop-shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-5xl font-black text-white drop-shadow-lg">350+</div>
            <div className="text-lg font-semibold text-blue-100">Tons per year</div>
          </div>
        </div>

        {/* Elvi Certified Badge */}
        <div className="flex justify-center mb-16">
          <a 
            href="https://elvimerkki.fi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transform hover:scale-110 transition-transform drop-shadow-2xl"
          >
            <img 
              src="/certview.png" 
              alt="Elvi Certified" 
              className="h-32 w-auto object-contain"
            />
          </a>
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-medium text-slate-900 drop-shadow-md">From Finnish fields to global farms — <span className="text-emerald-600 font-bold">nutrition that performs.</span></p>
        </div>
      </div>
    </section>
  );
}
