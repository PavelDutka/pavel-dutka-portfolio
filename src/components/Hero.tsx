
import React from 'react';
import { ArrowRight, Sparkle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden circuit-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background pointer-events-none z-0"></div>
      
      {/* Abstract shapes for added visual interest */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-neon-gold/10 to-neon-amber/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-[#8B5CF6]/10 to-neon-bronze/5 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-24 z-10 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 space-y-8 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <motion.span 
                className="text-white block mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Pavel
              </motion.span>
              <motion.span 
                className="text-gradient bg-[length:300%_auto]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Dutka
              </motion.span>
              <motion.span 
                className="inline-block ml-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
              >
                <Sparkle className="h-8 w-8 md:h-10 md:w-10 text-neon-gold animate-pulse" />
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              From <span className="text-neon-gold font-medium text-glow relative">
                3D worlds
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-gold/0 via-neon-gold to-neon-gold/0"></span>
              </span> to <span className="text-neon-amber font-medium text-glow-amber relative">
                automation workflows
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-amber/0 via-neon-amber to-neon-amber/0"></span>
              </span>, 
              I turn <span className="italic">ideas</span> into <span className="font-semibold">reality</span>.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link 
                to="/portfolio" 
                className="px-8 py-4 rounded-lg bg-neon-gold text-black font-medium button-glow transform hover:scale-105 transition-all duration-300 relative overflow-hidden group z-10"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
              
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-lg bg-transparent border border-neon-amber text-neon-amber font-medium group hover:bg-neon-amber/10 transition-all duration-300 relative z-10"
              >
                Let's Talk
                <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full">
              {/* Layered glowing effects */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-gold to-neon-amber opacity-20 animate-pulse-slow"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tl from-neon-gold/40 to-[#8B5CF6]/40 opacity-30 blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-bronze/40 to-[#8B5CF6]/40 opacity-20 blur-xl animate-pulse-slow"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.25, 0.2]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              ></motion.div>
              
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
                animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-10 left-10 w-24 h-24 rounded-full bg-[#8B5CF6]/30 blur-md"
                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div 
                className="absolute top-1/4 -right-16 w-12 h-12 rounded-full bg-neon-amber/20 blur-md"
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
