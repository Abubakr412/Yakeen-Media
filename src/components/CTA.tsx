
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-emerald-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start?
        </h2>
        <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
          Let's discuss your influencer marketing goals and create a strategy that delivers results.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book a Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default CTA;
