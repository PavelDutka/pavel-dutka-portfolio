import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectNavigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/portfolio")}
      className="inline-flex items-center text-foreground/70 hover:text-neon-gold mb-12 transition-colors cursor-pointer"
    >
      <ArrowLeft size={20} className="mr-2" />
      Back to Portfolio
    </button>
  );
};

export default ProjectNavigation;
