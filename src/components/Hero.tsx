
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden circuit-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-24 z-10 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight fade-in">
              <span className="text-white">Pavel</span>{' '}
              <span className="text-gradient">Dutka</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl fade-in delay-100">
              From <span className="text-neon-purple font-medium">3D worlds</span> to <span className="text-neon-cyan font-medium">automation workflows</span>, I turn ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start fade-in delay-200">
              <Link 
                to="/portfolio" 
                className="px-8 py-3 rounded-lg bg-neon-purple text-white font-medium button-glow"
              >
                View My Work
              </Link>
              
              <Link 
                to="/contact" 
                className="px-8 py-3 rounded-lg bg-transparent border border-neon-cyan text-neon-cyan font-medium group hover:bg-neon-cyan/10 transition-all duration-300"
              >
                Let's Talk
                <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center fade-in delay-300">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan opacity-20 animate-pulse-slow"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden animated-border">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pavel Dutka" 
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
