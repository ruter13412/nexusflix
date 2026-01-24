import { Shield, Zap, MessageCircle, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Replies',
    description: 'Quick response times via Instagram DM to get you started immediately.',
  },
  {
    icon: Shield,
    title: 'Secure Process',
    description: 'Safe activation guidance with verified codes and vouchers.',
  },
  {
    icon: RefreshCw,
    title: 'Replacement Support',
    description: 'Issue resolution and replacement assistance when applicable.',
  },
  {
    icon: MessageCircle,
    title: 'Troubleshooting Help',
    description: 'Setup guidance and technical support for activation issues.',
  },
];

const SupportSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Support &</span>
                <br />
                <span className="text-neon">Guarantee</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We're committed to your satisfaction. Our team provides dedicated support 
                through Instagram to ensure smooth activation and ongoing assistance for 
                all your premium service needs.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                <div className="hud-badge flex items-center gap-2">
                  <span className="pulse-dot"></span>
                  <span className="text-xs">Active Support</span>
                </div>
                <div className="hud-badge text-xs">
                  Verified Seller
                </div>
                <div className="hud-badge text-xs">
                  Trusted Since 2023
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 group hover:border-neon-cyan/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-neon-cyan/10 transition-colors">
                      <Icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
