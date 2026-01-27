'use client';
import React from 'react';
import { ExternalLink, Github, Terminal, HardDrive, Cpu, Activity } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  repo: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'STABLE';
}

const projects: Project[] = [
  {
    id: "PRJ-001",
    title: "Codec",
    description: "A real-time smart website generator leveraging OpenAI APIs for dynamic content creation, Clerk for secure authentication, and a robust token-based access system. Features seamless site deployment and automated user management.",
    techStack: ["Next.js", "OpenAI API", "Clerk", "NodeJS", "Vercel","inngest","Sandbox"],
    link: "https://websitegenerator-ten.vercel.app/",
    repo: "https://github.com/workonlly/llmagent",
    status: "STABLE"
  },
  {
    id: "PRJ-002",
    title: "Live Interview",
    description: "A live interview platform built with Next.js, Firebase, and Google API, enabling real-time scheduling, video calls, and secure candidate management for seamless remote interviews.",
    techStack: ["Next.js", "Firebase", "Google API"],
    link: "https://interviewplatform-ochre.vercel.app/",
    repo: "https://github.com/workonlly/interviewplatform",
    status: "COMPLETED"
  },
  {
    id: "PRJ-003",
    title: "Ai stock advisor",
    description: "AI-powered stock advisor platform providing real-time analytics, predictive insights, and portfolio optimization for smarter investment decisions.",
    techStack: ["NextJs","typescript", "googleApi", "inngest", "MongoDB"],
    link: "https://stacko-ten.vercel.app/",
    repo: "https://github.com/workonlly/Stacko",
    status: "COMPLETED"
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="relative group border-4 border-black bg-white transition-all duration-500 hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
    
    {/* 1. Project Header (Technical Strip) */}
    <div className="border-b-4 border-black p-3 flex justify-between items-center bg-zinc-50 group-hover:bg-black group-hover:text-white transition-colors duration-300">
      <div className="flex items-center gap-2">
        <Terminal size={14} />
        <span className="text-[10px] font-black tracking-widest">{project.id}</span>
      </div>
      <div className="flex items-center gap-2">
        <Activity size={12} className="animate-pulse" />
        <span className="text-[9px] font-bold uppercase">{project.status}</span>
      </div>
    </div>

    {/* 2. Project Visual / Placeholder (HUD Style) */}
    <div className="h-48 border-b-4 border-black relative overflow-hidden bg-white">
      {/* Scanning Line Effect on Hover */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100">
        <div className="w-full h-1 bg-black absolute top-0 animate-scan-fast shadow-[0_0_15px_black]" />
      </div>
      
      {/* Decorative HUD Brackets */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-black group-hover:scale-110 transition-transform" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-black group-hover:scale-110 transition-transform" />

      {/* Placeholder Icon/Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-100 transition-opacity">
        <HardDrive size={64} strokeWidth={1} />
      </div>
    </div>

    {/* 3. Content Section */}
    <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 flex-grow flex flex-col">
      <h3 className="text-xl sm:text-2xl font-black uppercase italic tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
        {project.title}
      </h3>
      <p className="text-xs sm:text-sm font-medium leading-relaxed text-zinc-600 group-hover:text-black transition-colors">
        {project.description}
      </p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-[9px] font-black border border-black px-2 py-0.5 uppercase group-hover:bg-black group-hover:text-white">
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* 4. Action Footer */}
    <div className="mt-auto p-4 border-t-2 border-black flex gap-4 bg-zinc-50">
      <a href={project.repo} className="flex-1 flex items-center justify-center gap-2 py-2 border-2 border-black font-black text-[10px] hover:bg-black hover:text-white transition-all uppercase tracking-widest">
        <Github size={14} /> Source
      </a>
      <a href={project.link} className="flex-1 flex items-center justify-center gap-2 py-2 border-2 border-black bg-black text-white font-black text-[10px] hover:bg-white hover:text-black transition-all uppercase tracking-widest">
        <ExternalLink size={14} /> Visit
      </a>
    </div>

  </div>
);

export default function Projects() {
  return (
    <section className="p-4 sm:p-6 md:p-12 space-y-8 md:space-y-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-8 border-black pb-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase bg-black text-white px-3 py-1">
            <Cpu size={14} /> Executed_Deployments
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none">
            Project<span className="text-zinc-300">_</span>Logs
          </h2>
        </div>
        <p className="max-w-xs text-[10px] font-bold text-zinc-400 uppercase leading-relaxed text-right font-mono">
          // Authentication: Verified<br/>
          // Accessing local_database...<br/>
          // Displaying recent build outputs
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      <style jsx global>{`
        @keyframes scan-fast {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
