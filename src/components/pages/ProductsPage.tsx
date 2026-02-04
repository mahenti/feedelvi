import { useState } from "react";
import { ProductCard, type Product } from "@/components/ProductCard";
import { Wheat, Filter } from "lucide-react";

const products: Product[] = [
  // BOVINE RANGE
  { id: 1, name: "Bovine Core Nutrition", description: "A balanced daily nutrition solution designed to support overall health, digestion, and steady growth in cattle.", benefits: ["Supports rumen health", "Improves feed conversion efficiency", "Suitable for beef and dairy cattle"], category: "bovine", form: "Pelleted Feed", animalType: "cow", productImage: "/c1.JPG", specs: { pelletSize: "8mm", protein: "16-18%", energy: "12.5 MJ/kg", fiber: "18-22%", origin: "Finland" } },
  { id: 2, name: "Bovine Dairy Performance Formula", description: "High-performance nutrition formulated to enhance milk yield, quality, and animal vitality during lactation.", benefits: ["Optimized protein & energy balance", "Supports milk production", "Enhances animal stamina"], category: "bovine", form: "Pellets", animalType: "cow", productImage: "/c3.jpeg", specs: { pelletSize: "8mm", protein: "18-20%", energy: "13.2 MJ/kg", fiber: "15-18%", origin: "Finland" } },
  // OVINE-CAPRINE RANGE
  { id: 3, name: "Ovine–Caprine Daily Nutrition", description: "Complete daily feed developed for sheep and goats to maintain body condition and long-term productivity.", benefits: ["Promotes healthy weight gain", "Supports wool and coat quality", "Easy digestibility"], category: "ovine-caprine", form: "Pellets", animalType: "sheep", productImage: "/s1.JPG", specs: { pelletSize: "6mm", protein: "15-17%", energy: "11.8 MJ/kg", fiber: "20-25%", origin: "Finland" } },
  // PORCINE RANGE
  { id: 4, name: "Porcine Growth Formula", description: "Scientifically formulated feed supporting efficient growth and improved feed utilization in pigs.", benefits: ["Accelerates growth cycles", "Reduces feed wastage", "Consistent pellet quality"], category: "porcine", form: "Pelleted Feed", animalType: "pig", productImage: "/p1.JPG", specs: { pelletSize: "4mm", protein: "17-19%", energy: "13.5 MJ/kg", fiber: "6-8%", origin: "Finland" } },
  // LAGOMORPH RANGE
  { id: 5, name: "Lagomorph Complete Nutrition", description: "Specialized complete feed for rabbits, ensuring balanced nutrition and digestive health.", benefits: ["High fiber formulation", "Supports gut health", "Ideal for commercial & small-scale farms"], category: "lagomorph", form: "Pellets", animalType: "rabbit", productImage: "/r1.JPG", specs: { pelletSize: "4mm", protein: "16-18%", energy: "10.5 MJ/kg", fiber: "20-24%", origin: "Finland" } },
  // POULTRY RANGE
  { id: 6, name: "Broiler Starter Formula", description: "Highly digestible starter feed designed to support early-stage growth and strong immunity in broilers.", benefits: ["Rapid early weight gain", "Strong skeletal development", "Uniform flock growth"], category: "poultry", form: "Crumble", animalType: "chicken", productImage: "/ch1.jpg", specs: { pelletSize: "2-3mm", protein: "22-24%", energy: "12.8 MJ/kg", fiber: "3-5%", origin: "Finland" } },
  { id: 7, name: "Broiler Grower Formula", description: "Energy-efficient nutrition supporting optimal growth rates during the mid-growth phase.", benefits: ["Improved feed conversion ratio", "Balanced amino acid profile", "Consistent pellet size"], category: "poultry", form: "Pellets", animalType: "chicken", productImage: "/ch2.jpg", specs: { pelletSize: "3-4mm", protein: "20-22%", energy: "13.0 MJ/kg", fiber: "4-6%", origin: "Finland" } },
  { id: 8, name: "Broiler Finisher Formula", description: "Performance-focused feed formulated to maximize final weight gain and meat quality.", benefits: ["Supports muscle development", "Optimizes finishing weight", "Enhances carcass quality"], category: "poultry", form: "Pellets", animalType: "chicken", productImage: "/ch3.jpg", specs: { pelletSize: "4mm", protein: "18-20%", energy: "13.2 MJ/kg", fiber: "4-6%", origin: "Finland" } },
  { id: 9, name: "Layer Egg-Strength Nutrition", description: "Specialized nutrition supporting consistent egg production and strong shell quality.", benefits: ["Enhanced calcium absorption", "Sustained laying performance", "Improves shell strength"], category: "poultry", form: "Pellets", animalType: "chicken", productImage: "/ch4.JPG", specs: { pelletSize: "4mm", protein: "17-19%", energy: "11.5 MJ/kg", fiber: "5-7%", origin: "Finland" } },
  { id: 10, name: "Waterfowl Growth Nutrition", description: "Balanced feed developed specifically for ducks and geese to support healthy growth and vitality.", benefits: ["Supports strong skeletal growth", "Adapted for waterfowl digestion", "Consistent daily nutrition"], category: "poultry", form: "Pellets", animalType: "duck", productImage: "/d1.JPG", specs: { pelletSize: "4-5mm", protein: "18-20%", energy: "12.2 MJ/kg", fiber: "6-8%", origin: "Finland" } },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "bovine", label: "Cattle" },
  { id: "ovine-caprine", label: "Sheep & Goats" },
  { id: "porcine", label: "Pigs" },
  { id: "lagomorph", label: "Rabbits" },
  { id: "poultry", label: "Poultry" },
];

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f5f0e4]" style={{ fontFamily: 'Onest, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-[#205a40] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6">
              <Wheat className="w-4 h-4" />
              OUR PRODUCTS
            </span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Animal Nutrition
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Premium Finnish feed formulations for every species. 
              Scientifically crafted for optimal health and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-[#e7dbbf]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-[#205a40] flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[#205a40] text-white"
                    : "bg-[#e7dbbf] text-[#133425] hover:bg-[#205a40] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-[#5a6b5a]">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Promise */}
      <section className="bg-[#133425] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            The Finnish Quality Promise
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Every product is manufactured in Finland under strict EU regulations, 
            ensuring the highest standards of quality, safety, and nutritional excellence.
          </p>
        </div>
      </section>
    </div>
  );
}
