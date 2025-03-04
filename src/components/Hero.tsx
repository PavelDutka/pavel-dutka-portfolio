
import React from 'react';
import { ArrowRight, Sparkle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden circuit-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-24 z-10 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white block mb-2">Pavel</span>
              <span className="text-gradient bg-[length:300%_auto]">Dutka</span>
              <span className="inline-block ml-2">
                <Sparkle className="h-8 w-8 md:h-10 md:w-10 text-neon-gold animate-pulse" />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-2xl leading-relaxed">
              From <span className="text-neon-gold font-medium text-glow">3D worlds</span> to <span className="text-neon-amber font-medium text-glow-amber">automation workflows</span>, 
              I turn <span className="italic">ideas</span> into <span className="font-semibold">reality</span>.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                to="/portfolio" 
                className="px-8 py-4 rounded-lg bg-neon-gold text-black font-medium button-glow transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Link>
              
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-lg bg-transparent border border-neon-amber text-neon-amber font-medium group hover:bg-neon-amber/10 transition-all duration-300"
              >
                Let's Talk
                <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-gold to-neon-amber opacity-20 animate-pulse-slow"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-neon-gold/40 to-[#8B5CF6]/40 opacity-30 blur-2xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-bronze/40 to-[#8B5CF6]/40 opacity-20 blur-xl animate-pulse-slow"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden animated-border">
                <img 
                  src="/lovable-uploads/f6225ebf-7aed-4896-a11a-9e0fedf4d766.png" 
                  alt="Pavel Dutka" 
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
              
              {/* Floating accent elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-neon-gold/30 blur-md"
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-8 left-10 w-20 h-20 rounded-full bg-[#8B5CF6]/30 blur-md"
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
