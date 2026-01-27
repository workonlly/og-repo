"use client"
import React from 'react';

interface JarvisEmblemProps {
  size?: number;
  color?: string;
}

const JarvisEmblem: React.FC<JarvisEmblemProps> = ({ 
  size = 600, 
  color = "#000000" 
}) => {
  // Procedural particles for the sphere
  const particles = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div 
      className="relative flex select-none w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
      style={{ 
        '--j-color': color,
      } as React.CSSProperties}
    >
      {/* --- CENTRAL SPHERE LAYER --- */}
      <div className="absolute inset-[15%] rounded-full flex items-center justify-center">
        {/* Subtle Sphere Edge */}
        <div className="absolute inset-0 rounded-full border border-[var(--j-color)]/20 shadow-[inset_0_0_30px_var(--j-color)] opacity-30" />
        <div className="rounded-full w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[180px] md:h-[180px] lg:w-[280px] lg:h-[280px] overflow-hidden flex items-center justify-center">
          <img src="./gg.jpeg" alt="image" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* --- ROTATING SVG RINGS --- */}
      <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="var(--j-color)" strokeWidth="0.2" opacity="0.3" />
          
          <circle 
            cx="50" cy="50" r="42" fill="none" stroke="var(--j-color)" strokeWidth="0.6" 
            strokeDasharray="1 2 10 5 1 2 25 5" 
            strokeLinecap="round"
            className="opacity-70"
          />

          <circle 
            cx="50" cy="50" r="35" fill="none" stroke="var(--j-color)" strokeWidth="1" 
            strokeDasharray="20 15 40 15" 
            className="opacity-50"
          />
          
          <circle cx="50" cy="50" r="28" fill="none" stroke="var(--j-color)" strokeWidth="0.3" opacity="0.4" strokeDasharray="5 5" />
        </svg>
      </div>



      <style jsx>{`
        @keyframes scan-down {
          0% { top: -10%; opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { top: 110%; opacity: 0; }
        }
        .animate-scan-down { animation: scan-down 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default JarvisEmblem;