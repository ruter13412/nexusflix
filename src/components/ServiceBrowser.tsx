import { useState, useMemo } from 'react';
import { Search, Film, Tv, Music, Radio, Trophy, Smartphone, Gamepad2, BookOpen } from 'lucide-react';
import { 
  SiNetflix, SiPrimevideo, SiHbo, SiAppletv, 
  SiCrunchyroll, SiSpotify, SiApplemusic, SiYoutubemusic, SiTidal, SiSoundcloud,
  SiNordvpn, SiCanva, 
  SiYoutube, SiTwitch, SiDiscord, SiDropbox, SiAdobecreativecloud, SiNotion,
  SiPlaystation, SiNintendoswitch, SiSteam, SiEpicgames,
  SiDuolingo, SiGrammarly, SiLinkedin,
  SiAmazon, SiPandora, SiAudible,
  SiUdemy, SiCoursera, SiOpenai, SiZoom,
  SiWwe, SiEa, SiUbisoft, SiNvidia, SiRoblox,
  SiMubi, SiStarz,
  SiDazn, SiNba, SiMlb, SiF1, SiUfc,
  SiScribd
} from 'react-icons/si';
import { FaShieldAlt, FaCut, FaBrain, FaBook, FaVideo, FaCloud, FaGamepad, FaMusic, FaTv, FaFilm, FaFeatherAlt, FaFutbol, FaBasketballBall } from 'react-icons/fa';
import { IoMusicalNotes, IoGameController } from 'react-icons/io5';
import { TbBrandDisney, TbBrandAmazon } from 'react-icons/tb';
import ServiceCard from './ServiceCard';

const categories = [
  { id: 'movies', label: 'Movies & Series', icon: Film },
  { id: 'anime', label: 'Anime', icon: Tv },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'livetv', label: 'Live TV / IPTV', icon: Radio },
  { id: 'sports', label: 'Sports', icon: Trophy },
  { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
  { id: 'apps', label: 'Premium Apps', icon: Smartphone },
  { id: 'learning', label: 'Learning', icon: BookOpen },
];

