import type { FC } from 'react';
import { Github, ExternalLink, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    category: "Full-Stack Web App",
    title: "Startup Company Website",
    image: "https://i.imgur.com/gxsUjbs.jpeg",
    description:
      "Developed a fully responsive marketing website for a startup with interactive UI, animations, and SEO best practices. Achieved 90+ Lighthouse scores, integrated Google Analytics, and reduced bounce rate by 20% through improved UX flow.",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "HTML5", "GitHub"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    category: "Full-Stack Web App",
    title: "AI-Powered Language Learning & Study Abroad Platform",
    image: "https://i.imgur.com/uTtnTz8.jpeg",
    description:
      "Built a platform for exam prep (IELTS, TOEFL, PTE) and language learning with dashboards for students and teachers. Integrated live video classes, optimized load speed by 40%, improved server response to under 0.5s, and implemented React performance optimizations.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    category: "Frontend App",
    title: "LinkedIn Clone",
    image: "https://i.imgur.com/f2L4GeA.jpeg",
    description:
      "Redesigned LinkedIn web application with full responsiveness, login, posting functionality, dark mode toggle, and real-time database features using Firebase.",
    tags: ["React", "Redux", "Material UI", "Firebase", "Google Auth", "Firestore"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-purple-400/30 rounded-full">
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-mono text-sm">PROJECTS.showcase</span>
          </div>
          <h2
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
              "bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400",
              "bg-clip-text text-transparent",
              "filter drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]"
            )}
          >
            Featured Creations
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 md:text-lg">
            A selection of my work, showcasing my skills in creating modern, functional, and user-centric applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden",
                "border border-gray-700/80 transition-all duration-300",
                "hover:border-purple-400/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10",
                index === 0 ? "md:col-span-2" : ""
              )}
            >
              <div className={cn("flex flex-col", index === 0 ? "md:flex-row" : "")}>
                <div
                  className={cn(
                    "relative overflow-hidden",
                    index === 0 ? "md:w-1/2" : "w-full h-56"
                  )}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>

                <div
                  className={cn(
                    "relative p-8 flex flex-col",
                    index === 0 ? "md:w-1/2" : "w-full"
                  )}
                >
                  <span className="font-mono text-sm text-purple-400 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-300 text-xs font-mono rounded-full border border-cyan-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
