
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-display font-bold text-white inline-block mb-4 hover:text-neon-gold transition-colors duration-300">
              <span className="text-gradient">Pavel Dutka</span>
            </Link>
            <p className="text-foreground/70 max-w-md">
              3D Artist & Developer specializing in automation, 
              web apps, and 3D visualization.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-foreground/70 hover:text-neon-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-neon-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-foreground/70 hover:text-neon-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-neon-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-foreground/70 hover:text-neon-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-neon-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-foreground/70 hover:text-neon-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-neon-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-gold/20 transition-colors duration-300 hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github size={20} className="text-foreground hover:text-neon-gold transition-colors duration-300" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-gold/20 transition-colors duration-300 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-foreground hover:text-neon-gold transition-colors duration-300" />
              </a>
              <a 
                href="mailto:contact@paveldutka.com" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-gold/20 transition-colors duration-300 hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail size={20} className="text-foreground hover:text-neon-gold transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/5 text-center text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Pavel Dutka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
