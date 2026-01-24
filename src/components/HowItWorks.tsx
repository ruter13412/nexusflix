import { MousePointer, MessageSquare, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: MousePointer,
    title: 'Choose a Service',
    description: 'Browse our catalog and pick from 50+ premium streaming and entertainment services.',
  },
  {
    icon: MessageSquare,
    title: 'DM Your Details',
    description: 'Send us a message on Instagram with your region and device type for quick setup.',
  },
  {
    icon: CheckCircle2,
    title: 'Get Activated',
    description: 'Receive your activation code and enjoy our setup guidance and ongoing support.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">How It</span>{' '}
            <span className="text-neon">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Simple 3-step process to get your premium access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-6xl font-display font-bold text-muted/30">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-cyan/30 transition-colors">
                  <Icon className="w-8 h-8 text-neon-cyan" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-purple/50 to-neon-cyan/50"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
