
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import About from '../components/About';
import { CircuitBoard, Code, Database, PaintBucket } from 'lucide-react';

const skills = [
  {
    category: "3D Design",
    icon: <PaintBucket className="text-neon-purple" size={24} />,
    items: ["Blender", "3DS Max", "Substance Painter", "Archviz", "3D Modeling", "Texturing"]
  },
  {
    category: "Development",
    icon: <Code className="text-neon-cyan" size={24} />,
    items: ["HTML/CSS", "JavaScript", "React", "Node.js", "TypeScript", "Responsive Design"]
  },
  {
    category: "Automation",
    icon: <CircuitBoard className="text-neon-purple" size={24} />,
    items: ["Puppet", "Ansible", "CI/CD", "Shell Scripting", "Infrastructure as Code", "Monitoring"]
  },
  {
    category: "Database & Cloud",
    icon: <Database className="text-neon-cyan" size={24} />,
    items: ["SQL", "NoSQL", "AWS", "Azure", "Docker", "Kubernetes"]
  }
];

const AboutPage: React.FC = () => {
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
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-foreground/80">
            Learn more about my journey, skills, and approach to creating digital solutions.
          </p>
        </motion.div>

        <About />
        
        <div className="my-24">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-24 glass-card p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">My Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neon-purple">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Understand</h3>
              <p className="text-sm text-foreground/70">
                I start by deeply understanding the problem and requirements, ensuring solutions address the real needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neon-cyan">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Create</h3>
              <p className="text-sm text-foreground/70">
                I approach each project with creativity and technical expertise, building solutions that are both functional and elegant.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neon-purple">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Refine</h3>
              <p className="text-sm text-foreground/70">
                I continuously iterate and improve, paying attention to details that make the difference between good and exceptional.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
