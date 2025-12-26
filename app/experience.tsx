'use client';
import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Terminal, 
  ChevronRight, 
  Cpu, 
  Code2 
} from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    id: "LOG_01",
    company: "Lacleo AI",
    role: "Full Stack AI developer",
    period: "2024- PRESENT",
    description: [
      "Developing the Lacleo AI platform focused on advanced data enrichment services, driving innovation in data processing and automation.",
      "Leveraged a diverse technology stack including Next.js for frontend, Laravel as a robust backend, AWS for scalable cloud infrastructure, Elasticsearch for high-performance search, and vector databases for AI-driven features.",
      "Implemented and managed DevOps operations, optimizing CI/CD pipelines and cloud deployments to ensure reliability and efficiency.",
      "Enhanced and refactored backend codebase in Laravel, improving performance, maintainability, and scalability across the platform."
    ],
    tech: ["Next.js", "Laravel", "PostgreSQL", "AWS"]
  },
  {
    id: "LOG_02",
    company: "Primerole ",
    role: "Full Stack Developer",
    period: "2024",
    description: [
      "Developed a call enrichment software that analyzes phone recordings to assess call quality, word usage, and customer satisfaction.",
      "Integrated NLTK (Natural Language Toolkit) to perform sentiment and mood analysis, providing actionable insights for improving sales and customer experience.",
      "Enhanced backend and frontend systems to support real-time analytics and reporting for customer service teams."
    ],
    tech: ["python", "fastAPI", "Kubernetes", "Docker", "NLTK"]
  },
  {
    id: "LOG_03",
    company: "Lacleo Digital",
    role: "Junior Web developer",
    period: "2024",
    description: [
      "Developed custom software solutions using Flask, Selenium, Playwright, and BeautifulSoup for automation, data extraction, and web scraping tasks.",
      "Built and deployed fullstack websites with tailored features, integrating backend and frontend technologies to meet client requirements.",
      "Implemented advanced automation workflows and custom APIs to enhance business operations and user experience."
    ],
    tech: ["Flask", "Selenium", "Playwright", "BeautifulSoup", "JavaScript", "Express", "MongoDB", "SCSS"]
  }
];

const ExperienceEntry = ({ exp }: { exp: Experience }) => (
  <div className="relative pl-8 md:pl-12 group transition-all duration-500">
    {/* --- Timeline Marker --- */}
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-white border-2 border-black rounded-full z-10 group-hover:bg-black transition-colors duration-300" />
    <div className="absolute left-[-1px] top-4 bottom-0 w-[2px] bg-black/20 group-hover:bg-black transition-colors" />

    <div className="border-2 border-black bg-transparent p-6 space-y-4 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
      
      {/* 1. Header: Role & Period */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b-2 border-black bg-white pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black opacity-40 uppercase tracking-[0.2em] mb-1">
            <Briefcase size={12} /> {exp.company}
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tighter">{exp.role}</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-bold uppercase italic">
          <Calendar size={12} /> {exp.period}
        </div>
      </div>

      {/* 2. Description: Log Entries */}
      <div className="space-y-3 bg-white">
        <div className="flex items-center gap-2 text-[10px] font-bold opacity-30">
          <Terminal size={12} /> LOG_DATA_STREAM:
        </div>
        <ul className="space-y-2">
          {exp.description.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm font-medium leading-relaxed group-hover:translate-x-1 transition-transform">
              <ChevronRight size={16} className="shrink-0 text-black/40 group-hover:text-black" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Footer: Tech Stack Arcs */}
      <div className="flex flex-wrap gap-2 pt-4">
        {exp.tech.map((t) => (
          <span key={t} className="flex items-center gap-1.5 px-2 py-1 text-[9px] font-black border border-black hover:bg-black hover:text-white transition-colors uppercase">
            <Code2 size={10} /> {t}
          </span>
        ))}
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-2 right-2 flex gap-1 opacity-20">
        <div className="w-1 h-1 bg-black"></div>
        <div className="w-1 h-1 bg-black"></div>
        <div className="w-1 h-1 bg-black"></div>
      </div>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="p-6 md:p-12 space-y-16 bg-transparent">
      
      {/* SECTION TITLE */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b-8 border-black pb-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase bg-black text-white px-3 py-1">
            <Cpu size={14} className="animate-pulse" /> Chronology_V5.0
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            Work<span className="text-zinc-300">_</span>Exp
          </h2>
        </div>
        <div className="text-right font-mono text-[9px] font-bold text-zinc-400 uppercase max-w-[200px]">
          // Fetching professional_records...<br/>
          // Timestamp: {new Date().toLocaleDateString()}<br/>
          // Status: Verified_Engineer
        </div>
      </div>

      {/* TIMELINE LIST */}
      <div className="max-w-4xl mx-auto py-8 space-y-12">
        {experiences.map((exp) => (
          <ExperienceEntry key={exp.id} exp={exp} />
        ))}
      </div>

      {/* FOOTER SCANLINE */}
      <div className="h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-10 animate-pulse"></div>

    </section>
  );
}