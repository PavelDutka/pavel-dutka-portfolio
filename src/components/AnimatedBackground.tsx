
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
      canvas.height = window.innerHeight;
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

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.originalRadius = Math.random() * 2 + 1;
        this.radius = this.originalRadius;
        this.targetRadius = this.radius;
        this.color = this.getRandomColor();
        this.pulse = Math.random() > 0.7;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }

      getRandomColor() {
        const colors = [
          'rgba(255, 215, 0, 0.7)',   // Gold
          'rgba(255, 193, 7, 0.7)',   // Amber
          'rgba(205, 127, 50, 0.6)',  // Bronze
          'rgba(139, 92, 246, 0.5)',  // Purple
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Pulse effect for some nodes
        if (this.pulse) {
          if (this.radius >= this.originalRadius * 1.5) {
            this.pulseSpeed = -Math.abs(this.pulseSpeed);
          } else if (this.radius <= this.originalRadius * 0.7) {
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
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = Math.floor(canvas.width * canvas.height / 12000);
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Draw connections with gradient
      nodes.forEach((node, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = node.x - nodes[j].x;
          const dy = node.y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Calculate opacity based on distance
            const opacity = 1 - distance / 180;
            const gradient = ctx.createLinearGradient(node.x, node.y, nodes[j].x, nodes[j].y);

            // Use the node colors for gradient
            gradient.addColorStop(0, node.color.replace(/[^,]+(?=\))/, opacity * 0.3 + ''));
            gradient.addColorStop(1, nodes[j].color.replace(/[^,]+(?=\))/, opacity * 0.3 + ''));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.6;
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
      className="fixed top-0 left-0 w-full h-full z-0 opacity-40"
    />
  );
};

export default AnimatedBackground;