const services = {
  movies: [
    { name: 'Netflix', Icon: SiNetflix, color: '#E50914', price: '$1.50' },
    { name: 'Prime Video', Icon: SiPrimevideo, color: '#00A8E1', price: '$1.50' },
    { name: 'Disney+', Icon: TbBrandDisney, color: '#113CCF', price: '$1.50' },
    { name: 'Max (HBO)', Icon: SiHbo, color: '#B193E6', price: '$1.50' },
    { name: 'Hulu', Icon: FaTv, color: '#1CE783', price: '$1.50' },
    { name: 'Apple TV+', Icon: SiAppletv, color: '#FFFFFF', price: '$1.50' },
    { name: 'Paramount+', Icon: FaFilm, color: '#0064FF', price: '$1.50' },
    { name: 'Peacock', Icon: FaFeatherAlt, color: '#FDB927', price: '$1.50' },
    { name: 'MUBI', Icon: SiMubi, color: '#00BEE3', price: '$1.50' },
    { name: 'Starz', Icon: SiStarz, color: '#FFD700', price: '$1.50' },
    { name: 'Showtime', Icon: FaFilm, color: '#FF0000', price: '$1.50' },
    { name: 'AMC+', Icon: FaTv, color: '#E51937', price: '$1.50' },
    { name: 'BritBox', Icon: FaTv, color: '#DC241F', price: '$1.50' },
    { name: 'Shudder', Icon: FaFilm, color: '#E2001A', price: '$1.50' },
    { name: 'Curiosity Stream', Icon: FaTv, color: '#0080FF', price: '$1.50' },
    { name: 'MGM+', Icon: FaFilm, color: '#C4A000', price: '$1.50' },
  ],
  anime: [
    { name: 'Crunchyroll', Icon: SiCrunchyroll, color: '#F47521', price: '$1.50' },
    { name: 'HIDIVE', Icon: FaTv, color: '#00BAFF', price: '$1.50' },
    { name: 'Funimation', Icon: FaTv, color: '#5B0BB5', price: '$1.50' },
    { name: 'AnimeLab', Icon: FaTv, color: '#FFCC00', price: '$1.50' },
    { name: 'Wakanim', Icon: FaTv, color: '#FF5A5F', price: '$1.50' },
    { name: 'VRV', Icon: FaTv, color: '#FFE600', price: '$1.50' },
  ],
  music: [
    { name: 'Spotify Premium', Icon: SiSpotify, color: '#1DB954', price: '$1.50' },
    { name: 'Apple Music', Icon: SiApplemusic, color: '#FA243C', price: '$1.50' },
    { name: 'YouTube Music', Icon: SiYoutubemusic, color: '#FF0000', price: '$1.50' },
    { name: 'Deezer Premium', Icon: IoMusicalNotes, color: '#FEAA2D', price: '$1.50' },
    { name: 'TIDAL HiFi', Icon: SiTidal, color: '#00FFFF', price: '$1.50' },
    { name: 'SoundCloud Go+', Icon: SiSoundcloud, color: '#FF5500', price: '$1.50' },
    { name: 'Amazon Music', Icon: TbBrandAmazon, color: '#00A8E1', price: '$1.50' },
    { name: 'Pandora Premium', Icon: SiPandora, color: '#005483', price: '$1.50' },
    { name: 'Qobuz', Icon: FaMusic, color: '#0070EF', price: '$1.50' },
    { name: 'Napster', Icon: FaMusic, color: '#FF6600', price: '$1.50' },
    { name: 'iHeartRadio', Icon: FaMusic, color: '#C6002B', price: '$1.50' },
    { name: 'Audiomack', Icon: FaMusic, color: '#FFA200', price: '$1.50' },
  ],
  livetv: [
    { name: 'IPTV Premium', Icon: FaTv, color: '#22D3EE', price: '$3.00' },
    { name: 'IPTV All-in-One', Icon: FaTv, color: '#8B5CF6', price: '$5.00' },
    { name: 'YouTube TV', Icon: SiYoutube, color: '#FF0000', price: '$2.00' },
    { name: 'Sling TV', Icon: FaTv, color: '#F36F21', price: '$1.50' },
    { name: 'Philo', Icon: FaTv, color: '#00AEEF', price: '$1.50' },
    { name: 'fuboTV', Icon: FaTv, color: '#E74C3C', price: '$2.00' },
    { name: 'DirecTV Stream', Icon: FaTv, color: '#00A8E1', price: '$2.00' },
    { name: 'Vidgo', Icon: FaTv, color: '#FF5F00', price: '$1.50' },
    { name: 'Frndly TV', Icon: FaTv, color: '#FF6B35', price: '$1.50' },
  ],
  sports: [
    { name: 'DAZN', Icon: SiDazn, color: '#F5F5F5', price: '$2.00' },
    { name: 'ESPN+', Icon: FaBasketballBall, color: '#FF0033', price: '$1.50' },
    { name: 'beIN SPORTS', Icon: FaFutbol, color: '#FFCC00', price: '$2.00' },
    { name: 'fuboTV Sports', Icon: FaFutbol, color: '#E74C3C', price: '$2.00' },
    { name: 'NBA League Pass', Icon: SiNba, color: '#17408B', price: '$2.50' },
    { name: 'NFL Game Pass', Icon: FaFutbol, color: '#013369', price: '$2.50' },
    { name: 'MLB.TV', Icon: SiMlb, color: '#002D72', price: '$2.00' },
    { name: 'F1 TV Pro', Icon: SiF1, color: '#E10600', price: '$2.00' },
    { name: 'UFC Fight Pass', Icon: SiUfc, color: '#D20A0A', price: '$2.00' },
    { name: 'WWE Network', Icon: SiWwe, color: '#000000', price: '$1.50' },
    { name: 'Eurosport', Icon: FaFutbol, color: '#003DA6', price: '$1.50' },
    { name: 'Sky Sports', Icon: FaFutbol, color: '#0072CE', price: '$2.50' },
  ],
  gaming: [
    { name: 'Xbox Game Pass', Icon: IoGameController, color: '#107C10', price: '$2.00' },
    { name: 'PlayStation Plus', Icon: SiPlaystation, color: '#003791', price: '$2.00' },
    { name: 'Nintendo Online', Icon: SiNintendoswitch, color: '#E60012', price: '$1.50' },
    { name: 'EA Play', Icon: SiEa, color: '#FF4747', price: '$1.50' },
    { name: 'Ubisoft+', Icon: SiUbisoft, color: '#0070CC', price: '$2.00' },
    { name: 'Discord Nitro', Icon: SiDiscord, color: '#5865F2', price: '$1.50' },
    { name: 'Steam Wallet', Icon: SiSteam, color: '#66C0F4', price: '$1.50' },
    { name: 'Epic Games Credits', Icon: SiEpicgames, color: '#FFFFFF', price: '$1.50' },
    { name: 'Twitch Turbo', Icon: SiTwitch, color: '#9146FF', price: '$1.50' },
    { name: 'GeForce NOW', Icon: SiNvidia, color: '#76B900', price: '$2.00' },
    { name: 'Roblox Premium', Icon: SiRoblox, color: '#E2231A', price: '$1.50' },
  ],
  apps: [
    { name: 'NordVPN', Icon: SiNordvpn, color: '#4687FF', price: '$1.50' },
    { name: 'ExpressVPN', Icon: FaShieldAlt, color: '#DA3940', price: '$2.00' },
    { name: 'Surfshark', Icon: FaShieldAlt, color: '#178AE4', price: '$1.50' },
    { name: 'Canva Pro', Icon: SiCanva, color: '#00C4CC', price: '$1.50' },
    { name: 'CapCut Pro', Icon: FaCut, color: '#000000', price: '$1.50' },
    { name: 'Adobe Creative Cloud', Icon: SiAdobecreativecloud, color: '#FF0000', price: '$3.00' },
    { name: 'Microsoft 365', Icon: FaCloud, color: '#D83B01', price: '$2.00' },
    { name: 'Google One', Icon: FaCloud, color: '#4285F4', price: '$1.50' },
    { name: 'Dropbox Plus', Icon: SiDropbox, color: '#0061FF', price: '$1.50' },
    { name: 'Notion Pro', Icon: SiNotion, color: '#FFFFFF', price: '$1.50' },
    { name: 'ChatGPT Plus', Icon: SiOpenai, color: '#00A67E', price: '$3.00' },
    { name: 'Midjourney', Icon: FaBrain, color: '#FFFFFF', price: '$3.00' },
    { name: 'Zoom Pro', Icon: SiZoom, color: '#2D8CFF', price: '$2.00' },
    { name: '1Password', Icon: FaShieldAlt, color: '#0094F5', price: '$1.50' },
    { name: 'LastPass', Icon: FaShieldAlt, color: '#D32D27', price: '$1.50' },
  ],
  learning: [
    { name: 'Duolingo Plus', Icon: SiDuolingo, color: '#58CC02', price: '$1.50' },
    { name: 'Grammarly Premium', Icon: SiGrammarly, color: '#15C39A', price: '$2.00' },
    { name: 'LinkedIn Premium', Icon: SiLinkedin, color: '#0A66C2', price: '$2.50' },
    { name: 'Skillshare', Icon: FaBook, color: '#00FF84', price: '$1.50' },
    { name: 'MasterClass', Icon: FaBook, color: '#000000', price: '$2.00' },
    { name: 'Coursera Plus', Icon: SiCoursera, color: '#0056D2', price: '$2.50' },
    { name: 'Udemy Pro', Icon: SiUdemy, color: '#A435F0', price: '$1.50' },
    { name: 'Blinkist', Icon: FaBook, color: '#25C685', price: '$1.50' },
    { name: 'Scribd', Icon: SiScribd, color: '#1A7BBA', price: '$1.50' },
    { name: 'Audible', Icon: SiAudible, color: '#F8991C', price: '$2.00' },
    { name: 'Kindle Unlimited', Icon: TbBrandAmazon, color: '#FF9900', price: '$1.50' },
    { name: 'Headspace', Icon: FaBrain, color: '#F47D31', price: '$1.50' },
    { name: 'Calm', Icon: FaBrain, color: '#46BAD7', price: '$1.50' },
  ],
};

