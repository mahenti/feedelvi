import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { FinlandSection } from "./components/sections/FinlandSection";
import { ProductsSection } from "./components/sections/ProductsSection";
import { PartnersBanner } from "./components/sections/PartnersBanner";
import { GallerySection } from "./components/sections/GallerySection";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FinlandSection />
      <ProductsSection />
      <PartnersBanner />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
