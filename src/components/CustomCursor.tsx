import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother cursor movement
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
      
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
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('[data-radix-collection-item]');
      
      setIsHovering(!!isLink);
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleLinkHover);
    
    // Apply cursor: none to body
    document.body.style.cursor = 'none';
    
    // Apply cursor: none to all interactive elements
    const applyNoCursor = () => {
      const elements = document.querySelectorAll('a, button, [role="button"], input, select, textarea, [data-radix-collection-item]');
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
      document.querySelectorAll('a, button, [role="button"], input, select, textarea, [data-radix-collection-item]').forEach((el) => {
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
      <style>
        {`
          * {
            cursor: none !important;
          }
          
          .custom-cursor {
            pointer-events: none;
            position: fixed;
            z-index: 9999;
            transition: opacity 0.15s ease-in-out;
            will-change: transform;
          }
          
          .cursor-dot {
            width: 8px;
            height: 8px;
            background-color: #e4c76a;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(228, 199, 106, 0.8);
            transition: transform 0.1s ease-out;
            transform-origin: center center;
          }
          
          .cursor-outline {
            width: 40px;
            height: 40px;
            border: 2px solid rgba(228, 199, 106, 0.5);
            border-radius: 50%;
            transition: width 0.2s ease-out, height 0.2s ease-out, border 0.2s ease-out, background-color 0.2s ease-out;
            transform-origin: center center;
          }
          
          .cursor-hover {
            width: 60px;
            height: 60px;
            background-color: rgba(228, 199, 106, 0.1);
            border-color: rgba(228, 199, 106, 0.8);
          }
        `}
      </style>
      <div 
        className={`custom-cursor cursor-dot ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)` // Adjust by half the dot size (8px / 2)
        }}
      />
      <div 
        className={`custom-cursor cursor-outline ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)` // Adjust by half the outline size (40px / 2)
        }}
      />
    </>
  );
};

export default CustomCursor;
