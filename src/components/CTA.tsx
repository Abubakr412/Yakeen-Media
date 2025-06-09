
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-pink-600 via-purple-600 to-yellow-500"></div>
      
      {/* Multiple floating elements for depth */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/15 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl floating-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-400/15 rounded-full blur-2xl floating"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-400/15 rounded-full blur-xl floating-delayed"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="h-8 w-8 text-white mr-3 animate-spin" />
            <span className="text-white/90 font-bold text-xl tracking-wide">Ready to Transform?</span>
            <Sparkles className="h-8 w-8 text-white ml-3 animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-tight text-glow">
            Ready to 
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Transform
            </span>
            Your Marketing?
          </h2>
          <p className="text-xl md:text-3xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Partner with <span className="font-bold text-yellow-300">Yakeen Media</span> to elevate your brand through strategic influencer marketing that delivers 
            <span className="font-bold text-pink-300"> authentic engagement</span> and 
            <span className="font-bold text-blue-300"> measurable growth</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white via-yellow-300 to-pink-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <Button 
                size="lg" 
                className="relative bg-white text-primary hover:bg-white/90 px-12 py-8 text-xl font-black rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-500 hover:scale-110"
              >
                <Calendar className="mr-3 h-8 w-8" />
                Book Free Consultation
              </Button>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/50 to-transparent rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Button 
                size="lg" 
                variant="outline"
                className="relative border-4 border-white text-white hover:bg-white hover:text-primary px-12 py-8 text-xl font-black rounded-full transition-all duration-500 hover:scale-110 bg-white/10 backdrop-blur-sm"
              >
                Learn More
                <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
