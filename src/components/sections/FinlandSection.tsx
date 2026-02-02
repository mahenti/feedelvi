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
              <svg viewBox="0 0 400 300" className="w-full">
                <circle cx="200" cy="150" r="100" fill="#1e3a5f"/>
                <ellipse cx="200" cy="150" rx="100" ry="35" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
                <ellipse cx="200" cy="150" rx="100" ry="70" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
                <line x1="100" y1="150" x2="300" y2="150" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
                <line x1="200" y1="50" x2="200" y2="250" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
                <path d="M160,120 Q180,100 200,120 T240,130" fill="#22c55e" opacity="0.7"/>
                <path d="M140,170 Q170,160 190,180 T230,175" fill="#22c55e" opacity="0.7"/>
                <path d="M180,100 Q200,90 210,120 T200,180" fill="#22c55e" opacity="0.7"/>
                <circle cx="200" cy="150" r="6" fill="#ef4444"/>
                <line x1="200" y1="144" x2="200" y2="40" stroke="#ef4444" strokeWidth="2"/>
                <line x1="206" y1="150" x2="360" y2="150" stroke="#f59e0b" strokeWidth="2"/>
                <line x1="270" y1="80" x2="350" y2="50" stroke="#8b5cf6" strokeWidth="2"/>
                <line x1="130" y1="80" x2="50" y2="50" stroke="#06b6d4" strokeWidth="2"/>
                <line x1="270" y1="220" x2="350" y2="250" stroke="#ec4899" strokeWidth="2"/>
                <circle cx="200" cy="40" r="5" fill="#ef4444"/>
                <circle cx="360" cy="150" r="5" fill="#f59e0b"/>
                <circle cx="350" cy="50" r="5" fill="#8b5cf6"/>
                <circle cx="50" cy="50" r="5" fill="#06b6d4"/>
                <circle cx="350" cy="250" r="5" fill="#ec4899"/>
                <text x="200" y="30" textAnchor="middle" fontSize="10" fill="white">Nordic</text>
                <text x="370" y="154" textAnchor="start" fontSize="10" fill="white">Asia</text>
                <text x="360" y="40" textAnchor="start" fontSize="10" fill="white">Europe</text>
                <text x="40" y="40" textAnchor="end" fontSize="10" fill="white">Americas</text>
                <text x="360" y="265" textAnchor="start" fontSize="10" fill="white">Africa</text>
              </svg>
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
