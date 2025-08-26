import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';

// Data is now sourced directly from the image you provided.
const skillCategories = [
  { 
    title: "Frontend", 
    skills: ["React", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Vercel"] 
  },
  { 
    title: "Backend", 
    skills: ["Node.js", "Express.js", "JWT"] 
  },
  { 
    title: "Databases", 
    skills: ["PostgreSQL (RDS)", "MongoDB (Mongoose)", "MySQL"] 
  },
  { 
    title: "Cloud & DevOps", 
    skills: ["AWS (S3, EC2)", "GitHub Actions", "Git", "GitHub"] 
  },
  { 
    title: "Developer Tools", 
    skills: ["Postman", "VS Code"] 
  },
  { 
    title: "Programming Languages", 
    skills: ["Java", "Python", "JavaScript", "TypeScript"] 
  },
  { 
    title: "Additional Knowledge", 
    skills: ["Data Analysis", "DBMS", "Cloud Computing"] 
  },
  { 
    title: "Soft Skills", 
    skills: ["Leadership", "Teamwork", "Adaptability", "Problem solving"] 
  }
];

const SkillsSection: FC = () => {
  return (
    <section id="tech-stack" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-green-400/30 rounded-full">
            <Zap className="w-5 h-5 text-green-400"/>
            <span className="text-green-400 font-mono text-sm">SKILLS & EXPERTISE</span>
          </div>
          
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            "bg-gradient-to-r from-green-400 via-cyan-400 to-green-400",
            "bg-clip-text text-transparent",
            "filter drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]"
          )}>
            Core Competencies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={cn(
                "relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6",
                "border border-gray-700/60 transition-all duration-300 hover:border-cyan-400/50"
              )}
            >
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-cyan-400/10 text-cyan-300 text-sm font-mono rounded-full border border-cyan-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;