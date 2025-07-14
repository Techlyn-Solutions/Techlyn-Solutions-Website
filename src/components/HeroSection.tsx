
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-navy min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12 animate-fade-in-up">
          {/* Main Headlines */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Empowering Your Business
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              with <span className="text-red">Intelligent Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto mt-8">
              From AI Agents to Smart Systems — we design, build, and deploy automation that works.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">13+</div>
              <div className="text-blue-100 text-lg font-medium">AI Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100 text-lg font-medium">Users Impacted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">Global</div>
              <div className="text-blue-100 text-lg font-medium">Clientele</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-navy px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg rounded-full"
              onClick={() => scrollToSection('portfolio')}
            >
              👁 Explore Portfolio →
            </Button>
            <Button 
              size="lg"
              className="bg-red hover:bg-red/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg rounded-full"
              onClick={() => scrollToSection('contact')}
            >
              📞 Contact Us
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-full border border-white/30"
              onClick={() => {
                const videoSection = document.getElementById('intro-video');
                if (videoSection) {
                  videoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Play className="w-5 h-5 mr-2" />
              ▶ Watch Intro Video
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div id="intro-video" className="mt-20 animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">🎥 Our Story in 60 Seconds</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/FTobKLiDl0Y"
                title="Techlyn Solutions Introduction"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-blue-100 mt-4 text-center">
              Discover how we're revolutionizing business automation with AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
