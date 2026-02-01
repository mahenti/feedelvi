import { ProductCard, type Product } from "@/components/ProductCard";
import { Beef, Sheep, Pig, Rabbit, Bird, Wheat } from "lucide-react";

const products: Product[] = [
  // BOVINE RANGE
  {
    id: 1,
    name: "Bovine Core Nutrition",
    description: "A balanced daily nutrition solution designed to support overall health, digestion, and steady growth in cattle.",
    benefits: ["Supports rumen health", "Improves feed conversion efficiency", "Suitable for beef and dairy cattle"],
    category: "bovine",
    form: "Pelleted Feed",
  },
  {
    id: 2,
    name: "Bovine Dairy Performance Formula",
    description: "High-performance nutrition formulated to enhance milk yield, quality, and animal vitality during lactation.",
    benefits: ["Optimized protein & energy balance", "Supports milk production", "Enhances animal stamina"],
    category: "bovine",
    form: "Pellets",
  },
  // OVINE-CAPRINE RANGE
  {
    id: 3,
    name: "Ovine–Caprine Daily Nutrition",
    description: "Complete daily feed developed for sheep and goats to maintain body condition and long-term productivity.",
    benefits: ["Promotes healthy weight gain", "Supports wool and coat quality", "Easy digestibility"],
    category: "ovine-caprine",
    form: "Pellets",
  },
  // PORCINE RANGE
  {
    id: 4,
    name: "Porcine Growth Formula",
    description: "Scientifically formulated feed supporting efficient growth and improved feed utilization in pigs.",
    benefits: ["Accelerates growth cycles", "Reduces feed wastage", "Consistent pellet quality"],
    category: "porcine",
    form: "Pelleted Feed",
  },
  // LAGOMORPH RANGE
  {
    id: 5,
    name: "Lagomorph Complete Nutrition",
    description: "Specialized complete feed for rabbits, ensuring balanced nutrition and digestive health.",
    benefits: ["High fiber formulation", "Supports gut health", "Ideal for commercial & small-scale farms"],
    category: "lagomorph",
    form: "Pellets",
  },
  // POULTRY RANGE
  {
    id: 6,
    name: "Broiler Starter Formula",
    description: "Highly digestible starter feed designed to support early-stage growth and strong immunity in broilers.",
    benefits: ["Rapid early weight gain", "Strong skeletal development", "Uniform flock growth"],
    category: "poultry",
    form: "Crumble",
  },
  {
    id: 7,
    name: "Broiler Grower Formula",
    description: "Energy-efficient nutrition supporting optimal growth rates during the mid-growth phase.",
    benefits: ["Improved feed conversion ratio", "Balanced amino acid profile", "Consistent pellet size"],
    category: "poultry",
    form: "Pellets",
  },
  {
    id: 8,
    name: "Broiler Finisher Formula",
    description: "Performance-focused feed formulated to maximize final weight gain and meat quality.",
    benefits: ["Supports muscle development", "Optimizes finishing weight", "Enhances carcass quality"],
    category: "poultry",
    form: "Pellets",
  },
  {
    id: 9,
    name: "Layer Egg-Strength Nutrition",
    description: "Specialized nutrition supporting consistent egg production and strong shell quality.",
    benefits: ["Enhanced calcium absorption", "Sustained laying performance", "Improves shell strength"],
    category: "poultry",
    form: "Pellets",
  },
  {
    id: 10,
    name: "Waterfowl Growth Nutrition",
    description: "Balanced feed developed specifically for ducks and geese to support healthy growth and vitality.",
    benefits: ["Supports strong skeletal growth", "Adapted for waterfowl digestion", "Consistent daily nutrition"],
    category: "poultry",
    form: "Pellets",
  },
];

export function ProductsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[hsl(43,30%,97%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(142,30%,94%)] text-[hsl(142,45%,30%)] text-sm font-medium mb-6">
            <Wheat className="w-4 h-4" />
            <span>Premium Feed Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[hsl(142,30%,12%)] mb-6">
            Our Product Range
          </h2>
          <p className="text-lg text-[hsl(142,15%,40%)] leading-relaxed">
            Scientifically formulated nutrition for every stage of animal growth and production. 
            Trusted by farmers for quality, consistency, and results.
          </p>
        </div>

        {/* Bovine Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[hsl(142,30%,94%)] flex items-center justify-center">
              <Beef className="w-6 h-6 text-[hsl(142,45%,35%)]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[hsl(142,30%,15%)]">Bovine Range</h3>
              <p className="text-sm text-[hsl(142,15%,40%)]">Cattle nutrition solutions</p>
            </div>
            <div className="flex-1 h-px bg-[hsl(35,20%,85%)] ml-6" />
          </div>
          <div className="space-y-4">
            {products.filter(p => p.category === "bovine").map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Ovine-Caprine & Porcine */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[hsl(35,30%,94%)] flex items-center justify-center">
                <Sheep className="w-6 h-6 text-[hsl(35,50%,45%)]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(142,30%,15%)]">Ovine–Caprine</h3>
                <p className="text-sm text-[hsl(142,15%,40%)]">Sheep & Goat nutrition</p>
              </div>
            </div>
            <div className="space-y-4">
              {products.filter(p => p.category === "ovine-caprine").map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[hsl(25,30%,94%)] flex items-center justify-center">
                <Pig className="w-6 h-6 text-[hsl(25,45%,45%)]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(142,30%,15%)]">Porcine</h3>
                <p className="text-sm text-[hsl(142,15%,40%)]">Pig nutrition solutions</p>
              </div>
            </div>
            <div className="space-y-4">
              {products.filter(p => p.category === "porcine").map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Lagomorph */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[hsl(280,25%,95%)] flex items-center justify-center">
              <Rabbit className="w-6 h-6 text-[hsl(280,40%,50%)]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[hsl(142,30%,15%)]">Lagomorph</h3>
              <p className="text-sm text-[hsl(142,15%,40%)]">Rabbit nutrition</p>
            </div>
            <div className="flex-1 h-px bg-[hsl(35,20%,85%)] ml-6" />
          </div>
          <div className="max-w-3xl">
            {products.filter(p => p.category === "lagomorph").map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Poultry Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[hsl(45,40%,94%)] flex items-center justify-center">
              <Bird className="w-6 h-6 text-[hsl(45,80%,45%)]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[hsl(142,30%,15%)]">Poultry Range</h3>
              <p className="text-sm text-[hsl(142,15%,40%)]">Complete poultry nutrition</p>
            </div>
            <div className="flex-1 h-px bg-[hsl(35,20%,85%)] ml-6" />
          </div>
          <div className="space-y-4">
            {products.filter(p => p.category === "poultry").map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
