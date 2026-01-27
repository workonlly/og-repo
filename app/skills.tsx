'use client';
import React, { useState, useEffect } from 'react';


// --- 2. SKILL PILL COMPONENT ---
const SkillPill = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 group cursor-default">
    <span className="text-xs font-black uppercase tracking-tighter">{name}</span>
  </div>
);

export default function Skills() {
  const [sessionTime, setSessionTime] = useState("00:00");

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const m = Math.floor(elapsed / 60).toString().padStart(2, '0');
      const s = (elapsed % 60).toString().padStart(2, '0');
      setSessionTime(`${m}:${s}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-black font-mono p-0 md:p-12 selection:bg-black selection:text-white">
      
      {/* --- MAIN PAGE BORDER & LAYOUT --- */}
      <div className="max-w-6xl mx-auto border-0 md:border-4  border-black relative overflow-hidden">
        
        {/* Top Navigation Bar */}
        <div className="border-b-4 border-black h-12 md:h-16 flex items-center justify-between px-2 md:px-6 bg-white z-20 sticky top-0">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-black flex items-center justify-center text-white font-black italic text-sm md:text-base">S</div>
            <h1 className="text-xs md:text-xl font-black uppercase tracking-tighter italic">Sujal_Architect_v5.0</h1>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-bold opacity-60">
            <div>LOC: 28.6139° N, 77.2090° E</div>
            <div>UPTIME: {sessionTime}</div>
          </div>
        </div>

        {/* HERO / INTRO & SKILLS SECTION - Full Width */}
        <div className="bg-zinc-50/50 border-b-4 border-black">
          <div className="p-3 md:p-10 flex flex-col justify-center space-y-3 md:space-y-6 relative">
            <div className=" top-4 left-4 text-[9px] font-bold opacity-30 tracking-[0.4em]">PROFILE_INIT</div>
            <h2 className="text-2xl md:text-7xl font-black tracking-tighter leading-none">
              Sujal <span className="text-zinc-400">|</span> <span className="text-sm md:text-2xl align-middle text-gap- font-mono">Full Stack Developer</span>
            </h2>
            <p className="text-xs md:text-lg font-bold text-zinc-600">Building scalable, high-performance web solutions with a focus on clean code, modern UI, and robust backend logic.</p>
            <div className="space-y-2">
              <div className="text-sm md:text-base font-black uppercase tracking-widest text-black">What I Do</div>
              <ul className="list-disc list-inside text-zinc-700 text-xs md:text-base font-medium space-y-1">
                <li>Architect and develop full-stack web applications</li>
                <li>Design modern, responsive UIs with React & Tailwind CSS</li>
                <li>Build scalable APIs and backend systems (Node.js, Express, PostgreSQL, MongoDB)</li>
                <li>DevOps & deployment: Docker, Vercel, cloud platforms</li>
                <li>Collaborate, debug, and deliver clean, maintainable code</li>
              </ul>
            </div>
            <div className="space-y-1 pt-4">
              <div className="text-sm md:text-base font-black uppercase tracking-widest text-black">Tech Stack</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs md:text-sm">
                <div>
                  <span className="font-bold">Languages:</span> Solidity, C++, C, Java, Python, Rust, Go, JavaScript, TypeScript
                </div>
                <div>
                  <span className="font-bold">Frontend:</span> Next.js, ReactJS, React Native, Flutter, Jetpack, VueJS, Tailwind CSS
                </div>
                <div>
                  <span className="font-bold">Backend:</span> ExpressJS, Flask, FastAPI, NestJS, Laravel
                </div>
                <div>
                  <span className="font-bold">Databases:</span> MongoDB, MySQL, PostgreSQL, ElasticSearch, Chroma
                </div>
                <div>
                  <span className="font-bold">AI/ML:</span> LangChain, PyTorch, TensorFlow, ML, DL
                </div>
                <div>
                  <span className="font-bold">Ops:</span> AI Ops, DevOps, ML Ops, Docker, Jenkins, Kubernetes, Ansible, Terraform
                </div>
                <div>
                  <span className="font-bold">Web3:</span> Ether.js, Hardhat, Foundry, Web3.js
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION (From Image 3) */}
        <div className="p-3 md:p-10 space-y-4 md:space-y-8 bg-white">
          <div className="space-y-2">
            <h3 className="text-xl md:text-4xl font-black uppercase italic tracking-tighter">Skills & Tools</h3>
            <p className="text-sm md:text-xl font-bold text-zinc-400 italic">
              Learned by coding all night and debugging all day!
            </p>
          </div>

          <p className="max-w-3xl text-xs md:text-lg font-medium">
            As a full-stack Software Engineer, I specialize in building scalable web applications using 
            modern technologies such as <span className="font-black">Next.js, React, and Tailwind CSS</span>. 
            I'm also expanding my expertise into DevOps and cloud practices to create efficient solutions.
          </p>

          {/* Pill Grid */}
          <div className="flex flex-wrap gap-1.5 md:gap-3">
                        <SkillPill name="Solidity" />
                        <SkillPill name="C++" />
                        <SkillPill name="C" />
                        <SkillPill name="Java" />
                        <SkillPill name="Python" />
                        <SkillPill name="Rust" />
                        <SkillPill name="Go" />
                        <SkillPill name="JavaScript" />
                        <SkillPill name="TypeScript" />
            <SkillPill name="Next.js" />
            <SkillPill name="ReactJS" />
            <SkillPill name="React Native" />
            <SkillPill name="Flutter" />
            <SkillPill name="Jetpack" />
            <SkillPill name="VueJS" />
            <SkillPill name="ExpressJS" />
            <SkillPill name="Flask" />
            <SkillPill name="FastAPI" />
            <SkillPill name="NestJS" />
            <SkillPill name="Laravel" />
            <SkillPill name="MongoDB" />
            <SkillPill name="MySQL" />
            <SkillPill name="ElasticSearch" />
            <SkillPill name="PostgreSQL" />
            <SkillPill name="Chroma" />
            <SkillPill name="LangChain" />
            <SkillPill name="PyTorch" />
            <SkillPill name="TensorFlow" />
            <SkillPill name="ML" />
            <SkillPill name="DL" />
            <SkillPill name="AI Ops" />
            <SkillPill name="DevOps" />
            <SkillPill name="ML Ops" />
            <SkillPill name="Docker" />
            <SkillPill name="Jenkins" />
            <SkillPill name="Kubernetes" />
            <SkillPill name="Ansible" />
            <SkillPill name="Terraform" />
            <SkillPill name="Ether.js" />
            <SkillPill name="Hardhat" />
            <SkillPill name="Foundry" />
            <SkillPill name="Web3.js" />
          </div>
        </div>

        {/* Footer Technical Info */}
        <div className="border-t-4 border-black h-10 md:h-12 flex items-center px-2 md:px-6 justify-between text-[8px] md:text-[10px] font-black bg-black text-white">
          <div className="animate-pulse">/// SYSTEM_STATE: NOMINAL</div>
          <div className="tracking-[0.5em]">2025_CORE_ARCHIVE</div>
        </div>

      </div>
      
      {/* Background Decorative Accents */}
      <div className="fixed top-0 left-0 w-full  h-1 bg-black animate-[shimmer_3s_infinite]"></div>
      
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .pixelated {
          image-rendering: pixelated;
        }
      `}</style>
    </div>
  );
}