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
}> = {
  bovine: {
    accent: "text-emerald-400",
    border: "border-emerald-400/30",
    badge: "bg-emerald-500",
    text: "text-white",
  },
  "ovine-caprine": {
    accent: "text-amber-400",
    border: "border-amber-400/30",
    badge: "bg-amber-500",
    text: "text-white",
  },
  porcine: {
    accent: "text-rose-400",
    border: "border-rose-400/30",
    badge: "bg-rose-500",
    text: "text-white",
  },
  lagomorph: {
    accent: "text-purple-400",
    border: "border-purple-400/30",
    badge: "bg-purple-500",
    text: "text-white",
  },
  poultry: {
    accent: "text-yellow-400",
    border: "border-yellow-400/30",
    badge: "bg-yellow-500",
    text: "text-white",
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
    <div className={`group relative rounded-2xl border ${theme.border} bg-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl`}>
      {/* Glass Card Content */}
      <div className="p-6">
        {/* Top Row - Animal Face & Form Badge */}
        <div className="flex items-start justify-between mb-4">
          {/* Animal Face */}
          <div className="w-14 h-14 rounded-full bg-white/20 p-0.5 shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden bg-white/90">
              {animalFace}
            </div>
          </div>
          
          {/* Form Badge */}
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-black/40 text-white backdrop-blur-sm border border-white/20`}>
            {product.form}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold text-white mb-2 leading-tight`}>
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/70 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Benefits as Pills */}
        <div className="flex flex-wrap gap-1.5">
          {product.benefits.slice(0, 3).map((benefit, i) => (
            <span 
              key={i}
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/20 text-white/90 border border-white/10`}
            >
              {benefit.length > 25 ? benefit.slice(0, 22) + "..." : benefit}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay with Full Info */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-md">
        <div className="w-16 h-16 rounded-full bg-white/10 p-1 mb-4 shadow-lg">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            {animalFace}
          </div>
        </div>
        <h4 className="font-bold text-white mb-2 text-center">{product.name}</h4>
        <p className="text-sm text-white/80 mb-4 text-center">
          {product.description}
        </p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {product.benefits.map((benefit, i) => (
            <span 
              key={i}
              className={`inline-block px-3 py-1 rounded-full text-[10px] font-medium ${theme.badge} text-white`}
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
