import { CowFace, SheepFace, PigFace, RabbitFace, ChickenFace, DuckFace } from "./AnimalFaces";

export interface Product {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  category: "bovine" | "ovine-caprine" | "porcine" | "lagomorph" | "poultry";
  form: "Pelleted Feed" | "Pellets" | "Crumble";
  animalType?: "cow" | "sheep" | "pig" | "rabbit" | "chicken" | "duck";
  productImage?: string;
  specs?: {
    pelletSize?: string;
    protein?: string;
    energy?: string;
    fiber?: string;
    origin?: string;
  };
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const categoryThemes: Record<Product["category"], { 
  accent: string;
  border: string;
  badge: string;
  text: string;
  bg: string;
}> = {
  bovine: {
    accent: "text-emerald-600",
    border: "border-emerald-200",
    badge: "bg-emerald-600",
    text: "text-emerald-900",
    bg: "bg-emerald-50",
  },
  "ovine-caprine": {
    accent: "text-amber-600",
    border: "border-amber-200",
    badge: "bg-amber-600",
    text: "text-amber-900",
    bg: "bg-amber-50",
  },
  porcine: {
    accent: "text-rose-600",
    border: "border-rose-200",
    badge: "bg-rose-600",
    text: "text-rose-900",
    bg: "bg-rose-50",
  },
  lagomorph: {
    accent: "text-purple-600",
    border: "border-purple-200",
    badge: "bg-purple-600",
    text: "text-purple-900",
    bg: "bg-purple-50",
  },
  poultry: {
    accent: "text-yellow-600",
    border: "border-yellow-200",
    badge: "bg-yellow-600",
    text: "text-yellow-900",
    bg: "bg-yellow-50",
  },
};

const animalFaceMap: Record<string, React.FC> = {
  cow: CowFace,
  sheep: SheepFace,
  pig: PigFace,
  rabbit: RabbitFace,
  chicken: ChickenFace,
  duck: DuckFace,
};

const categoryAnimalMap: Record<Product["category"], string[]> = {
  bovine: ["cow"],
  "ovine-caprine": ["sheep"],
  porcine: ["pig"],
  lagomorph: ["rabbit"],
  poultry: ["chicken", "duck"],
};

function getAnimalFace(product: Product, index: number) {
  if (product.animalType) {
    const FaceComponent = animalFaceMap[product.animalType];
    return FaceComponent ? <FaceComponent /> : null;
  }
  const animals = categoryAnimalMap[product.category];
  const animal = animals[index % animals.length] || animals[0];
  const FaceComponent = animalFaceMap[animal];
  return FaceComponent ? <FaceComponent /> : null;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const theme = categoryThemes[product.category];
  const animalFace = getAnimalFace(product, index);

  return (
    <div className={`group relative ${theme.bg} rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}>
      {/* Premium Card Content */}
      <div className="p-0">
        {/* Product Image Area - Large */}
        <div className="relative h-48 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
          {/* Product Image or Placeholder */}
          {product.productImage ? (
            <img 
              src={product.productImage} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/80 shadow-lg flex items-center justify-center mb-2">
                <span className="text-4xl">📦</span>
              </div>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Product Image</span>
            </div>
          )}
          
          {/* Animal Face Badge - Top Right */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg p-0.5 border-2 border-white/50">
            <div className="w-full h-full rounded-full overflow-hidden">
              {animalFace}
            </div>
          </div>
          
          {/* Form Badge - Top Left */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-gray-900/90 text-white backdrop-blur-sm shadow-lg uppercase tracking-wider">
              {product.form}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5">
          {/* Title */}
          <h3 className={`text-lg font-bold ${theme.text} mb-2 leading-tight`}>
            {product.name}
          </h3>

          {/* Description */}
          <p className={`text-sm ${theme.text} opacity-70 mb-4 line-clamp-2`}>
            {product.description}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-2">
            {product.benefits.slice(0, 2).map((benefit, i) => (
              <span 
                key={i}
                className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold bg-white/60 ${theme.accent} shadow-sm`}
              >
                {benefit.length > 30 ? benefit.slice(0, 27) + "..." : benefit}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Overlay - Product Specs */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col p-0 shadow-2xl">
        {/* Specs Header */}
        <div className={`h-12 ${theme.badge} flex items-center justify-center`}>
          <span className="text-white font-bold text-sm uppercase tracking-wider">Product Specifications</span>
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          {/* Product Name */}
          <h4 className={`font-bold ${theme.text} mb-4 text-base text-center`}>{product.name}</h4>
          
          {/* Specs Grid */}
          {product.specs && (
            <div className="space-y-3 flex-1">
              {product.specs.pelletSize && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-xs text-gray-500 font-medium uppercase">Pellet Size</span>
                  <span className="text-sm font-semibold text-gray-800">{product.specs.pelletSize}</span>
                </div>
              )}
              {product.specs.protein && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-xs text-gray-500 font-medium uppercase">Protein</span>
                  <span className="text-sm font-semibold text-gray-800">{product.specs.protein}</span>
                </div>
              )}
              {product.specs.energy && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-xs text-gray-500 font-medium uppercase">Energy</span>
                  <span className="text-sm font-semibold text-gray-800">{product.specs.energy}</span>
                </div>
              )}
              {product.specs.fiber && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-xs text-gray-500 font-medium uppercase">Fiber</span>
                  <span className="text-sm font-semibold text-gray-800">{product.specs.fiber}</span>
                </div>
              )}
              {product.specs.origin && (
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs text-gray-500 font-medium uppercase">Origin</span>
                  <span className="text-sm font-semibold text-gray-800">{product.specs.origin}</span>
                </div>
              )}
            </div>
          )}
          
          {/* Quality Badge */}
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🇫🇮</span>
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Premium Finnish Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
