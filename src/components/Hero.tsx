
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Strategic Influencer Marketing—
          <span className="text-emerald-600">Without the Guesswork</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          We connect your brand with the right influencers, manage campaigns, and track performance—transparently.
        </p>
        
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          We handle influencer sourcing, contracts, and reporting—so you don't have to.
        </p>
        
        <Button 
          onClick={scrollToServices}
          size="lg" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
        >
          See Our Services
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
