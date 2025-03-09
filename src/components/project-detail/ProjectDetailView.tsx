
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';
import ProjectHeader from './ProjectHeader';
import ProjectDetailsSidebar from './ProjectDetailsSidebar';
import ProjectGallery from './ProjectGallery';

interface ProjectDetailViewProps {
  project: Project;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:col-span-2">
          <ProjectHeader 
            title={project.title}
            description={project.description}
            fullDescription={project.fullDescription}
            tags={project.tags}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        </div>
        
        <ProjectDetailsSidebar 
          client={project.client}
          year={project.year}
          category={project.category}
          tools={project.tools}
        />
      </motion.div>
      
      <ProjectGallery 
        images={project.gallery} 
        title={project.title} 
      />
    </div>
  );
};

export default ProjectDetailView;
