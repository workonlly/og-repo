import React from 'react';


interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  hash: string; // To add to the Sci-Fi "Data" feel
  href: string; // Verification link
}

const certificates: Certificate[] = [
  { id: "01", title: "Full Stack AI Developer", issuer: "Lacleo Digital", date: "2024-PRESENT", hash: "VER_882x_A9", href: "https://drive.google.com/file/d/1LJEK3T2APjpj_YFcqDh3IDo6jUKXhByF/view?usp=sharing" },
  { id: "02", title: "Full Stack Developer", issuer: "Primerole", date: "2024", hash: "LLM_991z_B2", href: "https://drive.google.com/file/d/13Sjg0GUMI7C-ZnbaKwUoovdGxIyJcpY_/view?usp=drive_link" },
];

const CredentialEntry = ({ cert }: { cert: Certificate }) => (
  <div className="group relative border-b border-black/10 hover:bg-black hover:text-white transition-all duration-300 p-3 sm:p-4 flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 cursor-crosshair">
    {/* Left ID Branding */}
    <div className="flex items-center gap-4 md:w-1/4">
      <span className="text-[10px] font-black opacity-30 group-hover:text-zinc-500">[{cert.id}]</span>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest">{cert.issuer}</span>
        <h3 className="text-xs sm:text-sm font-black uppercase tracking-tighter">{cert.title}</h3>
      </div>
    </div>

    {/* Verification Visualizer */}
    <div className="hidden md:flex flex-1 items-center gap-2 overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity">
      <div className="h-[1px] flex-1 bg-current opacity-20"></div>
      <span className="text-[8px] font-mono whitespace-nowrap">SIGNATURE_HASH: {cert.hash}</span>
      <div className="h-[1px] flex-1 bg-current opacity-20"></div>
    </div>

    {/* Right Meta Info */}
    <div className="flex items-center justify-between md:justify-end md:w-1/4 gap-6">
      <div className="text-right">
        <div className="text-[8px] font-bold opacity-40 uppercase">Issue_Date</div>
        <div className="text-xs font-black">{cert.date}</div>
      </div>
      
      <a 
        href={cert.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-3 py-1 border border-black group-hover:border-white text-[10px] font-black hover:bg-white hover:text-black transition-all"
      >
        VIEW_VERIFICATION
      </a>
    </div>

    {/* Hover Scanline Effect */}
    <div className="absolute left-0 top-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-500"></div>
  </div>
);

export default function CertificateSection() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <section className="w-full max-w-7xl font-mono">
      {/* Section Header */}
      <div className="w-full relative z-10">
        <div className="w-full flex flex-row items-end justify-between gap-6 border-b-8 border-black pb-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black bg-black text-white px-3 py-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block"></span> VAULT_NODE: 0x04
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none">
              Credential<span className="text-zinc-300">_</span>Vault
            </h2>
            <span className="text-sm sm:text-base md:text-lg font-bold opacity-40 tracking-[0.2em] sm:tracking-[0.3em] uppercase">Auth_Level: Level_04_Encrypted</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 text-[10px] font-black opacity-40">
              <span className="w-2 h-2 bg-black rounded-full"></span> ENCRYPTION_ACTIVE
            </div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right">// ENCRYPTION: RSA-4096 // STATUS: VERIFIED</span>
          </div>
        </div>
      </div>

      {/* Database Container */}
      <div className="border-2 border-black bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Table Header Readout */}
        <div className="bg-zinc-100 border-b border-black px-4 py-2 flex text-[9px] font-black uppercase opacity-60">
          <span className="md:w-1/4">Ref_Source</span>
          <span className="flex-1 hidden md:block text-center">Encryption_Sync</span>
          <span className="md:w-1/4 text-right">Data_Status</span>
        </div>

        {/* Certificate List */}
        <div className="divide-y divide-black/5">
          {certificates.map((cert) => (
            <CredentialEntry key={cert.id} cert={cert} />
          ))}
        </div>

        {/* Bottom Status Bar */}
        <div className="bg-zinc-50 p-2 flex justify-between items-center px-4 border-t border-black">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
            <span className="text-[8px] font-black opacity-60 uppercase">All_Credentials_Validated</span>
          </div>
          <span className="text-[8px] font-bold opacity-30 uppercase tracking-widest">End_Of_Directory</span>
        </div>
      </div>
      </section>
    </div>
  );
}