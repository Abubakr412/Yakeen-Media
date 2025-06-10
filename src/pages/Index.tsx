
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PlatformServices from "@/components/PlatformServices";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <PlatformServices />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
