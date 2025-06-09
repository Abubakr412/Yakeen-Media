import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced gradient background with more layers */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Multiple floating elements for depth */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl floating-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl floating"></div>
      <div className="absolute bottom-1/3 left-3/4 w-48 h-48 bg-yellow-400/10 rounded-full blur-xl floating-delayed"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
        <div className="flex items-center justify-center mb-8 group">
          <div className="relative">
            <Sparkles className="h-10 w-10 text-primary mr-4 animate-pulse group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 h-10 w-10 mr-4 bg-primary/20 rounded-full blur-xl"></div>
          </div>
          <span className="text-foreground/90 font-bold text-xl tracking-wider bg-gradient-to-r from-primary via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Yakeen Media
          </span>
          <Zap className="h-6 w-6 text-yellow-400 ml-2 animate-bounce" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-foreground mb-10 leading-tight">
          Strategic Influencer Marketing—
          <span className="block bg-gradient-to-r from-primary via-pink-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent text-glow animate-pulse">
            Without the Guesswork
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-foreground/85 mb-8 max-w-5xl mx-auto leading-relaxed font-medium">
          We're a <span className="text-primary font-bold">results-driven</span> influencer marketing agency that connects your brand with authentic creators to drive 
          <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent font-bold"> meaningful engagement</span> and 
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-bold"> growth</span>.
        </p>
        
        <p className="text-xl text-foreground/70 mb-16 max-w-4xl mx-auto leading-relaxed">
          From influencer discovery to campaign execution and performance tracking—we handle it all transparently, so you can focus on your business.
        </p>
        
        <div className="relative group inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-pink-500 to-yellow-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 glow-effect"></div>
          <Button onClick={scrollToServices} size="lg" className="relative bg-gradient-to-r from-primary to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-110 border-2 border-white/20">
            <Sparkles className="mr-3 h-6 w-6 animate-spin" />
            See Our Services
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;