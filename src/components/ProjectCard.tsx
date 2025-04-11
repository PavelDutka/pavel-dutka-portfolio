import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  id?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
  id
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine the link - use provided link or generate project detail page link
  const projectLink = link || (id ? `/project/${id}` : undefined);

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
      
      {/* Gradient overlay - always visible but more opaque on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/70 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-0 transition-transform duration-300">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white">
          {title}
        </h3>
        
        <p className={`text-sm text-white/90 line-clamp-2 transform transition-all duration-500 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'}`}>
          {description}
        </p>
        
        {projectLink && (
          <Link
            to={projectLink}
            className="inline-flex items-center mt-3 text-neon-gold font-medium text-sm group-hover:underline transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            View Project <ArrowUpRight size={14} className="ml-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
