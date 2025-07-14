import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cog, MessageSquare, Mail, Phone, Zap } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Agentic AI Tools & Custom Agents',
    description: 'Intelligent agents that work autonomously to solve complex business problems and automate decision-making processes.',
  },
  {
    icon: Cog,
    title: 'Business Process Automation',
    description: 'Streamline your operations with smart automation solutions that reduce manual work and increase efficiency.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Deploy conversational AI that provides 24/7 customer support and handles complex inquiries naturally.',
  },
  {
    icon: Mail,
    title: 'Email & WhatsApp Automations',
    description: 'Automate your communication workflows with intelligent email and messaging systems that engage customers.',
  },
  {
    icon: Phone,
    title: 'Voice AI for Sales & Scheduling',
    description: 'Human-like voice agents that handle sales calls, appointment scheduling, and customer interactions.',
  },
  {
    icon: Zap,
    title: 'Custom AI Solutions',
    description: 'Tailored artificial intelligence solutions designed specifically for your unique business requirements.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            Our <span className="text-red">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating intelligent automation solutions that transform how businesses operate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-dark-gray group-hover:text-navy transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
