
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      {/* Floating elements for modern feel */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-white mr-3 animate-pulse" />
          <span className="text-white/90 font-medium tracking-wide">Next-Gen Marketing</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Strategic Influencer Marketing—
          <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Without the Guesswork
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
          We connect your brand with the right influencers, manage campaigns, and track performance—transparently.
        </p>
        
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
          We handle influencer sourcing, contracts, and reporting—so you don't have to.
        </p>
        
        <Button 
          onClick={scrollToServices}
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
        >
          See Our Services
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
