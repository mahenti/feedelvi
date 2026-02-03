import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { FinlandSection } from "./components/sections/FinlandSection";
import { ProductsSection } from "./components/sections/ProductsSection";
import { GallerySection } from "./components/sections/GallerySection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FinlandSection />
      <ProductsSection />
      <GallerySection />
    </div>
  );
}

export default App;
