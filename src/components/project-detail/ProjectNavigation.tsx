
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectNavigation: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/portfolio");
  };

  return (
    <div 
      onClick={handleClick}
      className="inline-flex items-center text-foreground/70 hover:text-neon-gold mb-12 transition-colors cursor-pointer"
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <ArrowLeft size={20} className="mr-2" />
      Back to Portfolio
    </div>
  );
};

export default ProjectNavigation;
