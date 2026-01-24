import { Zap, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple via-neon-cyan to-neon-green rounded-lg opacity-80"></div>
              <Zap className="relative w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold tracking-wider">
              <span className="text-neon">NexusFlix</span>
              <span className="text-muted-foreground ml-1 text-sm font-sans font-normal">Official</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} NexusFlix Official. All rights reserved.
          </p>

          {/* Social */}
          <a
            href="https://instagram.com/nexusflixofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@nexusflixofficial</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
