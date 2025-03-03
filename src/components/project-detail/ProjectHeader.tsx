
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectHeaderProps {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  description,
  fullDescription,
  tags,
  liveLink,
  repoLink,
}) => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-gradient">{title}</span>
      </h1>
      
      <p className="text-lg mb-8 text-foreground/90">
        {description}
      </p>
      
      <div className="prose prose-invert max-w-none mb-8">
        {fullDescription.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple/80 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-4">
        {liveLink && (
          <button 
            className="inline-flex items-center bg-neon-gold hover:bg-neon-gold/80 text-black font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer"
            onClick={() => window.open(liveLink, '_blank', 'noopener,noreferrer')}
          >
            View Live <ExternalLink size={16} className="ml-2" />
          </button>
        )}
        
        {repoLink && (
          <button 
            className="inline-flex items-center bg-white/10 hover:bg-white/15 text-white font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer"
            onClick={() => window.open(repoLink, '_blank', 'noopener,noreferrer')}
          >
            View Code <Github size={16} className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectHeader;