const ServiceBrowser = () => {
  const [activeCategory, setActiveCategory] = useState('movies');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    const categoryServices = services[activeCategory as keyof typeof services] || [];
    
    if (!searchQuery.trim()) return categoryServices;
    
    return categoryServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  // Search across all categories
  const allFilteredServices = useMemo(() => {
    if (!searchQuery.trim()) return null;
    
    const results: { category: string; services: typeof services.movies }[] = [];
    
    Object.entries(services).forEach(([categoryId, categoryServices]) => {
      const matched = categoryServices.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matched.length > 0) {
        results.push({ category: categoryId, services: matched });
      }
    });
    
    return results;
  }, [searchQuery]);

  const totalServices = useMemo(() => {
    return Object.values(services).reduce((acc, cat) => acc + cat.length, 0);
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-neon">Browse Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {totalServices}+ premium services at unbeatable prices. All verified and ready for instant delivery.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search: Netflix, Spotify, Xbox..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            const categoryCount = services[category.id as keyof typeof services]?.length || 0;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 text-sm font-medium
                  ${isActive 
                    ? 'tab-active border-primary' 
                    : 'border-border hover:border-muted-foreground/50 text-muted-foreground hover:text-foreground'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                <span className="text-xs opacity-60">({categoryCount})</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        {searchQuery && allFilteredServices && allFilteredServices.length > 0 ? (
          <div className="space-y-8">
            {allFilteredServices.map(({ category, services }) => (
              <div key={category}>
                <h3 className="font-display text-lg font-semibold mb-4 text-muted-foreground capitalize">
                  {categories.find(c => c.id === category)?.label}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.name}
                      name={service.name}
                      Icon={service.Icon}
                      iconColor={service.color}
                      price={service.price}
                      inStock={true}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                Icon={service.Icon}
                iconColor={service.color}
                price={service.price}
                inStock={true}
              />
            ))}
          </div>
        )}

        {/* No results */}
        {searchQuery && allFilteredServices && allFilteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No services found for "{searchQuery}"</p>
            <p className="text-sm text-muted-foreground mt-2">Try a different search term or browse categories above</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceBrowser;
