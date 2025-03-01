
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
    
    // Apply cursor: none to body
    document.body.style.cursor = 'none';
    
    // Apply cursor: none to all a and button elements
    const applyNoCursor = () => {
      const elements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      elements.forEach((el) => {
        (el as HTMLElement).style.cursor = 'none';
      });
    };
    
    // Run initially
    applyNoCursor();
    
    // Set up a MutationObserver to watch for changes to the DOM
    const observer = new MutationObserver(applyNoCursor);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleLinkHover);
      
      // Restore default cursor on cleanup
      document.body.style.cursor = '';
      document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach((el) => {
        (el as HTMLElement).style.cursor = '';
      });
      
      observer.disconnect();
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
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
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
