import { ProductCard, type Product } from "@/components/ProductCard";
import { Wheat, Beef, CircleDot, Circle, Rabbit, Bird } from "lucide-react";

const products: Product[] = [
  // BOVINE RANGE
  { id: 1, name: "Bovine Core Nutrition", description: "A balanced daily nutrition solution designed to support overall health, digestion, and steady growth in cattle.", benefits: ["Supports rumen health", "Improves feed conversion efficiency", "Suitable for beef and dairy cattle"], category: "bovine", form: "Pelleted Feed", animalType: "cow" },
  { id: 2, name: "Bovine Dairy Performance Formula", description: "High-performance nutrition formulated to enhance milk yield, quality, and animal vitality during lactation.", benefits: ["Optimized protein & energy balance", "Supports milk production", "Enhances animal stamina"], category: "bovine", form: "Pellets", animalType: "cow" },
  // OVINE-CAPRINE RANGE
  { id: 3, name: "Ovine–Caprine Daily Nutrition", description: "Complete daily feed developed for sheep and goats to maintain body condition and long-term productivity.", benefits: ["Promotes healthy weight gain", "Supports wool and coat quality", "Easy digestibility"], category: "ovine-caprine", form: "Pellets", animalType: "sheep" },
  // PORCINE RANGE
  { id: 4, name: "Porcine Growth Formula", description: "Scientifically formulated feed supporting efficient growth and improved feed utilization in pigs.", benefits: ["Accelerates growth cycles", "Reduces feed wastage", "Consistent pellet quality"], category: "porcine", form: "Pelleted Feed", animalType: "pig" },
  // LAGOMORPH RANGE
  { id: 5, name: "Lagomorph Complete Nutrition", description: "Specialized complete feed for rabbits, ensuring balanced nutrition and digestive health.", benefits: ["High fiber formulation", "Supports gut health", "Ideal for commercial & small-scale farms"], category: "lagomorph", form: "Pellets", animalType: "rabbit" },
  // POULTRY RANGE
  { id: 6, name: "Broiler Starter Formula", description: "Highly digestible starter feed designed to support early-stage growth and strong immunity in broilers.", benefits: ["Rapid early weight gain", "Strong skeletal development", "Uniform flock growth"], category: "poultry", form: "Crumble", animalType: "chicken" },
  { id: 7, name: "Broiler Grower Formula", description: "Energy-efficient nutrition supporting optimal growth rates during the mid-growth phase.", benefits: ["Improved feed conversion ratio", "Balanced amino acid profile", "Consistent pellet size"], category: "poultry", form: "Pellets", animalType: "chicken" },
  { id: 8, name: "Broiler Finisher Formula", description: "Performance-focused feed formulated to maximize final weight gain and meat quality.", benefits: ["Supports muscle development", "Optimizes finishing weight", "Enhances carcass quality"], category: "poultry", form: "Pellets", animalType: "chicken" },
  { id: 9, name: "Layer Egg-Strength Nutrition", description: "Specialized nutrition supporting consistent egg production and strong shell quality.", benefits: ["Enhanced calcium absorption", "Sustained laying performance", "Improves shell strength"], category: "poultry", form: "Pellets", animalType: "chicken" },
  { id: 10, name: "Waterfowl Growth Nutrition", description: "Balanced feed developed specifically for ducks and geese to support healthy growth and vitality.", benefits: ["Supports strong skeletal growth", "Adapted for waterfowl digestion", "Consistent daily nutrition"], category: "poultry", form: "Pellets", animalType: "duck" },
];

const sections = [
  { id: "bovine", title: "Cattle", subtitle: "Bovine Range", icon: Beef, color: "#5B8C5A", products: products.filter(p => p.category === "bovine") },
  { id: "sheep", title: "Sheep & Goats", subtitle: "Ovine–Caprine Range", icon: CircleDot, color: "#B8956C", products: products.filter(p => p.category === "ovine-caprine") },
  { id: "pig", title: "Pigs", subtitle: "Porcine Range", icon: Circle, color: "#C98B8B", products: products.filter(p => p.category === "porcine") },
  { id: "rabbit", title: "Rabbits", subtitle: "Lagomorph Range", icon: Rabbit, color: "#9B7CB6", products: products.filter(p => p.category === "lagomorph") },
  { id: "poultry", title: "Poultry", subtitle: "Poultry Range", icon: Bird, color: "#D4A84B", products: products.filter(p => p.category === "poultry") },
];

export function ProductsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FAFBF8] to-[#F0F4F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5B8C5A]/10 text-[#5B8C5A] text-sm font-medium mb-6">
            <Wheat className="w-4 h-4" />
            <span>Our Feed Collection</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D3A2D] mb-6">
            Nutrition by Animal
          </h2>
          <p className="text-lg text-[#5A6B5A] leading-relaxed">
            Specialized formulas crafted for each species. Hover over any card to learn more.
          </p>
        </div>

        {/* Individual Animal Sections */}
        <div className="space-y-24">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} className="relative">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-12">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                    style={{ backgroundColor: section.color }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#2D3A2D] mb-1">{section.title}</h3>
                  <p className="text-sm text-[#8A9A8A] uppercase tracking-wider">{section.subtitle}</p>
                  <div 
                    className="w-24 h-1 rounded-full mt-4"
                    style={{ backgroundColor: section.color }}
                  />
                </div>

                {/* Products Grid - Centered */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl">
                    {section.products.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-24 text-center">
          <p className="text-sm text-[#8A9A8A]">
            All products formulated with premium ingredients for optimal animal health
          </p>
        </div>
      </div>
    </section>
  );
}
