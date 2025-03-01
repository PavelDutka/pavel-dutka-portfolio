
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import ProjectCard from '../components/ProjectCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Modern House Archviz",
    description: "High-quality architectural visualization of a contemporary house with before/after comparison. Created using Blender and post-processed in Photoshop for maximum visual impact.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
    tags: ["3D Visualization", "Architecture", "Blender"],
    category: "3d"
  },
  {
    id: 2,
    title: "Mountain Cabin Visualization",
    description: "Realistic render of a mountain retreat with attention to atmospheric lighting and environmental details. Created for a luxury real estate developer's marketing campaign.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=80",
    tags: ["3D Visualization", "Environment", "Lighting"],
    category: "3d"
  },
  {
    id: 3,
    title: "Financial Advisor Website",
    description: "Clean, professional website design for a financial advisory firm with interactive UI elements. Built with React and includes custom charts, calculators, and client portal.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80",
    tags: ["Web Design", "UI/UX", "React"],
    category: "web"
  },
  {
    id: 4,
    title: "Restaurant Ordering App",
    description: "Mobile-friendly web application for a restaurant chain, allowing customers to browse the menu, place orders, and make payments online.",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&w=2000&q=80",
    tags: ["Web App", "Mobile", "E-commerce"],
    category: "web"
  },
  {
    id: 5,
    title: "Puppet Automation Setup",
    description: "Complex infrastructure automation implementation with visual workflow diagrams and monitoring. Designed for a medium-sized tech company to streamline deployments.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80",
    tags: ["Automation", "DevOps", "Infrastructure"],
    category: "automation"
  },
  {
    id: 6,
    title: "Cloud Migration Pipeline",
    description: "Automated workflow for migrating on-premise applications to cloud infrastructure with minimal downtime and comprehensive testing protocols.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
    tags: ["Cloud", "CI/CD", "Migration"],
    category: "automation"
  }
];

const PortfolioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

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
            <span className="text-gradient">My Work</span>
          </h1>
          <p className="text-foreground/80">
            Explore my projects across 3D visualization, web development, and automation solutions.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="flex justify-center mb-12 bg-transparent">
            <TabsTrigger 
              value="all" 
              className="px-6 py-2 data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple rounded-md"
            >
              All Projects
            </TabsTrigger>
            <TabsTrigger 
              value="3d" 
              className="px-6 py-2 data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple rounded-md"
            >
              3D Visualization
            </TabsTrigger>
            <TabsTrigger 
              value="web" 
              className="px-6 py-2 data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple rounded-md"
            >
              Web Development
            </TabsTrigger>
            <TabsTrigger 
              value="automation" 
              className="px-6 py-2 data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple rounded-md"
            >
              Automation
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="block">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  id={project.id}
                />
              </Link>
            ))}
          </TabsContent>
          
          <TabsContent value="3d" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.category === "3d").map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="block">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  id={project.id}
                />
              </Link>
            ))}
          </TabsContent>
          
          <TabsContent value="web" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.category === "web").map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="block">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  id={project.id}
                />
              </Link>
            ))}
          </TabsContent>
          
          <TabsContent value="automation" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.category === "automation").map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="block">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  id={project.id}
                />
              </Link>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PortfolioPage;
