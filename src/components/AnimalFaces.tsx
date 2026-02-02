// Beautiful Real Animal Faces from Unsplash (Free to use)
// Images are displayed in circular containers for a polished look
// User can replace these URLs with their own transparent-background images

const animalImages = {
  cow: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&h=400&fit=crop&crop=face",
  sheep: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=400&h=400&fit=crop&crop=face",
  pig: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=400&fit=crop&crop=face",
  rabbit: "https://images.unsplash.com/photo-1585110396067-4f4f1c13fcf3?w=400&h=400&fit=crop&crop=face",
  chicken: "https://images.unsplash.com/photo-1548550023-2bdb3c5bdae5?w=400&h=400&fit=crop&crop=face",
  duck: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=400&fit=crop&crop=face",
};

interface AnimalFaceProps {
  animal: "cow" | "sheep" | "pig" | "rabbit" | "chicken" | "duck";
  className?: string;
}

function AnimalFaceImage({ animal, className = "" }: AnimalFaceProps) {
  return (
    <img
      src={animalImages[animal]}
      alt={`${animal} face`}
      className={`w-full h-full object-cover ${className}`}
      loading="lazy"
    />
  );
}

// Export components for backwards compatibility
export const CowFace = () => <AnimalFaceImage animal="cow" />;
export const SheepFace = () => <AnimalFaceImage animal="sheep" />;
export const PigFace = () => <AnimalFaceImage animal="pig" />;
export const RabbitFace = () => <AnimalFaceImage animal="rabbit" />;
export const ChickenFace = () => <AnimalFaceImage animal="chicken" />;
export const DuckFace = () => <AnimalFaceImage animal="duck" />;
