import { MapPin, Package, Globe, Shield, CheckCircle } from "lucide-react";

export function FinlandSection() {
  const journeySteps = [
    { icon: MapPin, label: "Finnish Fields", desc: "Origin" },
    { icon: Package, label: "Crafted with Care", desc: "Production" },
    { icon: Shield, label: "Quality Controlled", desc: "Testing" },
    { icon: Globe, label: "Global Delivery", desc: "Export" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-24 overflow-hidden">
      {/* Subtle Finland-inspired pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)`
      }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
            <span className="text-lg">🇫🇮</span>
            <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">Finnish Heritage</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-4">
            Born in Finland.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Trusted Beyond Borders.
            </span>
          </h2>
        </div>

        {/* Power Statement */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xl md:text-2xl text-blue-100/90 font-light leading-relaxed">
            In the heart of Finland, where <span className="text-white font-semibold">quality is a standard</span> — not a promise — 
            we produce animal feed pellets built on precision, responsibility, and decades of hands-on experience.
          </p>
          <p className="mt-4 text-blue-200/70">
            Feed Elvi Inkeri stands for consistency you can rely on, shipment after shipment.
          </p>
        </div>

        {/* Supply Chain Journey */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {journeySteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl shadow-blue-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-slate-900 font-bold text-xs">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{step.label}</h3>
                  <p className="text-blue-300/70 text-sm uppercase tracking-wider">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Serve */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Crafted with Care", desc: "Controlled moisture, uniform pellet structure, and stable quality" },
            { title: "Prepared for the World", desc: "Export-ready packaging, EU compliance, and clear documentation" },
            { title: "Delivered with Integrity", desc: "Direct communication, owner-managed decisions, dependable logistics" },
          ].map((item, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-blue-200/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Impact */}
        <div className="text-center">
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-400/30">
            <p className="text-lg md:text-xl text-white font-medium">
              From Finnish fields to global farms — <span className="text-cyan-300">feed you can trust</span>, from people who stand behind it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
