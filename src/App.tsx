import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { FinlandSection } from "./components/sections/FinlandSection";
import { ProductsSection } from "./components/sections/ProductsSection";
import { PartnersBanner } from "./components/sections/PartnersBanner";
import { GallerySection } from "./components/sections/GallerySection";
import { Footer } from "./components/sections/Footer";
import { AboutPage } from "./components/pages/AboutPage";
import { ContactPage } from "./components/pages/ContactPage";
import { ProductsPage } from "./components/pages/ProductsPage";
import { WhatsAppButton } from "./components/WhatsAppButton";

function HomePage() {
  return (
    <>
      <Hero />
      <FinlandSection />
      <ProductsSection />
      <PartnersBanner />
      <GallerySection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
