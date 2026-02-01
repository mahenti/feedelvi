import { CowFace, SheepFace, PigFace, RabbitFace, ChickenFace, DuckFace } from "./AnimalFaces";

export interface Product {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  category: "bovine" | "ovine-caprine" | "porcine" | "lagomorph" | "poultry";
  form: "Pelleted Feed" | "Pellets" | "Crumble";
  animalType?: "cow" | "sheep" | "pig" | "rabbit" | "chicken" | "duck";
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const categoryThemes: Record<Product["category"], { 
  bg: string; 
  border: string; 
  badge: string;
  text: string;
  accent: string;
}> = {
  bovine: {
    bg: "bg-gradient-to-br from-[#F5F9F5] to-[#E8F0E8]",
    border: "border-[#5B8C5A]",
    badge: "bg-[#5B8C5A]",
    text: "text-[#3D5C3D]",
    accent: "text-[#5B8C5A]",
  },
  "ovine-caprine": {
    bg: "bg-gradient-to-br from-[#FDF8F3] to-[#F5EFE6]",
    border: "border-[#B8956C]",
    badge: "bg-[#B8956C]",
    text: "text-[#6B5344]",
    accent: "text-[#B8956C]",
  },
  porcine: {
    bg: "bg-gradient-to-br from-[#FDF5F5] to-[#F5E6E6]",
    border: "border-[#C98B8B]",
    badge: "bg-[#C98B8B]",
    text: "text-[#6B4444]",
    accent: "text-[#C98B8B]",
  },
  lagomorph: {
    bg: "bg-gradient-to-br from-[#F8F5FD] to-[#F0E6F5]",
    border: "border-[#9B7CB6]",
    badge: "bg-[#9B7CB6]",
    text: "text-[#4A3A5C]",
    accent: "text-[#9B7CB6]",
  },
  poultry: {
    bg: "bg-gradient-to-br from-[#FDFBF0] to-[#F5F0E0]",
    border: "border-[#D4A84B]",
    badge: "bg-[#D4A84B]",
    text: "text-[#5C4A2A]",
    accent: "text-[#D4A84B]",
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
    <div className={`group relative rounded-3xl border-2 ${theme.border} ${theme.bg} p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
      {/* Animal Face Badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className={`w-16 h-16 rounded-full ${theme.badge} p-2 shadow-lg border-4 border-white`}>
          <div className="w-full h-full text-white">
            {animalFace}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-10">
        {/* Product ID Badge */}
        <div className="flex justify-center mb-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${theme.badge} text-white`}>
            #{String(product.id).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold ${theme.text} text-center mb-2 leading-tight`}>
          {product.name}
        </h3>

        {/* Form Badge */}
        <div className="flex justify-center mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/60 ${theme.accent} border border-current border-opacity-20`}>
            {product.form}
          </span>
        </div>

        {/* Description - More subtle */}
        <p className={`text-sm ${theme.text} opacity-70 text-center mb-4 line-clamp-2`}>
          {product.description}
        </p>

        {/* Benefits as Badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {product.benefits.slice(0, 2).map((benefit, i) => (
            <span 
              key={i}
              className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/80 ${theme.text} border border-current border-opacity-10`}
            >
              {benefit.length > 20 ? benefit.slice(0, 18) + "..." : benefit}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay with More Info */}
      <div className="absolute inset-0 rounded-3xl bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5">
        <div className="text-center">
          <p className={`text-sm ${theme.text} mb-3`}>
            {product.description}
          </p>
          <div className="space-y-1">
            {product.benefits.map((benefit, i) => (
              <span 
                key={i}
                className={`inline-block px-2 py-1 rounded-full text-xs ${theme.badge} text-white mb-1`}
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
