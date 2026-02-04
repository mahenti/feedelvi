import { Building2, Users, Award, Globe, CheckCircle } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              ABOUT US
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Elvi Inkeri
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              A licensed Finnish feed manufacturer committed to excellence in animal nutrition since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
                Finnish Quality,<br />
                <span className="text-[#2d805b]">Global Standards</span>
              </h2>
              <p className="text-lg text-[#5a6b5a] leading-relaxed mb-6">
                Elvi Inkeri is a registered Finnish company specializing in the production of high-quality 
                animal feed and nutrition products. With our state-of-the-art manufacturing facility in 
                Finland, we serve customers across Europe and beyond.
              </p>
              <p className="text-lg text-[#5a6b5a] leading-relaxed">
                Our commitment to quality is backed by official Finnish licensing and strict adherence to 
                EU regulations, ensuring that every product meets the highest standards of safety and nutrition.
              </p>
            </div>
            <div className="bg-[#133425] rounded-3xl p-8 lg:p-12">
              <img 
                src="/z23.jpg" 
                alt="Elvi Inkeri Facility" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <p className="text-white/80 text-center mt-4 text-sm">
                Official Finnish Business Registration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#133425] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, value: "20+", label: "Years Experience", color: "#2d805b" },
              { icon: Users, value: "25+", label: "Countries Served", color: "#e7dbbf" },
              { icon: Globe, value: "350K+", label: "Tons Produced", color: "#2d805b" },
              { icon: CheckCircle, value: "100%", label: "EU Certified", color: "#e7dbbf" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4" style={{ color: stat.color }} />
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "Every batch undergoes rigorous testing to ensure optimal nutritional value and safety."
              },
              {
                title: "Sustainability",
                description: "Committed to environmentally responsible production practices and sustainable sourcing."
              },
              {
                title: "Innovation",
                description: "Continuously researching and developing improved formulations for better animal health."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#205a40] mb-4">{value.title}</h3>
                <p className="text-[#5a6b5a]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
