
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectNotFound: React.FC = () => {
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
};

export default ProjectNotFound;
