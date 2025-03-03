
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectNavigation: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/portfolio");
  };

  return (
    <button
      onClick={handleNavigateBack}
      className="inline-flex items-center text-foreground/70 hover:text-neon-gold mb-12 transition-colors cursor-pointer"
      style={{ cursor: 'pointer' }}
    >
      <ArrowLeft size={20} className="mr-2" />
      Back to Portfolio
    </button>
  );
};

export default ProjectNavigation;
