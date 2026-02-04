import { useState } from "react";
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
import { PartnersPage } from "./components/pages/PartnersPage";
import { FacilitiesPage } from "./components/pages/FacilitiesPage";
import { SustainabilityPage } from "./components/pages/SustainabilityPage";
import { QualityPage } from "./components/pages/QualityPage";
import { CareersPage } from "./components/pages/CareersPage";
import { QuoteForm } from "./components/QuoteForm";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollToTop } from "./components/ScrollToTop";

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
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Header onOpenQuote={() => setIsQuoteOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
        <Footer />
        <QuoteForm isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
