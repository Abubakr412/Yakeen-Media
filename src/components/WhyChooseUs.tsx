
import { CheckCircle, Shield, Zap, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Zap,
      title: "No Long-term Contracts",
      description: "Pay per campaign with complete flexibility and no hidden commitments",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      iconBg: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Direct Network Access",
      description: "Exclusive access to Yakeen Media's vetted influencer network across all major platforms",
      gradient: "from-green-400 via-blue-500 to-purple-500",
      iconBg: "from-green-500 to-blue-500"
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with detailed breakdowns and no surprise fees",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      iconBg: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background"></div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl floating-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl floating"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-pink-500/20 rounded-full mb-8 border border-primary/30">
            <Sparkles className="h-5 w-5 text-primary mr-2 animate-pulse" />
            <span className="text-primary font-bold text-lg">Why Choose Yakeen Media</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight">
            Built for 
            <span className="block bg-gradient-to-r from-primary via-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent text-glow">
              Modern Brands
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground mb-20 max-w-4xl mx-auto leading-relaxed font-medium">
            At Yakeen Media, we've reimagined influencer marketing to be <span className="text-primary font-bold">transparent</span>, 
            <span className="text-pink-400 font-bold"> flexible</span>, and 
            <span className="text-yellow-400 font-bold"> results-driven</span> for today's digital landscape
          </p>
          
          <div className="grid md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="gradient-card backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-110 border border-white/10 relative overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`mb-8 p-6 bg-gradient-to-r ${benefit.iconBg} rounded-3xl w-fit mx-auto shadow-2xl group-hover:scale-125 transition-all duration-500 relative overflow-hidden`}>
                      <benefit.icon className="h-12 w-12 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 rounded-3xl blur group-hover:bg-white/30 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
