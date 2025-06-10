
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, Instagram, Play, BarChart3, Sparkles } from "lucide-react";

const PlatformServices = () => {
  const platforms = [
    {
      icon: Youtube,
      name: "YouTube",
      description: "Long-form content creation with authentic storytelling that drives deep engagement and subscriber growth.",
      features: ["Product Reviews", "Tutorials & How-tos", "Brand Collaborations", "Channel Analytics"],
      gradient: "from-red-500 via-red-400 to-orange-400",
      bgGlow: "red"
    },
    {
      icon: Instagram,
      name: "Instagram",
      description: "Visual storytelling through posts, stories, and reels that captivate audiences and drive conversions.",
      features: ["Feed Posts", "Story Campaigns", "Reels Content", "Shopping Integration"],
      gradient: "from-purple-500 via-pink-500 to-orange-400",
      bgGlow: "purple"
    },
    {
      icon: Play,
      name: "TikTok",
      description: "Viral short-form content that reaches Gen Z and millennial audiences with trending formats.",
      features: ["Trending Challenges", "Creative Videos", "Brand Takeovers", "Hashtag Campaigns"],
      gradient: "from-pink-500 via-purple-500 to-blue-500",
      bgGlow: "pink"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl floating-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl floating"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-pink-500/20 rounded-full mb-8 border border-primary/30">
            <BarChart3 className="h-5 w-5 text-primary mr-2 animate-pulse" />
            <span className="text-primary font-bold text-lg">Platform Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight">
            Dominate Every 
            <span className="block bg-gradient-to-r from-primary via-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent text-glow">
              Major Platform
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-medium">
            Yakeen Media provides <span className="text-primary font-bold">influencer marketing services</span> with a focus on 
            <span className="text-red-400 font-bold"> YouTube</span>, 
            <span className="text-pink-400 font-bold"> Instagram</span>, and 
            <span className="text-blue-400 font-bold"> TikTok</span>, helping businesses create 
            <span className="text-yellow-400 font-bold"> impactful campaigns</span> and 
            <span className="text-green-400 font-bold"> measure ROI</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {platforms.map((platform, index) => (
            <Card key={index} className="group relative border-0 shadow-2xl hover:shadow-primary/20 transition-all duration-700 gradient-card backdrop-blur-sm hover:scale-105 border border-white/10 overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className={`mx-auto mb-6 p-6 bg-gradient-to-r ${platform.gradient} rounded-3xl w-fit shadow-2xl group-hover:scale-125 transition-all duration-500 relative overflow-hidden`}>
                  <platform.icon className="h-12 w-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur group-hover:bg-white/30 transition-all duration-500"></div>
                </div>
                <CardTitle className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                  {platform.name}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {platform.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10">
                <div className="space-y-3">
                  <h4 className="text-foreground font-bold text-lg mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 text-primary mr-2" />
                    Key Services
                  </h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Measurable Results Across All Platforms
              </span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don't just create campaigns—we deliver <span className="text-primary font-bold">data-driven insights</span> and 
              <span className="text-green-400 font-bold"> comprehensive ROI tracking</span> so you can see exactly how your investment translates into 
              <span className="text-yellow-400 font-bold"> real business growth</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformServices;
