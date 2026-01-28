import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SupplyChainSection } from "@/components/SupplyChainSection";
import { BlockchainSection } from "@/components/BlockchainSection";
import { ExtractsSection } from "@/components/ExtractsSection";
import { BrandTrustSection } from "@/components/BrandTrustSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SupplyChainSection />
        <BlockchainSection />
        <ExtractsSection />
        <BrandTrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
