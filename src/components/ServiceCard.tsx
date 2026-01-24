import { ExternalLink } from 'lucide-react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  name: string;
  Icon: IconType;
  iconColor: string;
  price: string;
  inStock: boolean;
}

const ServiceCard = ({ name, Icon, iconColor, price, inStock }: ServiceCardProps) => {
  const dmLink = `https://ig.me/m/nexusflixofficial?text=${encodeURIComponent(`Hi NexusFlix! I want: ${name}. Region: ____. Device: ____.`)}`;

  return (
    <div className="service-card group">
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ 
            backgroundColor: `${iconColor}15`,
            boxShadow: `0 0 20px ${iconColor}30`
          }}
        >
          <Icon 
            className="w-6 h-6 transition-transform group-hover:scale-110" 
            style={{ color: iconColor === '#000000' || iconColor === '#FFFFFF' ? '#fff' : iconColor }}
          />
        </div>
        {inStock && (
          <div className="flex items-center gap-1.5 text-xs">
            <span className="pulse-dot"></span>
            <span className="text-neon-green uppercase tracking-wide font-medium">In Stock</span>
          </div>
        )}
      </div>

      <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-neon transition-colors">
        {name}
      </h3>

      <div className="flex items-center justify-between mt-4">
        <span className="text-2xl font-bold text-neon-cyan">{price}</span>
        <a
          href={dmLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/20 transition-all duration-300 text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-neon-purple/20 group-hover:to-neon-cyan/20"
        >
          <span>Order</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
