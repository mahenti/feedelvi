import { Check } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  category: "bovine" | "ovine-caprine" | "porcine" | "lagomorph" | "poultry";
  form: "Pelleted Feed" | "Pellets" | "Crumble";
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const categoryColors: Record<Product["category"], { bg: string; border: string; icon: string }> = {
  bovine: {
    bg: "bg-gradient-to-r from-[hsl(142,30%,96%)] to-[hsl(142,20%,98%)]",
    border: "border-l-[hsl(142,45%,35%)]",
    icon: "text-[hsl(142,45%,35%)]",
  },
  "ovine-caprine": {
    bg: "bg-gradient-to-r from-[hsl(35,30%,96%)] to-[hsl(35,20%,98%)]",
    border: "border-l-[hsl(35,50%,45%)]",
    icon: "text-[hsl(35,50%,45%)]",
  },
  porcine: {
    bg: "bg-gradient-to-r from-[hsl(25,30%,96%)] to-[hsl(25,20%,98%)]",
    border: "border-l-[hsl(25,45%,45%)]",
    icon: "text-[hsl(25,45%,45%)]",
  },
  lagomorph: {
    bg: "bg-gradient-to-r from-[hsl(280,25%,96%)] to-[hsl(280,15%,98%)]",
    border: "border-l-[hsl(280,40%,50%)]",
    icon: "text-[hsl(280,40%,50%)]",
  },
  poultry: {
    bg: "bg-gradient-to-r from-[hsl(45,40%,96%)] to-[hsl(45,25%,98%)]",
    border: "border-l-[hsl(45,80%,45%)]",
    icon: "text-[hsl(45,80%,45%)]",
  },
};

export function ProductCard({ product, index }: ProductCardProps) {
  const colors = categoryColors[product.category];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border-l-4 ${colors.border} ${colors.bg} shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Left side - Product number and icon area */}
        <div className="lg:w-24 flex lg:flex-col items-center justify-center gap-3 p-6 lg:p-4 border-b lg:border-b-0 lg:border-r border-[hsl(35,20%,85%)] bg-white/50">
          <span className="text-3xl font-bold text-[hsl(142,30%,25%)]/20">
            {String(product.id).padStart(2, "0")}
          </span>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-[280px]">
              <h3 className="text-xl lg:text-2xl font-semibold text-[hsl(142,30%,15%)] mb-2 group-hover:text-[hsl(142,45%,24%)] transition-colors">
                {product.name}
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(142,30%,94%)] text-[hsl(142,45%,30%)]">
                {product.form}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[hsl(142,15%,40%)] leading-relaxed mb-6 max-w-3xl">
            {product.description}
          </p>

          {/* Key Benefits */}
          <div className="bg-white/70 rounded-xl p-5 backdrop-blur-sm">
            <h4 className="text-sm font-semibold text-[hsl(142,30%,25%)] uppercase tracking-wide mb-4">
              Key Benefits
            </h4>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[hsl(142,15%,35%)]"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[hsl(142,45%,24%)]/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[hsl(142,45%,35%)]" />
                  </span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
