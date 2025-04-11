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

    // You don't need to send anything here, Netlify will automatically handle form submissions
    
    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
    // Optionally, show success message or alert
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section className="py-12 md:py-24 relative overflow-hidden w-full" id="contact">
      <div 
        className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-neon-amber/5 to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 60%, 100% 100%, 0 100%)' }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-foreground/80">
            Want to collaborate? Have a project in mind? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold flex items-center">
              <MessageSquare className="mr-3 text-neon-gold" size={24} />
              Get in Touch
            </h3>
            
            <p className="text-base md:text-lg">
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
            
          </motion.div>
          
          <motion.div 
            className="space-y-5 glass-card p-5 sm:p-6 rounded-xl w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form 
              name="contact-form"
              method="POST"
              onSubmit={handleSubmit}
              data-netlify="true"
            >
              {/* Hidden form name field */}
              <input type="hidden" name="form-name" value="contact-form" />
              
              <div className="space-y-5">
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
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
