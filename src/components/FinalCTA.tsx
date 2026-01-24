import { Instagram, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const dmLink = "https://ig.me/m/nexusflixofficial";

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-background to-neon-cyan/20"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-neon-cyan/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 hud-badge mb-8">
            <span className="pulse-dot"></span>
            <span className="text-neon-green text-xs uppercase tracking-widest">Ready to Start?</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">DM</span>{' '}
            <span className="text-neon">@nexusflixofficial</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Get instant access to premium streaming services. Fast support, 
            trusted service, all starting at just $1.50.
          </p>

          {/* CTA Button */}
          <a
            href={dmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-neon text-lg px-8 py-4 text-primary-foreground group"
          >
            <Instagram className="w-6 h-6" />
            <span>Send a DM on Instagram</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
            <span>✓ Instant Replies</span>
            <span>✓ Verified Seller</span>
            <span>✓ 50+ Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
