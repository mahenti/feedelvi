import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { FinlandSection } from "./components/sections/FinlandSection";
import { ProductsSection } from "./components/sections/ProductsSection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FinlandSection />
      <ProductsSection />
    </div>
  );
}

export default App;
