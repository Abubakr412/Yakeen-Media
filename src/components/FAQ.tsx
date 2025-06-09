
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do you select influencers?",
      answer: "We analyze audience demographics, engagement rates, brand alignment, and content quality to ensure perfect alignment with your campaign objectives."
    },
    {
      question: "What's your pricing model?",
      answer: "We offer transparent flat fees per campaign or flexible monthly retainers, depending on your needs. All pricing is upfront with zero hidden costs."
    },
    {
      question: "How long does a typical campaign take?",
      answer: "Most campaigns run 2-4 weeks from launch to completion, though this can vary based on scope, objectives, and content requirements."
    },
    {
      question: "Do you work with all social media platforms?",
      answer: "Yes, we manage campaigns across Instagram, TikTok, YouTube, Twitter, LinkedIn, and other major platforms based on where your audience is most active."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-medium">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Questions & 
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"> Answers</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our services
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
              >
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
