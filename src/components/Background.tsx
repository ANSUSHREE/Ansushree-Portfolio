import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const ModernPortfolioBg: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
      canvas.width = width;
      canvas.height = height;
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((dimensions.width * dimensions.height) / 15000);
      
      const colors = [
        'rgba(0, 255, 255, 0.7)',     // Cyan
        'rgba(255, 20, 147, 0.6)',    // Deep Pink
        'rgba(138, 43, 226, 0.7)',    // Blue Violet
        'rgba(255, 215, 0, 0.5)',     // Gold
        'rgba(50, 205, 50, 0.6)',     // Lime Green
        'rgba(255, 69, 0, 0.6)',      // Red Orange
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      particlesRef.current = particles;
    };

    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with unique dark gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a0a0f');      // Deep navy
      gradient.addColorStop(0.3, '#1a1625');    // Dark purple
      gradient.addColorStop(0.7, '#0f1419');    // Dark teal
      gradient.addColorStop(1, '#0d1117');      // Rich black

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        // Boundary collision
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              const opacity = (120 - distance) / 120 * 0.1;
              ctx.strokeStyle = `rgba(100, 255, 218, ${opacity})`; // Teal connection lines
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Base unique dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
      
      {/* Cyberpunk-inspired gradient orbs */}
      <div className={cn(
        "absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl",
        "bg-gradient-to-br from-cyan-500/30 to-purple-600/25",
        "animate-float-slow"
      )} />
      
      <div className={cn(
        "absolute top-1/2 -right-24 w-80 h-80 rounded-full blur-3xl",
        "bg-gradient-to-br from-pink-500/25 to-orange-500/20",
        "animate-float-reverse"
      )} />
      
      <div className={cn(
        "absolute -bottom-24 left-1/3 w-72 h-72 rounded-full blur-3xl",
        "bg-gradient-to-br from-lime-500/15 to-cyan-400/15",
        "animate-float"
      )} />
      
      {/* Enhanced grid with cyan accent */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Subtle noise texture */}
      <div className={cn(
        "absolute inset-0 opacity-[0.015] mix-blend-overlay",
        "bg-noise"
      )} />
      
      {/* Radial vignette with unique tint */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900/60" />
      
      {/* Top fade with purple tint */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-gray-900/90 to-transparent" />
    </div>
  );
};

export default ModernPortfolioBg;