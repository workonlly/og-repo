"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  SiLinkedin, SiX, SiYoutube, SiGithub, 
  SiFiverr, SiUpwork, SiFreelancer 
} from 'react-icons/si';

const SocialIcon = ({ Icon, href, label }: { Icon: any; href: string; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative w-10 h-full flex items-center justify-center border-r border-black hover:bg-black transition-all duration-200"
    title={label}
  >
    <Icon className="w-4 h-4 text-black group-hover:text-white transition-colors" />
    {/* Tooltip Overlay */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-[7px] px-1 py-0.5 opacity-0 group-hover:opacity-100 pointer-events-none uppercase tracking-tighter z-50">
      {label}
    </div>
  </a>
);

const NavItem = ({ label, code }: { label: string; code: string }) => (
  <Link 
    href={`#${label.toLowerCase()}`}
    scroll={false}
    className="group relative px-4 h-full flex flex-col justify-center border-r border-black hover:bg-black transition-all duration-300 cursor-pointer"
    onClick={e => {
      e.preventDefault();
      const el = document.getElementById(label.toLowerCase());
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    <span className="text-[8px] font-black opacity-40 group-hover:text-zinc-500 uppercase tracking-tighter">
      {code}
    </span>
    <span className="text-xs font-black tracking-widest group-hover:text-white uppercase">
      {label}
    </span>
    {/* Decorative corner on hover */}
    <div className="absolute top-0 right-0 w-0 h-0 border-t-[6px] border-r-[6px] border-transparent group-hover:border-r-white transition-all"></div>
  </Link>
);

export default function SciFiNavbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Get UTC time and add 5 hours 30 minutes for IST
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + (5.5 * 60 * 60000));
      const hh = ist.getHours().toString().padStart(2, '0');
      const mm = ist.getMinutes().toString().padStart(2, '0');
      const ss = ist.getSeconds().toString().padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="w-full h-14 bg-white border-b-2 border-black flex items-stretch font-mono relative z-[100] overflow-hidden">
      
      {/* 1. BRAND MODULE */}
      <div className="flex items-center px-6 border-r-4 border-black bg-zinc-50">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black animate-pulse"></div>
            <span className="text-lg font-black tracking-tighter italic">SUB_SYSTEM_vS</span>
          </div>
          <span className="text-[7px] font-bold tracking-[0.4em] opacity-50 -mt-1 uppercase">
            Neural_Interface
          </span>
        </div>
      </div>

      {/* 2. NAVIGATION MODULE */}
      <div className="hidden md:flex flex-1 items-stretch">
        <NavItem label="Intro" code="DIR_01" />
        <NavItem label="Experience" code="DIR_02" />
        <NavItem label="Projects" code="DIR_03" />
        <NavItem label="Certificates" code="DIR_04" />
        <NavItem label="Contact" code="DIR_05" />
      </div>

      {/* 3. SYSTEM STATUS MODULE (Right Side) */}
      <div className="flex items-stretch ml-auto">

        <div className="hidden lg:flex items-stretch border-r-2 border-black">
        <SocialIcon Icon={SiGithub} href="https://github.com" label="Github" />
        <SocialIcon Icon={SiLinkedin} href="https://linkedin.com" label="LinkedIn" />
        <SocialIcon Icon={SiX} href="https://twitter.com" label="Twitter" />
        <SocialIcon Icon={SiYoutube} href="https://youtube.com" label="YouTube" />
     
        <SocialIcon Icon={SiUpwork} href="https://upwork.com" label="Upwork" />
        <SocialIcon Icon={SiFiverr} href="https://fiverr.com" label="Fiverr" />
        <SocialIcon Icon={SiFreelancer} href="https://freelancer.com" label="Freelancer" />
 </div>
        
        {/* Signal Strength Visualizer */}
        <div className="hidden lg:flex items-center px-4 gap-1 border-l border-black/10">
          {[4, 7, 10, 6, 12].map((h, i) => (
            <div 
              key={i} 
              className="w-[2px] bg-black" 
              style={{ height: `${h}px`, animation: `pulse 1.5s infinite ${i * 0.2}s` }}
            ></div>
          ))}
        </div>

        {/* Time Readout */}
        <div className="flex flex-col justify-center px-6 border-l border-black bg-black text-white min-w-[120px]">
          <span className="text-[8px] font-bold opacity-50 uppercase tracking-widest">System_Clock (IST)</span>
          <span className="text-xs font-black tabular-nums">{time} IST</span>
        </div>
      </div>

      {/* Mobile Menu Toggle (Simplified for Sci-Fi) */}
      <div className="md:hidden flex items-center px-4 border-l border-black">
        <div className="space-y-1">
          <div className="w-6 h-[2px] bg-black"></div>
          <div className="w-4 h-[2px] bg-black ml-2"></div>
          <div className="w-6 h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Background Scanning Animation */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5 animate-[shimmer_4s_infinite]"></div>
    </nav>
  );
}