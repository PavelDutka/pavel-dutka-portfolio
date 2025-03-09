
import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

// Select a subset of projects to display on the homepage
const projects = projectsData.filter(p => [1, 4, 5, 7, 8, 9].includes(p.id));

const Portfolio: React.FC = () => {
  return (
    <section className="py-24 relative" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-foreground/80">
            A selection of my work in 3D visualization, web development, and automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="block">
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
