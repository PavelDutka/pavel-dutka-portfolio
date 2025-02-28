
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative glass-card rounded-xl overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-0 transition-transform duration-300">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-neon-purple/20 text-neon-purple/80"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-neon-purple">
          {title}
        </h3>
        
        <p className={`text-sm text-foreground/70 line-clamp-2 transform transition-all duration-500 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'}`}>
          {description}
        </p>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center mt-3 text-neon-cyan font-medium text-sm group-hover:underline transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            View Project <ArrowUpRight size={14} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
