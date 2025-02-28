
import React from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard, Monitor, Box, Workflow } from 'lucide-react';

const timeline = [
  {
    year: "2015",
    title: "Game Development Journey",
    description: "Started exploring game development as a passion project",
    icon: <Monitor className="text-neon-cyan" size={24} />
  },
  {
    year: "2018",
    title: "3D & Archviz Focus",
    description: "Transitioned into 3D modeling and architectural visualization at Polygoniq",
    icon: <Box className="text-neon-purple" size={24} />
  },
  {
    year: "2020",
    title: "Web Development",
    description: "Expanded skillset to include responsive web application development",
    icon: <Monitor className="text-neon-cyan" size={24} />
  },
  {
    year: "2022",
    title: "Automation & DevOps",
    description: "Discovered cybersecurity, IoT, networking, and automation workflows",
    icon: <Workflow className="text-neon-purple" size={24} />
  }
];

const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div 
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neon-purple/5 to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 60%)' }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-foreground/80">
            My journey through technology and creativity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              Originally passionate about game development, I transitioned into 3D modeling and architectural visualization, working at Polygoniq to bring architectural concepts to life.
            </p>
            
            <p className="text-lg">
              Later, I discovered my interest in cybersecurity, IoT, networking, and automation, which has become my main focus. This diverse background allows me to approach problems from multiple perspectives.
            </p>
            
            <blockquote className="border-l-4 border-neon-purple pl-4 py-2 mt-6 glass-card">
              <p className="italic text-foreground/90">
                "Technology and creativity go hand in hand—why choose just one?"
              </p>
            </blockquote>
          </motion.div>
          
          <motion.div 
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-neon-purple before:via-neon-cyan before:to-neon-purple"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-neon-purple/30 glass-card">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-neon-cyan mb-1">{item.year}</span>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
