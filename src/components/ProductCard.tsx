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
  bg: string; 
  border: string; 
  badge: string;
  darkBadge: string;
  text: string;
  accent: string;
  gradient: string;
}> = {
  bovine: {
    bg: "bg-gradient-to-br from-[#E8F0E8] to-[#D4E4D4]",
    border: "border-[#5B8C5A]",
    badge: "bg-[#5B8C5A]",
    darkBadge: "bg-[#2D4A2D]",
    text: "text-[#2D4A2D]",
    accent: "text-[#5B8C5A]",
    gradient: "from-[#5B8C5A] to-[#7BA87B]",
  },
  "ovine-caprine": {
    bg: "bg-gradient-to-br from-[#F5EFE6] to-[#E8DFD0]",
    border: "border-[#B8956C]",
    badge: "bg-[#B8956C]",
    darkBadge: "bg-[#5C4A2A]",
    text: "text-[#5C4A2A]",
    accent: "text-[#B8956C]",
    gradient: "from-[#B8956C] to-[#D4B896]",
  },
  porcine: {
    bg: "bg-gradient-to-br from-[#F5E6E6] to-[#E8D0D0]",
    border: "border-[#C98B8B]",
    badge: "bg-[#C98B8B]",
    darkBadge: "bg-[#5C2A2A]",
    text: "text-[#5C2A2A]",
    accent: "text-[#C98B8B]",
    gradient: "from-[#C98B8B] to-[#E0A8A8]",
  },
  lagomorph: {
    bg: "bg-gradient-to-br from-[#F0E6F5] to-[#E0D0E8]",
    border: "border-[#9B7CB6]",
    badge: "bg-[#9B7CB6]",
    darkBadge: "bg-[#3D2A4A]",
    text: "text-[#3D2A4A]",
    accent: "text-[#9B7CB6]",
    gradient: "from-[#9B7CB6] to-[#B89CD4]",
  },
  poultry: {
    bg: "bg-gradient-to-br from-[#F5F0E0] to-[#E8E0C8]",
    border: "border-[#D4A84B]",
    badge: "bg-[#D4A84B]",
    darkBadge: "bg-[#5C4A1A]",
    text: "text-[#5C4A1A]",
    accent: "text-[#D4A84B]",
    gradient: "from-[#D4A84B] to-[#E8C878]",
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
    <div className={`group relative rounded-3xl border-2 ${theme.border} ${theme.bg} overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]`}>
      {/* Top Section - Animal Face & Product Image */}
      <div className="relative">
        {/* Gradient Header */}
        <div className={`h-24 bg-gradient-to-r ${theme.gradient} relative overflow-hidden`}>
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id={`pattern-${product.id}`} patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="2" fill="white"/>
              </pattern>
              <rect width="100" height="100" fill={`url(#pattern-${product.id})`}/>
            </svg>
          </div>
        </div>
        
        {/* Animal Face - Centered at bottom of header */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-white p-1 shadow-xl">
            <div className={`w-full h-full rounded-full ${theme.badge} p-1 overflow-hidden`}>
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                {animalFace}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Image Placeholder */}
      <div className="mt-10 px-4">
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl h-40 flex items-center justify-center border-2 border-dashed border-gray-300 group-hover:border-gray-400 transition-colors">
          <div className="text-center">
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full ${theme.badge} bg-opacity-20 flex items-center justify-center`}>
              <span className={`text-2xl ${theme.accent}`}>📦</span>
            </div>
            <span className="text-xs text-gray-400 font-medium">Product Image</span>
          </div>
        </div>
      </div>

      {/* Card Content - Centered */}
      <div className="p-5 pt-4 text-center">
        {/* Form Badge - Dark Style */}
        <div className="mb-3">
          <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold ${theme.darkBadge} text-white shadow-md`}>
            {product.form}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold ${theme.text} mb-3 leading-tight`}>
          {product.name}
        </h3>

        {/* Description */}
        <p className={`text-sm ${theme.text} opacity-60 mb-4 line-clamp-2`}>
          {product.description}
        </p>

        {/* Benefits as Pills */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {product.benefits.slice(0, 3).map((benefit, i) => (
            <span 
              key={i}
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/70 ${theme.text} border border-current border-opacity-10`}
            >
              {benefit.length > 25 ? benefit.slice(0, 22) + "..." : benefit}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay with Full Info */}
      <div className="absolute inset-0 rounded-3xl bg-white/98 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br shadow-lg mb-4 overflow-hidden" style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}>
          <div className="w-full h-full flex items-center justify-center">
            {animalFace}
          </div>
        </div>
        <h4 className={`font-bold ${theme.text} mb-2`}>{product.name}</h4>
        <p className={`text-sm ${theme.text} opacity-80 mb-4 text-center`}>
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
