
import { CheckCircle, Shield, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Zap,
      title: "No Long-term Contracts",
      description: "Pay per campaign with complete flexibility",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Direct Network Access",
      description: "Exclusive access to our vetted influencer network",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing",
      description: "Clear pricing with no hidden fees or surprises",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for 
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"> Modern Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            We've reimagined influencer marketing to be transparent, flexible, and results-driven
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/10">
                  <div className={`mb-6 p-4 bg-gradient-to-r ${benefit.gradient} rounded-2xl w-fit mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
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
