import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const projects = [
  { title: 'AI Sales Voice Assistant', description: 'Human-like calling bot that closes deals' },
  { title: 'Smart Admin AI', description: 'Automates school tasks, records, and communication' },
  { title: 'Social Auto-Poster', description: 'Posts + auto DMs across IG, FB, X' },
  { title: 'Email Handling Agent', description: 'Drafts, replies, and classifies mail' },
  { title: 'WhatsApp News Bot', description: 'Shares updates via chatbot' },
  { title: 'Resume Matcher', description: 'CV parsing + job fit recommender' },
  { title: 'YouTube Automation', description: 'Creates and uploads auto videos' },
  { title: 'AI Chatbots', description: 'Domain-specific bots for customer support' },
  { title: 'Electricity Forecast', description: 'ML dashboard for home usage' },
  { title: 'Face Aging App', description: 'CV-based facial transformation' },
  { title: 'Virtual Researcher', description: 'Auto content finder and summarizer' },
  { title: 'AI Student Tracker', description: 'Reports, alerts, progress monitor' },
  { title: 'Cold Caller Bot', description: 'Voice agent that mimics sales rep' },
  { title: 'Agentic Web Bots', description: 'Resume sorters, CV rankers, etc.' },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            What We've <span className="text-red">Built</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of intelligent automation solutions that are transforming businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-navy bg-white animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-dark-gray group-hover:text-navy transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <a 
                  href="https://github.com/Techlyn-Solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red hover:text-red/80 font-semibold transition-colors duration-300"
                >
                  See Detail <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button 
            size="lg"
            className="bg-navy hover:bg-navy/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-navy/25"
            asChild
          >
            <a href="https://github.com/Techlyn-Solutions" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
