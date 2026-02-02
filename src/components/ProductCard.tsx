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
    <div className={`group relative rounded-2xl border-2 ${theme.border} ${theme.bg} overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
      {/* Solid Card Content */}
      <div className="p-5">
        {/* Top Row - Animal Face & Form Badge */}
        <div className="flex items-start justify-between mb-4">
          {/* Animal Face */}
          <div className="w-14 h-14 rounded-full bg-white shadow-md p-0.5 border-2 border-gray-100">
            <div className="w-full h-full rounded-full overflow-hidden">
              {animalFace}
            </div>
          </div>
          
          {/* Form Badge */}
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-800 text-white shadow-sm`}>
            {product.form}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-base font-bold ${theme.text} mb-2 leading-tight`}>
          {product.name}
        </h3>

        {/* Description */}
        <p className={`text-sm ${theme.text} opacity-70 mb-3 line-clamp-2`}>
          {product.description}
        </p>

        {/* Benefits as Pills */}
        <div className="flex flex-wrap gap-1.5">
          {product.benefits.slice(0, 3).map((benefit, i) => (
            <span 
              key={i}
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-white ${theme.accent} border border-current border-opacity-20`}
            >
              {benefit.length > 25 ? benefit.slice(0, 22) + "..." : benefit}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay with Full Info */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-5 shadow-inner">
        <div className="w-14 h-14 rounded-full overflow-hidden mb-3 shadow-md">
          {animalFace}
        </div>
        <h4 className={`font-bold ${theme.text} mb-2 text-center text-sm`}>{product.name}</h4>
        <p className={`text-xs ${theme.text} opacity-80 mb-3 text-center`}>
          {product.description}
        </p>
        <div className="flex flex-wrap justify-center gap-1">
          {product.benefits.map((benefit, i) => (
            <span 
              key={i}
              className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-medium ${theme.badge} text-white`}
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
