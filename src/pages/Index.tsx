import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { TechnicalFeatures } from "@/components/TechnicalFeatures";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <TechnicalFeatures />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;