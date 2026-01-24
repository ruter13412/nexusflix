import { Instagram } from 'lucide-react';
import nexusflixLogo from '@/assets/nexusflix-logo.png';

const Navbar = () => {
  const dmLink = "https://ig.me/m/nexusflixofficial";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={nexusflixLogo} 
              alt="NexusFlix Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className="font-display font-bold text-lg md:text-xl tracking-wider">
              <span className="text-neon">NexusFlix</span>
              <span className="text-muted-foreground ml-1 text-sm font-sans font-normal">Official</span>
            </span>
          </div>

          {/* Center Badges - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="hud-badge flex items-center gap-2">
              <span className="pulse-dot"></span>
              <span className="text-neon-green">IN STOCK</span>
            </div>
            <div className="hud-badge">
              <span className="text-neon-cyan">From $1.50</span>
            </div>
            <div className="hud-badge">
              <span className="text-muted-foreground">Fast Support</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={dmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon flex items-center gap-2 text-sm md:text-base text-primary-foreground"
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">DM on Instagram</span>
            <span className="sm:hidden">DM</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
