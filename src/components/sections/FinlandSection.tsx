export function FinlandSection() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/globe (1).jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-300 text-sm font-bold rounded-full mb-4 border border-emerald-500/30">🇫🇮 FINNISH ANIMAL NUTRITION</span>
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4">Premium Feed.<span className="text-emerald-400">Global Reach.</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">From our mills in Finland to farms across 5 continents — delivering consistent, high-performance nutrition for cattle, poultry, swine, and more.</p>
        </div>

        {/* Animal Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { emoji: "🐄", label: "Cattle" },
            { emoji: "🐔", label: "Poultry" },
            { emoji: "🐖", label: "Swine" },
            { emoji: "🐑", label: "Sheep" },
            { emoji: "🐇", label: "Rabbits" },
          ].map((animal) => (
            <div key={animal.label} className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3 border border-white/20">
              <span className="text-2xl">{animal.emoji}</span>
              <span className="font-bold text-white">{animal.label}</span>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-emerald-500/30">
            <div className="text-4xl font-black text-emerald-300">40+</div>
            <div className="text-sm font-semibold text-white">Years Experience</div>
          </div>
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-500/30">
            <div className="text-4xl font-black text-blue-300">50K+</div>
            <div className="text-sm font-semibold text-white">Tons/Year</div>
          </div>
          <div className="bg-amber-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-500/30">
            <div className="text-4xl font-black text-amber-300">25+</div>
            <div className="text-sm font-semibold text-white">Countries</div>
          </div>
          <div className="bg-purple-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-500/30">
            <div className="text-4xl font-black text-purple-300">100%</div>
            <div className="text-sm font-semibold text-white">EU Certified</div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center">
          <p className="text-2xl font-medium text-white">From Finnish fields to global farms — <span className="text-emerald-400 font-bold">nutrition that performs.</span></p>
        </div>
      </div>
    </section>
  );
}
