import { ProductCard, type Product } from "@/components/ProductCard";
import { Wheat } from "lucide-react";

const products: Product[] = [
  // BOVINE RANGE
  { id: 1, name: "Bovine Core Nutrition", description: "A balanced daily nutrition solution designed to support overall health, digestion, and steady growth in cattle.", benefits: ["Supports rumen health", "Improves feed conversion efficiency", "Suitable for beef and dairy cattle"], category: "bovine", form: "Pelleted Feed", animalType: "cow", productImage: "/c1.JPG" },
  { id: 2, name: "Bovine Dairy Performance Formula", description: "High-performance nutrition formulated to enhance milk yield, quality, and animal vitality during lactation.", benefits: ["Optimized protein & energy balance", "Supports milk production", "Enhances animal stamina"], category: "bovine", form: "Pellets", animalType: "cow", productImage: "/c3.jpeg" },
  // OVINE-CAPRINE RANGE
  { id: 3, name: "Ovine–Caprine Daily Nutrition", description: "Complete daily feed developed for sheep and goats to maintain body condition and long-term productivity.", benefits: ["Promotes healthy weight gain", "Supports wool and coat quality", "Easy digestibility"], category: "ovine-caprine", form: "Pellets", animalType: "sheep", productImage: "/s1.JPG" },
  // PORCINE RANGE
  { id: 4, name: "Porcine Growth Formula", description: "Scientifically formulated feed supporting efficient growth and improved feed utilization in pigs.", benefits: ["Accelerates growth cycles", "Reduces feed wastage", "Consistent pellet quality"], category: "porcine", form: "Pelleted Feed", animalType: "pig", productImage: "/p1.JPG" },
  // LAGOMORPH RANGE
  { id: 5, name: "Lagomorph Complete Nutrition", description: "Specialized complete feed for rabbits, ensuring balanced nutrition and digestive health.", benefits: ["High fiber formulation", "Supports gut health", "Ideal for commercial & small-scale farms"], category: "lagomorph", form: "Pellets", animalType: "rabbit", productImage: "/r1.JPG" },
  // POULTRY RANGE
  { id: 6, name: "Broiler Starter Formula", description: "Highly digestible starter feed designed to support early-stage growth and strong immunity in broilers.", benefits: ["Rapid early weight gain", "Strong skeletal development", "Uniform flock growth"], category: "poultry", form: "Crumble", animalType: "chicken", productImage: "/ch1.jpg" },
  { id: 7, name: "Broiler Grower Formula", description: "Energy-efficient nutrition supporting optimal growth rates during the mid-growth phase.", benefits: ["Improved feed conversion ratio", "Balanced amino acid profile", "Consistent pellet size"], category: "poultry", form: "Pellets", animalType: "chicken", productImage: "/ch2.jpg" },
  { id: 8, name: "Broiler Finisher Formula", description: "Performance-focused feed formulated to maximize final weight gain and meat quality.", benefits: ["Supports muscle development", "Optimizes finishing weight", "Enhances carcass quality"], category: "poultry", form: "Pellets", animalType: "chicken", productImage: "/ch3.jpg" },
  { id: 9, name: "Layer Egg-Strength Nutrition", description: "Specialized nutrition supporting consistent egg production and strong shell quality.", benefits: ["Enhanced calcium absorption", "Sustained laying performance", "Improves shell strength"], category: "poultry", form: "Pellets", animalType: "chicken", productImage: "/ch4.JPG" },
  { id: 10, name: "Waterfowl Growth Nutrition", description: "Balanced feed developed specifically for ducks and geese to support healthy growth and vitality.", benefits: ["Supports strong skeletal growth", "Adapted for waterfowl digestion", "Consistent daily nutrition"], category: "poultry", form: "Pellets", animalType: "duck", productImage: "/d1.JPG" },
];

const sectionBackgrounds: Record<string, string> = {
  bovine: "/cowsection.jpg",
  "ovine-caprine": "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=1920&h=600&fit=crop",
  porcine: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920&h=600&fit=crop",
  lagomorph: "/rabbitsection.JPG",
  poultry: "/chickensection.JPG",
};

const sections = [
  { id: "bovine", title: "Cattle", subtitle: "Bovine Range", color: "#5B8C5A", textColor: "text-[#2D4A2D]", products: products.filter(p => p.category === "bovine") },
  { id: "ovine-caprine", title: "Sheep & Goats", subtitle: "Ovine–Caprine Range", color: "#B8956C", textColor: "text-[#5C4A2A]", products: products.filter(p => p.category === "ovine-caprine") },
  { id: "porcine", title: "Pigs", subtitle: "Porcine Range", color: "#C98B8B", textColor: "text-[#5C2A2A]", products: products.filter(p => p.category === "porcine") },
  { id: "lagomorph", title: "Rabbits", subtitle: "Lagomorph Range", color: "#9B7CB6", textColor: "text-[#3D2A4A]", products: products.filter(p => p.category === "lagomorph") },
  { id: "poultry", title: "Poultry", subtitle: "Poultry Range", color: "#D4A84B", textColor: "text-[#5C4A1A]", products: products.filter(p => p.category === "poultry") },
];

export function ProductsSection() {
  return (
    <section className="bg-[#FAFBF8]">
      {/* Main Header */}
      <div className="py-16 lg:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5B8C5A]/10 text-[#5B8C5A] text-sm font-medium mb-6">
            <Wheat className="w-4 h-4" />
            <span>Our Feed Collection</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D3A2D] mb-6">
            Nutrition by Animal
          </h2>
          <p className="text-lg text-[#5A6B5A] leading-relaxed max-w-2xl mx-auto">
            Specialized formulas crafted for each species. Scroll to explore our complete range.
          </p>
        </div>
      </div>

      {/* Animal Sections - Full Width with Backgrounds */}
      <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01]"
            style={{ 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Background Image - Cover (maintains aspect ratio) */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${sectionBackgrounds[section.id]})`,
              }}
            >
              {/* Dark Overlay Only - No Blur */}
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 py-12 lg:px-12 lg:py-16">
              {/* Section Header - BOLD, FAT, UPPERCASE */}
              <div className="text-center mb-10">
                <h3 
                  className="text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-wider text-white mb-3"
                  style={{ 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {section.title}
                </h3>
                <p className="text-white/80 uppercase tracking-[0.2em] text-sm font-semibold">{section.subtitle}</p>
                <div 
                  className="w-32 h-1.5 rounded-full mt-5 mx-auto"
                  style={{ backgroundColor: section.color }}
                />
              </div>

              {/* Products */}
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-5">
                  {section.products.map((product, index) => (
                    <div key={product.id} className="w-full sm:w-[300px] lg:w-[260px]">
                      <ProductCard product={product} index={index} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="py-16 text-center bg-[#F0F4F0]">
        <p className="text-sm text-[#8A9A8A]">
          All products formulated with premium ingredients for optimal animal health
        </p>
      </div>
    </section>
  );
}
