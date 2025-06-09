
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Target, CheckCircle, BarChart3, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Influencer Discovery & Vetting",
      description: "We find and verify authentic influencers who align with your brand values and target audience.",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      glowColor: "purple"
    },
    {
      icon: Target,
      title: "Campaign Strategy & Management",
      description: "From creative brief to execution, we handle influencer outreach, contracts, and content coordination.",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      glowColor: "blue"
    },
    {
      icon: CheckCircle,
      title: "Content Review & Approval",
      description: "We ensure all posts meet your brand guidelines and quality standards before they go live.",
      gradient: "from-pink-500 via-red-500 to-orange-500",
      glowColor: "pink"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking & Reporting",
      description: "Comprehensive monthly reports on reach, engagement, conversions, and ROI—clear metrics you can act on.",
      gradient: "from-green-500 via-blue-500 to-purple-500",
      glowColor: "green"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl floating-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-pink-500/20 rounded-full mb-8 border border-primary/30">
            <Sparkles className="h-5 w-5 text-primary mr-2 animate-pulse" />
            <span className="text-primary font-bold text-lg">Yakeen Media Services</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight">
            Everything You Need for 
            <span className="block bg-gradient-to-r from-primary via-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent text-glow">
              Influencer Success
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Yakeen Media specializes in <span className="text-primary font-bold">data-driven influencer marketing solutions</span> that deliver authentic connections and measurable results for your brand
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group relative border-0 shadow-2xl hover:shadow-primary/20 transition-all duration-700 gradient-card backdrop-blur-sm hover:scale-105 border border-white/10 overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-8 relative z-10">
                <div className={`mx-auto mb-8 p-6 bg-gradient-to-r ${service.gradient} rounded-3xl w-fit shadow-2xl group-hover:scale-125 transition-all duration-500 relative overflow-hidden`}>
                  <service.icon className="h-10 w-10 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur group-hover:bg-white/30 transition-all duration-500"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-xl">
                  {service.description}
                </p>
              </CardContent>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
