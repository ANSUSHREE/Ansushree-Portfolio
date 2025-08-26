import type { FC } from 'react';
import { LayoutTemplate, ServerCog, PenTool, Layers, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    description: "I build beautiful, responsive, and blazing-fast user interfaces that provide an exceptional user experience.",
    features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"]
  },
  {
    icon: ServerCog,
    title: "Backend Architecture",
    description: "Crafting robust, scalable, and secure server-side logic, databases, and APIs to power your applications.",
    features: ["Node.js & Express", "PostgreSQL / MongoDB", "REST & GraphQL APIs", "Authentication"]
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description: "Seamlessly integrating frontend and backend into cohesive, full-featured applications from concept to deployment.",
    features: ["MERN/PERN Stack", "CI/CD & DevOps", "Cloud Deployment (AWS/Vercel)", "Project Leadership"]
  }
];

const ServicesSection: FC = () => {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-purple-400/30 rounded-full">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-400 font-mono text-sm">SERVICES.config</span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            "bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400",
            "bg-clip-text text-transparent",
            "filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          )}>
            Digital Solutions Architect
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 md:text-lg">
            Crafting high-performance digital experiences from concept to deployment, tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className={cn(
                  "group relative p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl",
                  "border border-gray-700/80 transition-all duration-300",
                  "hover:border-cyan-400/60 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                )}
                style={{ animationDelay: `${index * 150}ms` }} // Staggered animation
              >
                {/* Background radial glow on hover */}
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-radial from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

                <div className="relative z-10">
                  <div className="mb-6 p-4 inline-block bg-gray-900/50 border border-gray-700 rounded-xl group-hover:border-cyan-400 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="border-t border-gray-700/50 pt-6">
                    <h4 className="font-semibold text-cyan-300 mb-4 font-mono">KEY FEATURES:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;