
import { MessageCircle, Rocket, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Tell us your goals"
    },
    {
      icon: Rocket,
      title: "Campaign Launch",
      description: "We handle influencer matching & content"
    },
    {
      icon: TrendingUp,
      title: "Review Results",
      description: "Get actionable insights"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Simple process, powerful results
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center md:flex-1">
                <div className="mb-6 p-4 bg-emerald-600 rounded-full">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg max-w-xs">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute w-24 h-0.5 bg-emerald-200 transform translate-x-32 mt-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
