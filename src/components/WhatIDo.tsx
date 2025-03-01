
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Layers className="w-10 h-10 text-neon-gold" />,
    title: "3D Visualization",
    description: "Creating photorealistic architectural visualizations and immersive 3D environments that bring concepts to life."
  },
  {
    icon: <Code className="w-10 h-10 text-neon-gold" />,
    title: "Web Development",
    description: "Building responsive, modern web applications with clean code and intuitive user interfaces."
  },
  {
    icon: <Cpu className="w-10 h-10 text-neon-gold" />,
    title: "Automation",
    description: "Designing and implementing efficient automation solutions that streamline workflows and increase productivity."
  }
];

const WhatIDo: React.FC = () => {
  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">What I Do</span>
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            Combining technical expertise with creative vision to deliver exceptional results across multiple domains.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-xl h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-full bg-background/80 flex items-center justify-center mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-foreground/70 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
