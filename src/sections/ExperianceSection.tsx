import type { FC } from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const experience = [
  {
    role: "Software Developer",
    company: "AALION’s INFOTECH",
    date: "Jun 2024 – Present",
    tasks: [
      "Developed and deployed 5 full-stack web applications using MERN stack from scratch.",
      "Designed secure REST APIs with JWT authentication, ensuring system stability.",
      "Led a team of 3 developers, assigning tasks, conducting reviews, and delivering on Agile sprints.",
      "Integrated AWS (S3, EC2) for deployment and storage, reducing downtime by 15%.",
      "Optimized database queries, achieving 20% faster API response times."
    ],
    tags: ["React", "Node.js", "MongoDB", "Express.js", "AWS"]
  },
  {
    role: "Web Developer Intern",
    company: "CORIZO",
    date: "Jan 2024 – Jun 2024",
    tasks: [
      "Built MERN stack features and implemented REST APIs for production-ready apps.",
      "Applied Git, Bootstrap, and Material-UI for version control and UI enhancements.",
      "Designed and optimized both SQL & NoSQL schemas for scalable backend systems."
    ],
    tags: ["React", "Node.js", "MongoDB", "MySQL", "Bootstrap"]
  }
];

const ExperienceSection: FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-full">
            <Briefcase className="w-5 h-5 text-cyan-400"/>
            <span className="text-cyan-400 font-mono text-sm">CAREER.log</span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            "bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400",
            "bg-clip-text text-transparent",
            "filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          )}>
            Career Trajectory
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 md:text-lg">
            A timeline of my professional roles and key contributions in the tech industry.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700/50" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div 
                key={index}
                className="relative pl-12"
              >
                {/* Timeline Icon */}
                <div className="z-10 absolute left-0 top-1 -translate-x-1/2 p-2 bg-gray-800 border-2 border-cyan-400 rounded-full">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className={cn(
                  "group relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl",
                  "border border-gray-700/80 transition-all duration-300",
                  "hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/10"
                )}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <span className="text-sm font-mono text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-purple-300 mb-4 text-lg">@ {item.company}</p>
                  
                  <ul className="space-y-3 text-gray-300 mb-6">
                    {item.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                   {/* Tech Tags */}
                   <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-mono rounded-full border border-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
