
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryModalProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main image container */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-video bg-foreground/5 rounded-lg overflow-hidden"
            >
              <img 
                src={images[currentIndex]} 
                alt={`Gallery image ${currentIndex + 1}`} 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* Navigation controls */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 flex space-x-4">
              <button 
                className="p-3 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex space-x-4">
              <button 
                className="p-3 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-foreground/10 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageGalleryModal;
