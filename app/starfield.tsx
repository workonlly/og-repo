'use client';
import { use, useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = [
      'rgba(0, 0, 0, 0.6)',  // Black
      'rgba(50, 50, 50, 0.5)',   // Dark gray
      'rgba(30, 30, 30, 0.7)',  // Darker gray
      'rgba(80, 80, 80, 0.4)', // Medium gray
    ];

    const initStars = () => {
      starsRef.current = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 3000);
      
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      };
    };

    let animationId: number | null = null;
    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      starsRef.current.forEach((star) => {
        star.z -= 0.5;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
        }
        const perspective = 500 / star.z;
        const x = (star.x + mouseRef.current.x * (star.z / 100)) * perspective + centerX;
        const y = (star.y + mouseRef.current.y * (star.z / 100)) * perspective + centerY;
        const size = star.size * perspective;
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.1, size), 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
          // Add glow effect for larger stars
          if (size > 1) {
            ctx.beginPath();
            ctx.arc(x, y, size * 2, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
            gradient.addColorStop(0, star.color.replace('0.8', '0.3').replace('0.6', '0.2').replace('0.7', '0.25').replace('0.9', '0.35'));
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fill();
          }
        }
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    initStars();
    animate();

    const resizeHandler = () => {
      resize();
      initStars();
    };
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: 'linear-gradient(180deg, hsl(0, 0%, 100%) 0%, hsl(0, 0%, 98%) 50%, hsl(0, 0%, 100%) 100%)' }}
    />
  );
};

export default Starfield;
