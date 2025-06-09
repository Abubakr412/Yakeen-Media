
import { MessageCircle, Rocket, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Tell us your goals and target audience",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Campaign Launch",
      description: "We handle influencer matching & content creation",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Review Results",
      description: "Get detailed analytics and actionable insights",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple Process, 
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"> Powerful Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with our streamlined three-step approach
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-x-4 z-0"></div>
                )}
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`mb-8 p-6 bg-gradient-to-r ${step.color} rounded-3xl shadow-xl group-hover:scale-110 transition-all duration-300 relative`}>
                    <step.icon className="h-10 w-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
                    {step.description}
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

export default HowItWorks;
