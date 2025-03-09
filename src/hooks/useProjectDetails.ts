import { useParams } from 'react-router-dom';
import { Project, projectsData } from '../data/projects';

interface UseProjectDetailsReturn {
  project: Project | undefined;
  isLoading: boolean;
  error: string | null;
}

export const useProjectDetails = (): UseProjectDetailsReturn => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "0");
  
  // Find the project by ID
  const project = projectsData.find(p => p.id === projectId);
  
  // In a real application, you might want to handle loading states and errors
  // For now, we'll keep it simple
  return {
    project,
    isLoading: false,
    error: project ? null : "Project not found"
  };
};
