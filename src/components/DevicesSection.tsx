import React from 'react';
import { Monitor, Tablet, Smartphone, Tv } from 'lucide-react';

export const DevicesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 border-t border-white/10 text-center">
      {/* Bold Header */}
      <div className="space-y-3 max-w-3xl mx-auto">
        <h2 className="font-['Oswald'] font-black text-3xl sm:text-5xl lg:text-6xl tracking-wider text-white uppercase">
          STREAM ON YOUR FAVORITE DEVICES
        </h2>
        <p className="font-sans text-xs sm:text-sm text-neutral-300 tracking-wide uppercase">
          Watch on your iPhone, tablet, computer, or stream on your TV with the Akademi AI Online app.
        </p>
      </div>

      {/* Device Mockup Showcase Frame */}
      <div className="relative max-w-5xl mx-auto pt-6">
        {/* Ambient Glow */}
        <div className="absolute inset-x-1/4 top-1/2 -translate-y-1/2 h-64 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

        {/* Multi-Device Composite Visual */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Main Desktop Monitor Frame */}
          <div className="w-full max-w-2xl bg-neutral-900 border border-white/20 p-2 sm:p-3 shadow-2xl space-y-2">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-black/60 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] text-neutral-400 font-mono pl-3">akademiai.online/bilik-kuliah</span>
            </div>
            <div className="relative aspect-video overflow-hidden bg-black">
              <img
                src="/src/assets/images/hero_ai_learning_1792520564015.jpg"
                alt="Desktop Preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-4 text-left">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-sans">
                  Sesi Kuliah HD Sedang Dimainkan
                </span>
                <span className="font-['Oswald'] text-lg text-white font-bold uppercase tracking-wide">
                  Mekanisme Perhatian Self-Attention Transformer
                </span>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Overlap Frame */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Tablet Mockup */}
            <div className="w-44 sm:w-52 bg-neutral-900 border border-white/20 p-2 shadow-2xl">
              <div className="aspect-[3/4] bg-black overflow-hidden relative">
                <img
                  src="/src/assets/images/course_level_intermediate_1792520565056.jpg"
                  alt="Tablet App"
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-black/80 text-left">
                  <div className="text-[9px] font-bold text-white uppercase font-sans">ChatClub Forum</div>
                  <div className="text-[8px] text-neutral-400 truncate">12 komen baru dari rakan sekelas</div>
                </div>
              </div>
            </div>

            {/* Mobile Phone Mockup */}
            <div className="w-28 sm:w-36 bg-neutral-900 border border-white/20 p-1.5 shadow-2xl">
              <div className="aspect-[9/18] bg-black overflow-hidden relative">
                <img
                  src="/src/assets/images/course_level_beginner_1792520563264.jpg"
                  alt="Mobile App"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-black/85 text-left">
                  <div className="text-[8px] font-bold text-white uppercase font-sans">Nota Pelajaran</div>
                  <div className="text-[7px] text-emerald-400">Tersimpan Luar Talian</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Device Icons Row */}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-xs uppercase tracking-widest text-neutral-400 font-semibold pt-4">
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4 text-white" />
          <span>Komputer & Mac</span>
        </div>
        <div className="flex items-center gap-2">
          <Tablet className="w-4 h-4 text-white" />
          <span>iPad & Tablet</span>
        </div>
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-white" />
          <span>iPhone & Android</span>
        </div>
        <div className="flex items-center gap-2">
          <Tv className="w-4 h-4 text-white" />
          <span>Smart TV (AirPlay & Cast)</span>
        </div>
      </div>
    </section>
  );
};
