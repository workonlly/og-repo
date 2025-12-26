'use client';
import { useState, useEffect } from 'react';
import React from 'react';

const SciFiContainer = ({ children }: { children: React.ReactNode }) => {
  const [uptime, setUptime] = useState("00:00:00");
  
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const diff = Math.floor((Date.now() - start) / 1000);
      const h = Math.floor(diff / 3600).toString().padStart(2, '0');
      const m = Math.floor((diff % 3600) / 60).toString().padStart(2, '0');
      const s = (diff % 60).toString().padStart(2, '0');
      setUptime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] bg-transparent border-l-2 border-r-2 border-black flex overflow-hidden font-mono group">
      
      {/* --- 1. THE GRID (Ultra-faint Black lines) --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none animate-[pan_40s_linear_infinite]"
           style={{
             backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}
      />

      {/* --- 2. LEFT SIDEBAR (Technical Nav) --- */}
      <div className="hidden md:flex w-14 flex-col items-center border-r border-black py-6 gap-6 backdrop-blur-sm z-10 relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black opacity-20"></div>

        <div className="text-[10px] text-black font-black tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>
            ENGINEER_ID: 0xSUJAL
        </div>
        
        <div className="w-[1px] h-24 bg-black/20 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1/3 bg-black animate-[scan_3s_linear_infinite]"></div>
        </div>

        <div className="flex flex-col gap-2">
           {[...Array(6)].map((_, i) => (
             <div 
               key={i} 
               className={`w-1.5 h-1.5 border border-black transition-colors duration-300 ${i % 2 === 0 ? 'bg-black' : 'bg-transparent'}`}
               style={{ animation: `pulse 2s infinite ${i * 0.3}s` }}
             ></div>
           ))}
        </div>
      </div>

      <div className="flex-1 relative flex flex-col z-10">
        
        {/* --- 3. TOP NAVIGATION (High Contrast) --- */}
        <div className="h-16 border-b-2 border-black flex items-center justify-between px-8 relative">
           <h2 className="text-2xl font-black text-black tracking-tighter uppercase italic">
             <span className="opacity-30">///</span> PROFILE_READOUT
           </h2>
           
           <div className="hidden sm:flex text-[10px] font-bold text-black gap-6 items-center">
             <div className="flex flex-col items-end">
                <span className="opacity-40 uppercase">Session_Time</span>
                <span>{uptime}</span>
             </div>
             <div className="w-[2px] h-8 bg-black"></div>
             <div className="px-3 py-1 bg-black text-white font-black tracking-tighter">
                STATUS: ACTIVE
             </div>
           </div>
        </div>

        {/* --- 4. MAIN CONTENT AREA (About Me) --- */}
        <div className="relative flex-1 p-10 overflow-hidden">
           
           {/* Geometric Watermark */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.03]">
              <div className="absolute inset-0 border-2 border-black rounded-full animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-20 border border-black animate-[spin_20s_linear_infinite_reverse] border-dashed"></div>
           </div>

           {/* Corner Accents */}
           <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-black"></div>
           <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-black"></div>

           <div className="relative z-20 text-black h-full flex flex-col justify-center">
              {children}
           </div>
        </div>

        {/* --- 5. BOTTOM DATA BAR --- */}
        <div className="h-10 border-t-2 border-black flex items-center px-6 gap-4 relative overflow-hidden">
           <div className="h-3 w-3 bg-black animate-spin z-10"></div>
           <div className="text-[10px] font-black text-black z-10 tracking-[0.3em]">
             LOC_ID: <span className="opacity-50">NODE_REMOTE_01</span>
           </div>
           
           <div className="h-[2px] flex-1 bg-black/10 relative overflow-hidden z-10">
              <div className="absolute top-0 left-0 h-full w-1/4 bg-black animate-[shimmer_3s_infinite]"></div>
           </div>
        </div>
      </div>

      {/* --- 6. RIGHT DECORATIVE BAR --- */}
      <div className="w-10 h-full flex flex-col justify-center gap-1 border-l border-black z-10 p-1">
         {[...Array(30)].map((_, i) => (
           <div 
             key={i} 
             className="w-full h-[3px] bg-black/10"
             style={{ 
               opacity: i % 3 === 0 ? 1 : 0.2,
               backgroundColor: 'black'
             }}
           ></div>
         ))}
      </div>

    </div>
  );
};



export default function About() {
  return (
    <div className="min-h-screen w-full text-black p-6 md:p-12 flex flex-col items-center font-mono">
      
      <div className="w-full max-w-3xl flex flex-col gap-6 z-10">
        
        <SciFiContainer>
          <div className="max-w-xl space-y-2 bg-white">
            {/* Technical Intro */}
            <div className="space-y-1">
              <div className="inline-block px-1 py-0.5 bg-black text-white text-[9px] font-bold tracking-tighter mb-2">
                INITIATING_BIOGRAPHY_SEQUENCE
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                SUJAL<span className="text-zinc-300">_</span>
              </h1>
              <h2 className="text-base md:text-lg font-bold uppercase tracking-[0.15em] border-b-2 border-black inline-block pb-1">
                Full Stack AI Developer
              </h2>
            </div>

            {/* About Me Content */}
            <p className="text-base md:text-lg leading-snug text-justify font-medium">
              Architecting <span className="bg-black text-white px-2">scalable digital ecosystems</span> through clean code and intuitive design. 
              I specialize in turning complex architectural problems into elegant, high-performance web solutions. 
              With a focus on <span className="underline decoration-4">Full Stack performance</span> and user-centric logic, 
              I bridge the gap between heavy backend infrastructure and pixel-perfect frontends.
            </p>

            {/* Decorative Link/Command */}
            <div className="flex items-center gap-2 pt-2">
               <div className="px-2 py-1 border border-black font-black text-xs hover:bg-black hover:text-white cursor-pointer transition-colors">
                 DOWNLOAD_CV.PDF
               </div>
               <div className="text-[10px] font-bold opacity-40 animate-pulse">
                 RUNNING: portfolio_v3.sh
               </div>
            </div>
          </div>
        </SciFiContainer>

        

      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: -100%; }
          100% { top: 100%; }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}