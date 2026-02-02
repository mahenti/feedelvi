export function FinlandSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Quality Focus */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-full mb-6">
              🇫🇮 Finnish Quality Since 1987
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              Born in Finland.
              <span className="block text-emerald-600">Trusted Worldwide.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              In Finland, quality is a standard — not a promise. Every pellet is crafted with precision, tested for consistency, and produced with Finnish discipline.
            </p>
            <div className="space-y-3">
              {[
                { color: "bg-emerald-500", title: "Precision Crafted", desc: "Controlled moisture & uniform structure" },
                { color: "bg-amber-500", title: "Lab Tested", desc: "Every batch verified for quality" },
                { color: "bg-blue-600", title: "Export Ready", desc: "EU compliant, globally certified" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className={`w-3 h-12 ${item.color} rounded-full`} />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Globe Export Network */}
          <div className="relative">
            <svg viewBox="0 0 400 300" className="w-full">
              <circle cx="200" cy="150" r="80" fill="#1e40af" />
              <ellipse cx="200" cy="150" rx="80" ry="30" fill="none" stroke="#60a5fa" strokeWidth="1" />
              <ellipse cx="200" cy="150" rx="80" ry="55" fill="none" stroke="#60a5fa" strokeWidth="1" />
              <line x1="120" y1="150" x2="280" y2="150" stroke="#60a5fa" strokeWidth="1" />
              <line x1="200" y1="70" x2="200" y2="230" stroke="#60a5fa" strokeWidth="1" />
              <path d="M160,130 Q180,110 200,130 T240,140" fill="#10b981" />
              <path d="M140,170 Q170,160 190,180 T230,175" fill="#10b981" />
              <line x1="200" y1="70" x2="200" y2="20" stroke="#ef4444" strokeWidth="3" />
              <line x1="280" y1="150" x2="380" y2="150" stroke="#f59e0b" strokeWidth="3" />
              <line x1="260" y1="90" x2="320" y2="50" stroke="#8b5cf6" strokeWidth="3" />
              <line x1="140" y1="90" x2="80" y2="50" stroke="#06b6d4" strokeWidth="3" />
              <line x1="260" y1="210" x2="320" y2="250" stroke="#ec4899" strokeWidth="3" />
              <circle cx="200" cy="20" r="6" fill="#ef4444" />
              <circle cx="380" cy="150" r="6" fill="#f59e0b" />
              <circle cx="320" cy="50" r="6" fill="#8b5cf6" />
              <circle cx="80" cy="50" r="6" fill="#06b6d4" />
              <circle cx="320" cy="250" r="6" fill="#ec4899" />
              <text x="200" y="12" textAnchor="middle" fontSize="10" fill="#374151">Nordic</text>
              <text x="385" y="154" textAnchor="start" fontSize="10" fill="#374151">Asia</text>
              <text x="325" y="40" textAnchor="start" fontSize="10" fill="#374151">Europe</text>
              <text x="75" y="40" textAnchor="end" fontSize="10" fill="#374151">Americas</text>
              <text x="325" y="265" textAnchor="start" fontSize="10" fill="#374151">Africa</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
