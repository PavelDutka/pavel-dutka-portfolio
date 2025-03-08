
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
    description: "High-quality architectural visualization of a contemporary house. Created using Blender and post-processed in Photoshop for maximum visual impact.",
    image: "./images/portfolio/house.webp",
    tags: ["3D Visualization", "Architecture", "Blender"],
    category: "3d"
  },
  {
    id: 2,
    title: "Tiny house visualisation",
    description: "Realistic render of a mountain retreat with attention to atmospheric lighting and environmental details.",
    image: "./images/portfolio/tinyHouse.webp",
    tags: ["3D Visualization", "Environment", "Lighting"],
    category: "3d"
  },
  {
    id: 3,
    title: "Financial Advisor Website",
    description: "Clean, professional website design for a financial advisory firm with interactive UI elements. Built with React and includes custom charts, calculators, and client portal.",
    image: "./images/portfolio/patrman_mockup.webp",
    tags: ["Web Design", "UI/UX", "React"],
    category: "web"
  },
  {
    id: 4,
    title: "Portfolio website",
    description: "Clean, professional website design for my personal brand with interactive UI elements.",
    image: "./images/portfolio/portfolio_mockup.webp",
    tags: ["Web Design", "UI/UX", "React"],
    category: "web"
  },
  {
    id: 5,
    title: "Puppet Automation Setup",
    description: "Complex infrastructure automation implementation with visual workflow diagrams and monitoring. Designed for a medium-sized tech company to streamline deployments.",
    image: "./images/portfolio/puppet_automation.webp",
    tags: ["Automation", "DevOps", "Infrastructure"],
    category: "automation"
  },
  {
    id: 6,
    title: "3D models for traffiq addon",
    description: "Low poly, high quality 3D models for the Traffiq addon. Created using Blender and for maximum visual impact.",
    image: "./images/portfolio/Rowboat.jpg",
    tags: ["Blender", "3D modeling", "Texturing"],
    category: "3d"
  },
  {
    id: 7,
    title: "Product Render: Luxury Pen",
    description: "Ultra-detailed product visualization of a high-end fountain pen with precise material definition and studio lighting setup.",
    image: "./images/portfolio/front.png",
    tags: ["Product Visualization", "Lighting", "Materials"],
    category: "3d"
  },
  {
    id: 8,
    title: "Endless Engines Animation",
    description: "Technical animation challenge showcasing the internal mechanics of various engine types with smooth transitions and accurate physics.",
    image: "./images/portfolio/Boeing_737.png",
    tags: ["Animation", "Technical", "Mechanical"],
    category: "3d"
  },
  {
    id: 9,
    title: "Haas and Sohn Visualization",
    description: "Photorealistic visualization of Haas and Sohn stoves showing detailed materials, lighting and environmental integration for marketing purposes.",
    image: "./images/portfolio/LivingRoom__mq_1030_Azure_Sun.001_Composite.png",
    tags: ["Product Visualization", "Interior Design", "Lighting"],
    category: "3d"
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

        <Tabs value={activeTab} defaultValue="all" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="3d">3D</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="automation">DevOps</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="block cursor-pointer">
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
              <Link to={`/project/${project.id}`} key={project.id} className="block cursor-pointer">
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
              <Link to={`/project/${project.id}`} key={project.id} className="block cursor-pointer">
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
              <Link to={`/project/${project.id}`} key={project.id} className="block cursor-pointer">
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
