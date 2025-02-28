
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import Contact from '../components/Contact';
import { MapPin, Clock, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative pt-24">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 py-16">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Contact Me</span>
          </h1>
          <p className="text-foreground/80">
            Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <Contact />
        
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-neon-purple" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-foreground/70">
                Prague, Czech Republic
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-neon-cyan" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-foreground/70">
                Mon - Fri: 9:00 - 17:00<br />
                Central European Time
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="text-neon-purple" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Remote Work</h3>
              <p className="text-foreground/70">
                Available for projects worldwide<br />
                Remote collaboration welcome
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
