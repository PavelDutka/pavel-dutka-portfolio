
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button');
      
      setIsHovering(!!isLink);
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleLinkHover);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleLinkHover);
    };
  }, [isVisible]);

  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  
  if (isTouchDevice) return null;

  return (
    <>
      <div 
        className={`custom-cursor cursor-dot ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div 
        className={`custom-cursor cursor-outline ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
