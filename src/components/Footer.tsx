import React, { useState } from 'react';
import { CourseLevel } from '../types';
import { Sparkles, Send } from 'lucide-react';

interface FooterProps {
  onSelectLevel: (lvl: CourseLevel) => void;
  onOpenGlossary: () => void;
  onOpenCertificate: () => void;
  onOpenPromptLab: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectLevel,
  onOpenGlossary,
  onOpenCertificate,
  onOpenPromptLab
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-neutral-400 text-xs border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Brand & Bio (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-black text-xs">
                AI
              </div>
              <span className="font-['Oswald'] text-xl font-bold tracking-wider text-white uppercase">
                AKADEMI AI ONLINE
              </span>
            </div>
            <p className="font-sans text-xs text-neutral-400 max-w-sm leading-relaxed">
              Inisiatif pendidikan AI komprehensif berperingkat untuk membina kemahiran praktikal, kefahaman teori dan pensijilan rasmi tenaga kerja masa hadapan.
            </p>
            <div className="text-[11px] text-neutral-500 font-mono">
              © 2026 AKADEMI AI ONLINE. HAK CIPTA TERPELIHARA.
            </div>
          </div>

          {/* Col 2: Course Links (2 Cols) */}
          <div className="md:col-span-2 space-y-3 font-sans">
            <div className="font-bold text-white uppercase tracking-wider text-xs">Tahap Kursus</div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={() => onSelectLevel('level_1')} className="hover:text-white transition-colors">
                  Tahap 1: Pemula
                </button>
              </li>
              <li>
                <button onClick={() => onSelectLevel('level_2')} className="hover:text-white transition-colors">
                  Tahap 2: Pengamal
                </button>
              </li>
              <li>
                <button onClick={() => onSelectLevel('level_3')} className="hover:text-white transition-colors">
                  Tahap 3: Mahir
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources (2 Cols) */}
          <div className="md:col-span-2 space-y-3 font-sans">
            <div className="font-bold text-white uppercase tracking-wider text-xs">Alatan & Ujian</div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={onOpenPromptLab} className="hover:text-white transition-colors">
                  Makmal Prompt CRTF
                </button>
              </li>
              <li>
                <button onClick={onOpenGlossary} className="hover:text-white transition-colors">
                  Glosari Istilah AI
                </button>
              </li>
              <li>
                <button onClick={onOpenCertificate} className="hover:text-white transition-colors">
                  Pengesahan Sijil
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Form (4 Cols) Matching Screenshot */}
          <div className="md:col-span-4 space-y-3 font-sans">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Never miss a step.
            </div>
            <p className="text-xs text-neutral-400">
              Langgan buletin kami untuk tutorial prompt terkini, kajian kes sistem AI, dan kemas kini modul video baharu.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat emel anda..."
                required
                className="flex-1 px-3 py-2 bg-neutral-900 border border-white/20 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-white text-black font-bold uppercase text-xs hover:bg-neutral-200 transition-colors shrink-0"
              >
                {subscribed ? 'Dilanggan!' : 'LANGGAN'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
