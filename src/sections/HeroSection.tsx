import { useState, useEffect, useMemo } from 'react';
import type { FC } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection: FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(() => [
    'Full Stack Developer',
    'Frontend Engineer',
    'Backend Architect',
    'Problem Solver',
    'GenAI Enthusiast'
  ], []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentWord];
    const shouldDelete = displayText === currentRole && !isDeleting;
    const shouldStartNext = displayText === '' && isDeleting;

    if (shouldDelete) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (shouldStartNext) {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main Content (Name, Role, Description, etc.) stays the same */}
        <div className="relative mb-4 md:mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 relative leading-tight">
            <span className={cn(
              "bg-gradient-to-r from-cyan-400 to-gray-500",
              "bg-clip-text text-transparent",
              "transition-all duration-300",
              "hover:from-gray-400 hover:to-cyan-500",
              "filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]",
              "hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]",
              "cursor-default"
            )}>
              ANSUSHREE PANDA
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-gray-600 opacity-30 blur-xl -z-10 animate-pulse"/>
          </h1>
        </div>
        <div className="mb-6 md:mb-8 h-12 md:h-16 flex items-center justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
            <span className="text-cyan-400">{'> '}</span>
            <span className="font-mono">{displayText}</span>
            <span className="animate-pulse text-lime-400">|</span>
          </h2>
        </div>
        <div className="mb-8 md:mb-12 max-w-3xl mx-auto">
          <div className="bg-gray-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 md:p-6 font-mono text-left text-sm md:text-base">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-cyan-400 ml-4">terminal.js</span>
            </div>
            <div className="text-gray-300 leading-relaxed">
              <span className="text-pink-400">const</span>{' '}
              <span className="text-cyan-400">developer</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-lime-400">{'{'}</span>
              <br />
              <span className="ml-4 text-purple-400">passion</span>
              <span className="text-white">:</span>{' '}
              <span className="text-yellow-400">"Creating digital experiences"</span>
              <span className="text-white">,</span>
              <br />
              <span className="ml-4 text-purple-400">skills</span>
              <span className="text-white">:</span>{' '}
              <span className="text-yellow-400">["React", "Node.js", "TypeScript"]</span>
              <span className="text-white">,</span>
              <br />
              <span className="ml-4 text-purple-400">mission</span>
              <span className="text-white">:</span>{' '}
              <span className="text-yellow-400">"Building the future, one line at a time"</span>
              <br />
              <span className="text-lime-400">{'}'}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className={cn(
              "group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600",
              "text-white font-semibold rounded-full overflow-hidden",
              "transform transition-all duration-300 hover:scale-105",
              "hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code size={20} />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={cn(
              "group px-8 py-4 border-2 border-cyan-400 text-cyan-400",
              "font-semibold rounded-full relative overflow-hidden",
              "transition-all duration-300 hover:text-gray-900",
              "hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: Github, href: 'https://github.com/ANSUSHREE', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/ansushree-panda/', label: 'LinkedIn' },
            { icon: Terminal, href: '#', label: 'CodePen' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className={cn(
                "group p-4 rounded-full border border-gray-600",
                "hover:border-cyan-400 transition-all duration-300",
                "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
                "hover:scale-110 transform"
              )}
              aria-label={label}
            >
              <Icon
                size={24}
                className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
              />
            </a>
          ))}
        </div>
        <div
          className="animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={32} className="text-cyan-400 mx-auto" />
          <p className="text-gray-400 text-sm mt-2">Scroll to explore</p>
        </div>
      </div>

      {/* 👇 FLOATING ICONS RESTORED HERE 👇 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: '⚡', position: 'top-20 left-20' },
          { icon: '🚀', position: 'top-40 right-20' },
          { icon: '💻', position: 'bottom-40 left-10' },
          { icon: '🎯', position: 'bottom-20 right-16' },
          { icon: '⚙️', position: 'top-1/2 left-10' },
          { icon: '🔥', position: 'top-1/3 right-10' },
        ].map(({ icon, position }, index) => (
          <div
            key={index}
            className={cn(
              "absolute text-4xl opacity-20 animate-float-slow",
              position
            )}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* 👇 CUSTOM ANIMATION FOR ICONS RESTORED HERE 👇 */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.3;
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;