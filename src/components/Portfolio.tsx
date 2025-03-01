
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Modern House Archviz",
    description: "High-quality architectural visualization of a contemporary house with before/after comparison.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
    tags: ["3D Visualization", "Architecture", "Blender"],
  },
  {
    id: 2,
    title: "Financial Advisor Website",
    description: "Clean, professional website design for a financial advisory firm with interactive UI elements.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80",
    tags: ["Web Design", "UI/UX", "React"],
  },
  {
    id: 3,
    title: "Puppet Automation Setup",
    description: "Complex infrastructure automation implementation with visual workflow diagrams and monitoring.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80",
    tags: ["Automation", "DevOps", "Infrastructure"],
  }
];

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
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
