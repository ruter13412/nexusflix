import { Sparkles, MessageCircle } from 'lucide-react';

const Hero = () => {
  const dmLink = "https://ig.me/m/nexusflixofficial";

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden scanlines">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 hud-badge mb-6">
            <span className="pulse-dot"></span>
            <span className="text-neon-green text-xs uppercase tracking-widest">Premium Streaming Access</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Your Streaming Hub</span>
            <br />
            <span className="text-neon text-neon-glow">— Neon Edition</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium activation codes, vouchers, and setup guidance for your favorite 
            entertainment services. Fast support, trusted service, instant delivery via Instagram DM.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToServices}
              className="btn-neon-outline flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Sparkles className="w-5 h-5" />
              Browse Services
            </button>
            <a
              href={dmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon flex items-center gap-2 w-full sm:w-auto justify-center text-primary-foreground"
            >
              <MessageCircle className="w-5 h-5" />
              DM to Order
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <span className="pulse-dot"></span>
              <span>50+ Services</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan"></span>
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-neon-cyan rounded-full animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
