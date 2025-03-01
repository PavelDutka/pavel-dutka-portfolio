import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

// Project data from the portfolio
const projectsData = [
  {
    id: 1,
    title: "Modern House Archviz",
    description: "High-quality architectural visualization of a contemporary house with before/after comparison. Created using Blender and post-processed in Photoshop for maximum visual impact.",
    fullDescription: `This architectural visualization project showcases a modern house design with meticulous attention to lighting, materials, and environmental details. The goal was to create photorealistic renders that would help clients visualize the final result before construction began.

The project involved:
- Creating detailed 3D models in Blender
- Developing realistic materials and textures
- Setting up natural and artificial lighting scenarios
- Rendering high-resolution images for marketing materials
- Creating before/after comparisons to demonstrate the transformation`,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c94bf5588963?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2000&q=80"
    ],
    tags: ["3D Visualization", "Architecture", "Blender"],
    tools: ["Blender", "Photoshop", "Substance Painter"],
    client: "Architectural Design Studio",
    year: "2022",
    category: "3d",
    liveLink: "https://example.com/house-project",
    repoLink: "https://github.com/yourusername/house-project"
  },
  {
    id: 2,
    title: "Financial Advisor Website",
    description: "Clean, professional website design for a financial advisory firm with interactive UI elements. Built with React and includes custom charts, calculators, and client portal.",
    fullDescription: `This comprehensive website for a financial advisory firm was designed to provide both information and interactive tools for potential and existing clients. The site features a clean, professional aesthetic that inspires trust while offering powerful functionality.

Key features developed:
- Responsive, mobile-first design
- Interactive financial calculators
- Real-time market data visualizations
- Secure client portal for document sharing
- Content management system for blog and resources
- SEO optimization`,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
    ],
    tags: ["Web Design", "UI/UX", "React"],
    tools: ["React", "TypeScript", "Chart.js", "Node.js"],
    client: "Financial Advisors Inc.",
    year: "2023",
    category: "web",
    liveLink: "https://example.com/finance-website",
    repoLink: "https://github.com/yourusername/finance-website"
  },
  {
    id: 3,
    title: "Puppet Automation Setup",
    description: "Complex infrastructure automation implementation with visual workflow diagrams and monitoring. Designed for a medium-sized tech company to streamline deployments.",
    fullDescription: `This project involved designing and implementing a comprehensive automation solution using Puppet for a medium-sized technology company. The goal was to standardize server configurations, streamline deployments, and improve overall infrastructure reliability.

The implementation included:
- Server configuration management with Puppet
- Custom module development for specific application needs
- Integration with existing CI/CD pipelines
- Monitoring and reporting dashboard
- Automated testing of infrastructure changes
- Documentation and knowledge transfer`,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558494950-b8e691e567e7?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1562929600-cdd9a19ffd0f?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2000&q=80"
    ],
    tags: ["Automation", "DevOps", "Infrastructure"],
    tools: ["Puppet", "Docker", "Grafana", "Jenkins"],
    client: "Tech Solutions Corp",
    year: "2023",
    category: "automation",
    liveLink: "https://example.com/automation-case-study",
    repoLink: "https://github.com/yourusername/puppet-automation"
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "0");
  const project = projectsData.find(p => p.id === projectId);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio" className="bg-neon-gold hover:bg-neon-gold/80 text-black font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative pt-24">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 py-16">
        <div 
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center text-foreground/70 hover:text-neon-gold mb-12 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{project.title}</span>
            </h1>
            
            <p className="text-lg mb-8 text-foreground/90">
              {project.description}
            </p>
            
            <div className="prose prose-invert max-w-none mb-8">
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple/80 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-neon-gold hover:bg-neon-gold/80 text-black font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  View Live <ExternalLink size={16} className="ml-2" />
                </a>
              )}
              
              {project.repoLink && (
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/10 hover:bg-white/15 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  View Code <Github size={16} className="ml-2" />
                </a>
              )}
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl h-fit">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-foreground/60 mb-1">Client</h4>
                <p className="font-medium">{project.client}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-foreground/60 mb-1">Year</h4>
                <p className="font-medium">{project.year}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-foreground/60 mb-1">Category</h4>
                <p className="font-medium capitalize">{project.category}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-foreground/60 mb-1">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="px-2 py-1 rounded bg-white/5 text-xs">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden aspect-video"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Gallery ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
