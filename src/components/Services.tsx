
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Target, CheckCircle, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Influencer Discovery & Vetting",
      description: "We find and verify influencers who align with your brand values and audience.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Campaign Strategy & Management",
      description: "From brief to execution, we handle influencer outreach, contracts, and content coordination.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Content Review & Approval",
      description: "We ensure all posts meet your brand guidelines before they go live.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking & Reporting",
      description: "Monthly reports on reach, engagement, and ROI—no jargon, just clear metrics.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for 
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"> Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive influencer marketing solutions designed to drive real results for your brand
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:scale-[1.02]">
              <CardHeader className="text-center pb-6">
                <div className={`mx-auto mb-6 p-4 bg-gradient-to-r ${service.gradient} rounded-2xl w-fit shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-center leading-relaxed text-lg">
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
