
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do you select influencers?",
      answer: "We analyze audience demographics, engagement rates, and brand fit to ensure perfect alignment with your campaign objectives."
    },
    {
      question: "What's your pricing model?",
      answer: "We offer flat fees per campaign or monthly retainers, depending on your needs. All pricing is transparent with no hidden costs."
    },
    {
      question: "How long does a typical campaign take?",
      answer: "Most campaigns run 2-4 weeks from launch to completion, though this can vary based on scope and objectives."
    },
    {
      question: "Do you work with all social media platforms?",
      answer: "Yes, we manage campaigns across Instagram, TikTok, YouTube, Twitter, and other major platforms based on where your audience is most active."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
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
