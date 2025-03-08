
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageGalleryModal from './ImageGalleryModal';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden aspect-video cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => openGallery(index)}
          >
            <div className="relative w-full h-full group">
              <img 
                src={image} 
                alt={`${title} - Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white/90 font-medium text-sm px-3 py-1 rounded-full bg-foreground/20 backdrop-blur-sm">
                  View Image
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <ImageGalleryModal 
        images={images}
        initialIndex={selectedImageIndex}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
      />
    </div>
  );
};

export default ProjectGallery;
