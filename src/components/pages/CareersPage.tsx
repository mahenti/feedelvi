import { Users, Briefcase, Heart, GraduationCap, MapPin, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and mental health support for you and your family."
  },
  {
    icon: GraduationCap,
    title: "Growth & Development",
    description: "Continuous learning opportunities, training programs, and career advancement pathways."
  },
  {
    icon: Briefcase,
    title: "Work-Life Balance",
    description: "Flexible working arrangements, generous vacation policy, and family-friendly workplace."
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description: "A diverse, inclusive environment where every voice is valued and respected."
  }
];

const openPositions = [
  {
    title: "Production Supervisor",
    department: "Operations",
    location: "Helsinki, Finland",
    type: "Full-time"
  },
  {
    title: "Quality Control Specialist",
    department: "Quality Assurance",
    location: "Helsinki, Finland",
    type: "Full-time"
  },
  {
    title: "Sales Manager - Export",
    department: "Sales",
    location: "Helsinki, Finland",
    type: "Full-time"
  },
  {
    title: "R&D Nutritionist",
    department: "Research & Development",
    location: "Helsinki, Finland",
    type: "Full-time"
  },
  {
    title: "Logistics Coordinator",
    department: "Supply Chain",
    location: "Helsinki, Finland",
    type: "Full-time"
  }
];

const values = [
  {
    title: "Excellence",
    description: "We strive for the highest standards in everything we do."
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and continuous improvement."
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and respect."
  },
  {
    title: "Sustainability",
    description: "We are committed to environmental responsibility."
  }
];

export function CareersPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Users className="w-4 h-4" />
              CAREERS
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Join Our<br />Team
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Be part of a company that's feeding the world sustainably. Your career in animal nutrition starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              Why Work at FeedElvi?
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              We offer more than just a job. Join a team where your work makes a real difference in global food production.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#205a40] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#133425] mb-3">{benefit.title}</h3>
                <p className="text-[#5a6b5a] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#133425] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Our Values
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-[#205a40] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#e7dbbf] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#133425] font-black text-xl">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#133425] mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              Ready to make an impact? Explore our current opportunities.
            </p>
          </div>
          
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#133425] mb-2 group-hover:text-[#2d805b] transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#5a6b5a]">
                      <span className="bg-[#205a40]/10 text-[#205a40] px-3 py-1 rounded-full font-medium">
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="bg-[#e7dbbf] text-[#133425] px-3 py-1 rounded-full font-medium">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#205a40] font-bold group-hover:gap-4 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="bg-[#205a40] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Don't See the Right Fit?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for talented individuals who share our passion for quality and sustainability. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a 
            href="mailto:careers@feedelvi.fi"
            className="inline-block bg-white text-[#205a40] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e7dbbf] transition-colors"
          >
            Send Open Application
          </a>
        </div>
      </section>
    </div>
  );
}
