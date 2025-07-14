
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { TeamSection } from '@/components/TeamSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
};

export default Index;
