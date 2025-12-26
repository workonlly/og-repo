'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Radio, 
  Send, 
  AlertCircle, 
  Terminal, 
  Zap, 
  Wifi, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Command,
  ChevronUp
} from 'lucide-react';
import { toast } from 'sonner';

export const NoirContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [waveformData, setWaveformData] = useState<number[]>(Array(40).fill(0.1));
  const [signalStatus, setSignalStatus] = useState<'IDLE' | 'ACTIVE' | 'SENDING'>('IDLE');
  const [uptime, setUptime] = useState("00:00:00");

  // System Uptime Logic
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

  // Waveform logic
  useEffect(() => {
    if (formData.message.length > 0) {
      setSignalStatus('ACTIVE');
      setWaveformData(Array(40).fill(0).map(() => 0.2 + Math.random() * 0.6));
    } else {
      setSignalStatus('IDLE');
      setWaveformData(Array(40).fill(0.1));
    }
  }, [formData.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    setSignalStatus('SENDING');
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success('DATA_UPLOAD_SUCCESS', {
      description: 'Your transmission has been archived by the system.',
    });
    setFormData({ name: '', email: '', message: '' });
    setIsTransmitting(false);
    setSignalStatus('IDLE');
  };

  return (
    <div className=" font-mono text-black selection:bg-black selection:text-white">
      <section ref={sectionRef} id="contact" className="min-h-screen py-24 px-6 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* --- HEADER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-8 border-black pb-8 mb-16"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-black bg-black text-white px-3 py-1">
                <Radio size={14} className="animate-pulse" /> BROADCAST_NODE: 0x01
              </div>
              <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                Contact<span className="text-zinc-300">_</span>Me
              </h2>
            </div>
            <div className="flex flex-col items-end gap-1">
               <div className="flex items-center gap-2 text-[10px] font-black opacity-40">
                  <ShieldCheck size={12} /> SECURE_PROTOCOL_ACTIVE
               </div>
               <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right">
                  // ENCRYPTION: RSA-4096 // STATUS: {signalStatus}
               </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* --- FORM --- */}
            <motion.div className="lg:col-span-3 border-4 border-black bg-white p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-10 border-b-2 border-black pb-4">
                <Terminal size={18} />
                <span className="text-xs font-black tracking-widest uppercase">Input_Stream_Sequence</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase opacity-50 block tracking-widest"> {'>'} IDENTITY</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Name/Designation"
                      className="w-full bg-transparent border-b-2 border-black p-2 focus:bg-black focus:text-white outline-none transition-all placeholder:text-zinc-300 font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase opacity-50 block tracking-widest"> {'>'} FREQUENCY</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="return_path@domain.com"
                      className="w-full bg-transparent border-b-2 border-black p-2 focus:bg-black focus:text-white outline-none transition-all placeholder:text-zinc-300 font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase opacity-50 block tracking-widest"> {'>'} PAYLOAD</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    placeholder="Commencing message transmission..."
                    className="w-full bg-transparent border-2 border-black p-4 focus:bg-black focus:text-white outline-none transition-all placeholder:text-zinc-300 resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isTransmitting}
                  className="w-full border-4 border-black p-4 font-black text-xl flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-all disabled:opacity-30 group"
                >
                  {isTransmitting ? 'UPLOADING...' : 'INITIATE_BROADCAST'}
                  <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* --- SIDEBAR --- */}
            <div className="lg:col-span-2 space-y-8">
              <div className="border-4 border-black p-6 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Wifi size={16} className={signalStatus !== 'IDLE' ? 'animate-pulse' : ''} />
                    <span className="text-xs font-black uppercase tracking-widest">Signal_Monitor</span>
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 border border-black ${signalStatus === 'SENDING' ? 'bg-black text-white' : ''}`}>
                    {signalStatus}
                  </span>
                </div>
                
                <div className="h-24 flex items-center justify-center gap-[2px] border-y border-black/10 py-4">
                  {waveformData.map((height, i) => (
                    <motion.div key={i} className="w-1.5 bg-black" animate={{ height: `${height * 100}%` }} transition={{ duration: 0.1 }} />
                  ))}
                </div>
              </div>

              <div className="border-4 border-black p-6 space-y-4">
                <h3 className="text-xs font-black uppercase mb-4 border-b border-black pb-2 flex items-center gap-2">
                  <Zap size={14} /> Link_Directives
                </h3>
                {[
                  { label: 'EMAIL_1', value: 'singleuse335@gmail.com' },
                  { label: 'EMAIL_2', value: 'workonlly335@gmail.com' },
                  { label: 'Terminal', value: 'sujal.sh' },
                ].map((link, i) => (
                  <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-black hover:text-white p-2 border border-transparent hover:border-black transition-all">
                    <span className="text-[10px] font-bold opacity-50 group-hover:opacity-100">{link.label}</span>
                    <span className="text-xs font-black uppercase tracking-tighter">{link.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-black text-white p-4 flex justify-between items-center border-4 border-black">
                <div className="flex items-center gap-3">
                  <AlertCircle size={16} />
                  <span className="text-[9px] font-black tracking-widest uppercase">Response_Time</span>
                </div>
                <span className="text-xs font-black italic">{'<'} 24_HRS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SYSTEM FOOTER --- */}
      <footer className="border-t-8 border-black pt-12 pb-6 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-2 space-y-4">
               <div className="flex items-center gap-2">
                  <Command size={24} strokeWidth={3} />
                  <span className="text-2xl font-black tracking-tighter italic uppercase">Sujal_OS.v5</span>
               </div>
               <p className="text-xs font-bold leading-relaxed max-w-sm opacity-60">
                  Built with high-performance logic and clean architectural protocols. 
                  Synchronizing complex systems into elegant digital reality.
               </p>
            </div>

            {/* Quick System Links */}
            <div className="space-y-4">
               <h4 className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-2">Directories</h4>
               <ul className="text-xs font-bold space-y-2 uppercase">
                  <li className="hover:translate-x-1 transition-transform cursor-pointer">/root</li>
                  <li className="hover:translate-x-1 transition-transform cursor-pointer">/projects</li>
                  <li className="hover:translate-x-1 transition-transform cursor-pointer">/experience</li>
               </ul>
            </div>

            {/* System Status */}
            <div className="space-y-4">
               <h4 className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-2">System_Logs</h4>
               <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                     <span className="opacity-50 flex items-center gap-1"><Clock size={10}/> UPTIME</span>
                     <span>{uptime}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold">
                     <span className="opacity-50 flex items-center gap-1"><Globe size={10}/> REGION</span>
                     <span>ASIA/NOIDA</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4">
             <span className="text-[10px] font-black uppercase tracking-widest">
                © 2025 SUJAL // ALL_PROTOCOLS_RESERVED
             </span>
             <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-[10px] font-black border-2 border-black px-4 py-1 hover:bg-black hover:text-white transition-all group"
             >
                TOP <ChevronUp size={12} className="group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>
      </footer>
    </div>
  );
};