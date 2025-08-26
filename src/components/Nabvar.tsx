import { useState, useEffect, useMemo } from "react";
import type { FC } from "react";
import { Home, User, Settings, Zap, Rocket, Briefcase, Mail, Menu, X } from "lucide-react";

// Define a type for the navigation link objects
type NavLink = {
    name: string;
    href: string;
    id: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
};

const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("home");

    const navLinks = useMemo<NavLink[]>(() => [
        { name: 'Home', href: '#home', id: 'home', icon: Home },
        { name: 'About', href: '#about', id: 'about', icon: User },
        { name: 'Services', href: '#services', id: 'services', icon: Settings },
        { name: 'Skills', href: '#skills', id: 'skills', icon: Zap },
        { name: 'Projects', href: '#projects', id: 'projects', icon: Rocket },
        { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
        { name: 'Contact', href: '#contact', id: 'contact', icon: Mail }
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            
            // Update scroll indicator
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            const indicator = document.getElementById('scroll-indicator');
            if (indicator) {
                indicator.style.transform = `scaleX(${scrolled / 100})`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-25% 0px -75% 0px',
            }
        );

        navLinks.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            navLinks.forEach((link) => {
                const section = document.querySelector(link.href);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [navLinks]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                if (isOpen) setIsOpen(false);
            }
        }
    };

    return (
        <>
            {/* Scroll Indicator */}
            <div 
                id="scroll-indicator"
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transform-gpu origin-left scale-x-0 transition-transform duration-300"
            />
            
            <nav className={`fixed top-0 left-0 w-full z-40 px-4 md:px-8 py-4 transition-all duration-500 ease-out ${
                isScrolled 
                    ? 'bg-slate-900/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20' 
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="navbar__logo flex items-center gap-2">
                        <img 
                            src="/ap_logo.svg" 
                            alt="Logo" 
                            className="h-10 w-10 object-contain hover:scale-105 transition-transform duration-300"
                        />
                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-white-400 to-gray-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient_3s_ease-in-out_infinite] cursor-pointer hover:scale-105 transition-transform duration-300">
                            ANSUSHREE PANDA
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={handleSmoothScroll}
                                    className={`relative group flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ease-out overflow-hidden ${
                                        activeLink === link.id
                                            ? 'text-white bg-gradient-to-r from-cyan-500/30 to-gray-500/30 border border-white/20'
                                            : 'text-white/70 hover:text-white hover:bg-white/10'
                                    }`}
                                    style={{
                                        animation: `slideInDown 0.6s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                    
                                    <IconComponent 
                                        size={18} 
                                        className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
                                    />
                                    <span className="relative z-10">{link.name}</span>
                                    
                                    {/* Active indicator */}
                                    {activeLink === link.id && (
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <X size={24} className="text-white transition-transform duration-300 rotate-90" />
                        ) : (
                            <Menu size={24} className="text-white transition-transform duration-300" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-30 transition-all duration-500 ease-out ${
                isOpen ? 'visible' : 'invisible'
            }`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={() => setIsOpen(false)}
                />
                
                {/* Sidebar */}
                <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-slate-900/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-500 ease-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
                        {navLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={handleSmoothScroll}
                                    className={`flex flex-col items-center gap-3 p-6 rounded-2xl w-full max-w-[200px] transition-all duration-300 ${
                                        activeLink === link.id
                                            ? 'text-white bg-white/10 scale-105 border border-white/20'
                                            : 'text-white/70 hover:text-white hover:bg-white/5 hover:scale-105'
                                    }`}
                                    style={{
                                        animation: isOpen ? `slideInRight 0.4s ease-out ${index * 0.05}s both` : ''
                                    }}
                                >
                                    <IconComponent size={28} className="mb-1" />
                                    <span className="font-medium text-lg">{link.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes slideInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;