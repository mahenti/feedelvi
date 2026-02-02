export function FinlandSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-4">🇫🇮 FINNISH ANIMAL NUTRITION</span>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4">Premium Feed.<span className="text-emerald-600">Global Reach.</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">From our mills in Finland to farms across 5 continents — delivering consistent, high-performance nutrition for cattle, poultry, swine, and more.</p>
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
            <div key={animal.label} className="bg-slate-50 rounded-2xl px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">{animal.emoji}</span>
              <span className="font-bold text-slate-700">{animal.label}</span>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-emerald-50 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-emerald-600">40+</div>
            <div className="text-sm font-semibold text-slate-900">Years Experience</div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-blue-600">50K+</div>
            <div className="text-sm font-semibold text-slate-900">Tons/Year</div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-amber-600">25+</div>
            <div className="text-sm font-semibold text-slate-900">Countries</div>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-purple-600">100%</div>
            <div className="text-sm font-semibold text-slate-900">EU Certified</div>
          </div>
        </div>

        {/* Export Network */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">Export Network</h3>
              <p className="text-slate-300 mb-6">From Helsinki to farms worldwide. Direct shipping to Europe, Asia, Americas, Africa, and the Nordic region.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-red-500"></div><span className="text-white">Nordic Region</span></div>
                <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-amber-500"></div><span className="text-white">Asia Pacific</span></div>
                <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-purple-500"></div><span className="text-white">Europe</span></div>
                <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-cyan-500"></div><span className="text-white">Americas</span></div>
                <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-pink-500"></div><span className="text-white">Africa</span></div>
              </div>
            </div>
            <div className="relative">
              <img src="/globe (1).jpg" alt="Global export network" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-medium text-slate-900">From Finnish fields to global farms — <span className="text-emerald-600 font-bold">nutrition that performs.</span></p>
        </div>
      </div>
    </section>
  );
}
