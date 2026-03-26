import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import MaterialsSection from "@/components/MaterialsSection";
import ProductsSection from "@/components/ProductsSection";
import MachinesSection from "@/components/MachinesSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ProcessSection />
      <MaterialsSection />
      <ProductsSection />
      <MachinesSection />
    </main>
    <Footer />
    <WhatsAppFAB />
  </>
);

export default Index;
