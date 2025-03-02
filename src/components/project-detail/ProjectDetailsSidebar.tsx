
import React from 'react';

interface ProjectDetailsSidebarProps {
  client: string;
  year: string;
  category: string;
  tools: string[];
}

const ProjectDetailsSidebar: React.FC<ProjectDetailsSidebarProps> = ({
  client,
  year,
  category,
  tools,
}) => {
  return (
    <div className="glass-card p-6 rounded-xl h-fit">
      <h3 className="text-xl font-semibold mb-4">Project Details</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-foreground/60 mb-1">Client</h4>
          <p className="font-medium">{client}</p>
        </div>
        
        <div>
          <h4 className="text-sm text-foreground/60 mb-1">Year</h4>
          <p className="font-medium">{year}</p>
        </div>
        
        <div>
          <h4 className="text-sm text-foreground/60 mb-1">Category</h4>
          <p className="font-medium capitalize">{category}</p>
        </div>
        
        <div>
          <h4 className="text-sm text-foreground/60 mb-1">Tools Used</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span key={index} className="px-2 py-1 rounded bg-white/5 text-xs">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSidebar;
