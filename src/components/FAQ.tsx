import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I order?',
    answer: 'Simply browse our services, click "DM to Order" on any service card, and send us a message on Instagram. Include your preferred region and device type, and we\'ll guide you through the rest!',
  },
  {
    question: 'How fast is activation?',
    answer: 'Most activations are completed within minutes of payment confirmation. During peak hours, it may take up to a few hours. We always aim for the fastest possible delivery.',
  },
  {
    question: 'What if I have an issue?',
    answer: 'Reach out to us on Instagram! We provide troubleshooting support and will help resolve any activation issues. Replacement or support is available when applicable based on the service.',
  },
  {
    question: 'Do prices vary by region?',
    answer: 'Our standard pricing is $1.50 for most services. However, some premium packages or specific regional requirements may have different pricing. DM us for exact quotes for your region.',
  },
  {
    question: 'What services are available?',
    answer: 'We offer 50+ premium services including Netflix, Disney+, Spotify, IPTV packages, sports streaming, and productivity apps like NordVPN and Canva Pro. Check our catalog above for the full list!',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-neon-cyan/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Frequently</span>{' '}
              <span className="text-neon">Asked</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="font-display font-semibold text-left hover:text-neon-cyan transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
