import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceBrowser from '@/components/ServiceBrowser';
import HowItWorks from '@/components/HowItWorks';
import SupportSection from '@/components/SupportSection';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Starfield Background */}
      <Starfield />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ServiceBrowser />
        <HowItWorks />
        <SupportSection />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
