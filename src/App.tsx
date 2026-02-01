import { Hero } from "./components/sections/Hero";
import { ProductsSection } from "./components/sections/ProductsSection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProductsSection />
    </div>
  );
}

export default App;
