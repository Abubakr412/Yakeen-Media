
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    "No long-term contracts—pay per campaign",
    "Direct access to our influencer network",
    "Transparent pricing—no hidden fees"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">Why Choose Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-emerald-100 rounded-full">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="text-lg font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
