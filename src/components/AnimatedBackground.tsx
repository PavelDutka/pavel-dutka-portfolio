
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.2; // Slightly taller to prevent gaps during scroll
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Node class
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      targetRadius: number;
      originalRadius: number;
      pulse: boolean;
      pulseSpeed: number;
      glow: boolean;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4; // Slightly slower
        this.vy = (Math.random() - 0.5) * 0.4; // Slightly slower
        this.originalRadius = Math.random() * 2.5 + 1;
        this.radius = this.originalRadius;
        this.targetRadius = this.radius;
        this.color = this.getRandomColor();
        this.pulse = Math.random() > 0.6;
        this.pulseSpeed = 0.02 + Math.random() * 0.04;
        this.glow = Math.random() > 0.7;
      }

      getRandomColor() {
        const colors = [
          'rgba(255, 215, 0, 0.8)',   // Gold
          'rgba(255, 193, 7, 0.8)',   // Amber
          'rgba(205, 127, 50, 0.7)',  // Bronze
          'rgba(139, 92, 246, 0.6)',  // Purple
          'rgba(255, 255, 255, 0.5)', // White
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Boundary check with smoother wrapping
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;

        // Pulse effect for some nodes
        if (this.pulse) {
          if (this.radius >= this.originalRadius * 1.7) {
            this.pulseSpeed = -Math.abs(this.pulseSpeed);
          } else if (this.radius <= this.originalRadius * 0.6) {
            this.pulseSpeed = Math.abs(this.pulseSpeed);
          }
          this.radius += this.pulseSpeed;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add glow effect to some nodes
        if (this.glow) {
          ctx.shadowBlur = this.radius * 3;
          ctx.shadowColor = this.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = Math.floor(canvas.width * canvas.height / 10000); // More nodes
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let mouseActive = false;

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseActive = true;
      
      // Make nodes near mouse larger
      nodes.forEach(node => {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          node.targetRadius = node.originalRadius * (1 + (150 - distance) / 60);
        } else {
          node.targetRadius = node.originalRadius;
        }
        
        // Smooth transition to target radius
        node.radius += (node.targetRadius - node.radius) * 0.1;
      });
    });

    canvas.addEventListener('mouseleave', () => {
      mouseActive = false;
      
      // Reset node sizes
      nodes.forEach(node => {
        node.targetRadius = node.originalRadius;
      });
    });

    // Parallax effect for nodes
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      nodes.forEach((node, i) => {
        if (i % 3 === 0) {
          node.y -= scrollY * 0.01; // Slow parallax
        } else if (i % 3 === 1) {
          node.y -= scrollY * 0.02; // Medium parallax
        } else {
          node.y -= scrollY * 0.03; // Fast parallax
        }
      });
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Draw connections with improved gradient
      nodes.forEach((node, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = node.x - nodes[j].x;
          const dy = node.y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) { // Increased connection distance
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Calculate opacity based on distance
            const opacity = 1 - distance / 200;
            const gradient = ctx.createLinearGradient(node.x, node.y, nodes[j].x, nodes[j].y);

            // Use the node colors for gradient
            gradient.addColorStop(0, node.color.replace(/[^,]+(?=\))/, opacity * 0.4 + ''));
            gradient.addColorStop(1, nodes[j].color.replace(/[^,]+(?=\))/, opacity * 0.4 + ''));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8 * opacity; // Thinner lines for distant connections
            ctx.stroke();
          }
        }
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 opacity-60"
    />
  );
};

export default AnimatedBackground;
