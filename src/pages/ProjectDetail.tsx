
import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { 
  ProjectNavigation,
  ProjectNotFound 
} from '../components/project-detail';
import ProjectDetailView from '../components/project-detail/ProjectDetailView';
import { useProjectDetails } from '../hooks/useProjectDetails';

const ProjectDetail: React.FC = () => {
  const { project, isLoading, error } = useProjectDetails();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (isLoading) {
    return <div className="min-h-screen relative pt-24 flex items-center justify-center">
      <AnimatedBackground />
      <p>Loading project details...</p>
    </div>;
  }
  
  if (error || !project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen relative pt-24">
      <AnimatedBackground />
      <ProjectNavigation />
      <ProjectDetailView project={project} />
    </div>
  );
};

export default ProjectDetail;
