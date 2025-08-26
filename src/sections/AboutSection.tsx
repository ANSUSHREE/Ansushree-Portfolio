import type { FC } from 'react';
import { User, Code2, Rocket, BrainCircuit, Atom } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection: FC = () => {
  const coreDirectives = [
    {
      icon: Code2,
      title: "Code Craftsmanship",
      description: "Building clean, efficient, and scalable software."
    },
    {
      icon: BrainCircuit,
      title: "Creative Problem Solving",
      description: "Architecting elegant solutions for complex challenges."
    },
    {
      icon: Rocket,
      title: "Impactful Innovation",
      description: "Pushing boundaries to create meaningful user experiences."
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-sm">USER_PROFILE.md</span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            "bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400",
            "bg-clip-text text-transparent",
            "filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          )}>
            Deconstructing The Developer
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 md:text-lg">
            Beyond the code, there's a story of passion and a relentless drive to build the future.
          </p>
        </div>

        {/* Main Content Grid: Biography and Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className={cn(
            "bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 h-full",
            "border border-purple-400/30"
          )}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-purple-400 ml-4 font-mono text-sm">/biography.txt</span>
            </div>
            <div className="text-gray-300 space-y-5 leading-relaxed text-base">
              <p>
                My journey into technology was sparked by a fascination with how abstract code could create tangible, interactive worlds. This curiosity quickly evolved into a passion for not just using technology, but architecting it.
              </p>
              <p>
                Today, I thrive in the space where logic meets creativity. I specialize in building robust, full-stack applications, meticulously designing everything from the backend infrastructure to the pixel-perfect user interface. I believe the best products are born from a deep understanding of user needs and a commitment to quality craftsmanship.
              </p>
              <p>
                For me, development is a continuous cycle of learning. I'm constantly exploring new technologies, not just to keep up, but to stay ahead and push the boundaries of what's possible in the digital space.
              </p>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="relative w-full mx-auto group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
            <div className="relative p-1 bg-gray-900 rounded-xl leading-none">
              <div className="relative p-2 bg-gray-900 rounded-lg">
                <img
                  src="https://i.imgur.com/7326Ade.jpeg" //Add Your image URL here
                  alt="Developer Avatar or stylized portrait"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>

        </div>
        
        {/* Core Directives Card (Full Width Below) */}
        <div className="mt-20">
          <div className={cn(
              "bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8",
              "border border-cyan-400/30"
            )}>
            <div className="flex items-center gap-4 mb-6 max-w-max mx-auto">
                <Atom size={28} className="text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Core Directives</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {coreDirectives.map((directive) => (
                <div key={directive.title} className="group flex flex-col items-center text-center gap-4 p-4 rounded-lg transition-all duration-300">
                  <div className="p-3 bg-gray-900/60 rounded-full border border-gray-700 group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300">
                    <directive.icon className="w-7 h-7 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">{directive.title}</h4>
                    <p className="text-gray-400 text-sm">{directive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
       {/* Add the animation for the image frame */}
       <style jsx>{`
        @keyframes tilt {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(0.5deg);
          }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;