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
      className="relative flex  select-none"
      style={{ 
        width: size, 
        height: size, 
        '--j-color': color,
      } as React.CSSProperties}
    >
      {/* --- CENTRAL SPHERE LAYER --- */}
      <div className="absolute inset-[15%] rounded-full flex items-center justify-center">
        {/* Subtle Sphere Edge */}
        <div className="absolute inset-0 rounded-full border border-[var(--j-color)]/20 shadow-[inset_0_0_30px_var(--j-color)] opacity-30" />
        <div className="rounded-full w-[120px] h-[120px] overflow-hidden flex items-center justify-center">
          <img src="./imh.webp" alt="image" width={120} height={120} className="object-cover w-full h-full" />
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