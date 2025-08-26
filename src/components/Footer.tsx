import type { FC } from 'react';
import { Github, Linkedin, ArrowUpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer: FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ANSUSHREE', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ansushree-panda/', label: 'LinkedIn' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative mt-24 bg-gray-900/50 backdrop-blur-sm border-t border-cyan-400/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Logo / Name */}
        <div className="navbar__logo">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-white-400 to-gray-400 bg-clip-text text-transparent">
            Ansushree Panda
          </h1>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm font-mono order-last sm:order-none">
          © 2025 Ansushree Panda. All rights reserved.
        </p>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={cn(
                  "group p-2 rounded-full border border-gray-600",
                  "hover:border-cyan-400 transition-all duration-300",
                  "hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]",
                  "hover:scale-110 transform"
                )}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon 
                  size={20} 
                  className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" 
                />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="group p-2 rounded-full border border-gray-600 hover:border-cyan-400 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUpCircle 
              size={20}
              className="text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-transform duration-300"
            />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;