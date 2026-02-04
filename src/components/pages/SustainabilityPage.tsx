import { Leaf, Recycle, Droplets, Sun, TreePine, Globe } from "lucide-react";

const sustainabilityPillars = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "We prioritize locally sourced raw materials from certified Finnish farms, reducing transportation emissions and supporting local agriculture.",
    color: "#2d805b"
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "Our production processes minimize waste through efficient resource utilization and byproduct recycling programs.",
    color: "#205a40"
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Advanced water management systems reduce consumption and ensure responsible wastewater treatment.",
    color: "#133425"
  },
  {
    icon: Sun,
    title: "Energy Efficiency",
    description: "Investment in energy-efficient equipment and renewable energy sources to reduce our carbon footprint.",
    color: "#D4A84B"
  }
];

const commitments = [
  "30% reduction in carbon emissions by 2030",
  "100% recyclable packaging by 2027",
  "Zero waste to landfill initiative",
  "Sustainable supply chain certification",
  "Biodiversity protection programs",
  "Employee sustainability training"
];

const stats = [
  { value: "40%", label: "Local sourcing", description: "Finnish raw materials" },
  { value: "25%", label: "Energy savings", description: "vs. industry average" },
  { value: "95%", label: "Waste recycled", description: "Production byproducts" },
  { value: "100%", label: "Renewable electricity", description: "Since 2022" }
];

export function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              SUSTAINABILITY
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Feeding the Future<br />Responsibly
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Committed to sustainable production practices that protect our planet while nourishing animals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#133425]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-[#e7dbbf] mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              Our Sustainability Pillars
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              Environmental responsibility is integrated into every aspect of our operations, from sourcing to production to distribution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: pillar.color }}
                >
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#133425] mb-4">{pillar.title}</h3>
                <p className="text-[#5a6b5a] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-[#205a40] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Our 2030<br />Commitments
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                We've set ambitious targets to ensure our operations contribute positively to environmental sustainability and climate action.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <TreePine className="w-8 h-8 text-[#e7dbbf]" />
                  <div>
                    <div className="text-white font-bold">Carbon Neutral by 2040</div>
                    <div className="text-white/70 text-sm">Our long-term climate commitment</div>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-[#e7dbbf] h-2 rounded-full" style={{ width: '35%' }} />
                </div>
                <div className="text-white/60 text-sm mt-2">35% progress toward 2030 goals</div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#133425] mb-6">Key Objectives</h3>
              <ul className="space-y-4">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#2d805b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Leaf className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#5a6b5a] font-medium">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              Environmental Impact
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#133425] rounded-2xl p-8 text-center">
              <Globe className="w-12 h-12 text-[#e7dbbf] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Carbon Footprint</h3>
              <p className="text-white/70">Continuously monitoring and reducing CO2 emissions across our supply chain</p>
            </div>
            <div className="bg-[#205a40] rounded-2xl p-8 text-center">
              <Droplets className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Water Stewardship</h3>
              <p className="text-white/70">Responsible water use with advanced treatment and recycling systems</p>
            </div>
            <div className="bg-[#2d805b] rounded-2xl p-8 text-center">
              <Recycle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Waste Reduction</h3>
              <p className="text-white/70">Comprehensive recycling programs and waste minimization strategies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
