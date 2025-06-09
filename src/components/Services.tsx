
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Target, CheckCircle, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Influencer Discovery & Vetting",
      description: "We find and verify influencers who align with your brand values and audience."
    },
    {
      icon: Target,
      title: "Campaign Strategy & Management",
      description: "From brief to execution, we handle influencer outreach, contracts, and content coordination."
    },
    {
      icon: CheckCircle,
      title: "Content Review & Approval",
      description: "We ensure all posts meet your brand guidelines before they go live."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking & Reporting",
      description: "Monthly reports on reach, engagement, and ROI—no jargon, just clear metrics."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for successful influencer marketing campaigns
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-emerald-100 rounded-lg w-fit">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
