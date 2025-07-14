
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy/95 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e2606a37-61bc-453e-8b84-4321062e427f.png" 
              alt="Techlyn Solutions" 
              className="h-8 w-auto"
            />
            <span className="text-white font-bold text-xl">Techlyn Solutions</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-red transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-red transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-red transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-red transition-colors duration-300 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-red transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            size="sm" 
            className="bg-red hover:bg-red/90 text-white px-6 py-2 font-semibold transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
