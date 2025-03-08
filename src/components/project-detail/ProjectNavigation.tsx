
import React from "react";
import { ArrowLeft, Grid } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectNavigation: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/portfolio");
  };

  const handleViewAllClick = () => {
    navigate("/portfolio");
  };

  return (
    <div className="flex justify-between items-center mb-12">
      <div 
        onClick={handleBackClick}
        className="inline-flex items-center text-foreground/70 hover:text-neon-gold transition-colors cursor-pointer"
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleBackClick();
          }
        }}
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Portfolio
      </div>
      
      <button
        onClick={handleViewAllClick}
        className="px-4 py-2 rounded-lg bg-neon-gold text-black hover:bg-neon-gold/90 transition-colors flex items-center gap-2 button-glow"
      >
        <Grid size={16} />
        View All Projects
      </button>
    </div>
  );
};

export default ProjectNavigation;
