import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const SkillsSection = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-400",
      glowColor: "shadow-[0_0_30px_rgba(0,255,255,0.3)]",
      technologies: [
        { name: "React", icon: "⚛️", level: 95, description: "Building dynamic UIs" },
        { name: "TypeScript", icon: "📘", level: 90, description: "Type-safe development" },
        { name: "Next.js", icon: "▲", level: 85, description: "Full-stack React framework" },
        { name: "Tailwind CSS", icon: "💨", level: 90, description: "Utility-first styling" },
        { name: "HTML5 & CSS3", icon: "🎭", level: 95, description: "Semantic & Modern styling" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-purple-500 to-pink-600",
      borderColor: "border-purple-400",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      technologies: [
        { name: "Node.js", icon: "💚", level: 88, description: "Server-side JavaScript" },
        { name: "Express.js", icon: "🚄", level: 85, description: "Web application framework" },
        { name: "Python", icon: "🐍", level: 80, description: "Versatile programming" },
        { name: "PostgreSQL", icon: "🐘", level: 78, description: "Relational database" },
        { name: "GraphQL", icon: "📊", level: 75, description: "Query language for APIs" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-400",
      glowColor: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
      technologies: [
        { name: "Git & GitHub", icon: "📚", level: 92, description: "Version control system" },
        { name: "Docker", icon: "🐳", level: 80, description: "Containerization platform" },
        { name: "AWS", icon: "☁️", level: 75, description: "Cloud infrastructure" },
        { name: "Jest & RTL", icon: "🧪", level: 82, description: "Testing frameworks" },
        { name: "VS Code", icon: "💻", level: 95, description: "Code editor of choice" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
       <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-3000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-green-400/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-sm">SKILLS.matrix</span>
          </div>
          
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            "bg-gradient-to-r from-green-400 via-cyan-400 to-green-400",
            "bg-clip-text text-transparent",
            "filter drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]"
          )}>
            Technical Skill
          </h2>
          
          <p className="max-w-3xl mx-auto text-gray-400 md:text-lg">
            A curated list of my core technical competencies and tools I use to build modern, high-performance web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                "relative group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8",
                "border transition-all duration-500 hover:scale-105",
                category.borderColor,
                "hover:" + category.glowColor
              )}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={cn(
                  "text-4xl p-4 rounded-xl bg-gradient-to-br shadow-lg",
                  category.color
                )}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>

              {/* Technologies List */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="group/tech relative"
                    onMouseEnter={() => setHoveredTech(`${category.title}-${tech.name}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{tech.icon}</span>
                        <h4 className="text-white font-semibold">{tech.name}</h4>
                      </div>
                      <span className="text-cyan-400 font-mono text-sm">{tech.level}%</span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden border border-gray-600/50">
                      <div 
                        className={cn(
                          "h-full bg-gradient-to-r rounded-full transition-all duration-1000 ease-out",
                          category.color
                        )}
                        style={{ 
                          width: `${tech.level}%`,
                        }}
                      />
                    </div>
                    
                    {/* Description - shows on hover */}
                    <div className={cn(
                      "text-gray-400 text-sm mt-2 transition-all duration-300 h-5",
                      hoveredTech === `${category.title}-${tech.name}` 
                        ? "opacity-100" 
                        : "opacity-0"
                    )}>
                      {tech.description}
                    </div>
                  </div>
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