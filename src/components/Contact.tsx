
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Add actual form submission logic here
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div 
        className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-neon-amber/5 to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 60%, 100% 100%, 0 100%)' }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-foreground/80">
            Want to collaborate? Have a project in mind? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold flex items-center">
              <MessageSquare className="mr-3 text-neon-gold" size={24} />
              Get in Touch
            </h3>
            
            <p className="text-lg">
              Whether you're looking for a 3D visualization, need help with automation, or want to discuss a web project, I'm here to bring your ideas to life.
            </p>
            
            <div className="flex items-center space-x-3 text-foreground/80">
              <Mail className="text-neon-amber" size={20} />
              <a 
                href="mailto:pavel@paveldutka.com" 
                className="hover:text-neon-amber transition-colors duration-300"
              >
                pavel@paveldutka.com
              </a>
            </div>
            
            <blockquote className="border-l-4 border-neon-amber pl-4 py-2 mt-6 glass-card">
              <p className="italic text-foreground/90">
                "Want to collaborate? Let's talk!"
              </p>
            </blockquote>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6 glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-neon-gold focus:ring-1 focus:ring-neon-gold outline-none transition-all duration-300"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-neon-gold focus:ring-1 focus:ring-neon-gold outline-none transition-all duration-300"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-neon-gold focus:ring-1 focus:ring-neon-gold outline-none transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-neon-gold text-black font-medium button-glow flex items-center justify-center"
            >
              Send Message
              <Send size={18} className="ml-2" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
