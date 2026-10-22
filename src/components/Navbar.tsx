import React, { useState } from 'react';
import { Award, BookOpen, Terminal, Video, MessageSquare, Grid, Menu, X, CheckCircle2 } from 'lucide-react';
import { CourseLevel } from '../types';

interface NavbarProps {
  activeTab: 'curriculum' | 'promptlab' | 'visualizer';
  setActiveTab: (tab: 'curriculum' | 'promptlab' | 'visualizer') => void;
  selectedLevel: CourseLevel;
  onOpenQuiz: () => void;
  onOpenCertificate: () => void;
  onOpenGlossary: () => void;
  onOpenChatClub?: () => void;
  completedLessonsCount: number;
  totalLessonsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuiz,
  onOpenCertificate,
  onOpenGlossary,
  onOpenChatClub,
  completedLessonsCount,
  totalLessonsCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  const scrollToBento = () => {
    setActiveTab('curriculum');
    const el = document.getElementById('bento-course-selection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTheater = () => {
    setActiveTab('curriculum');
    const el = document.getElementById('lesson-theater');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForum = () => {
    setActiveTab('curriculum');
    if (onOpenChatClub) {
      onOpenChatClub();
    } else {
      const el = document.getElementById('chatclub-forum-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#000000]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-8 h-16">
        {/* Left: Brand Identity */}
        <button
          onClick={() => {
            setActiveTab('curriculum');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group shrink-0 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-md bg-white text-black flex items-center justify-center font-black text-xs tracking-wider transition-transform group-hover:scale-105">
            AI
          </div>
          <div className="flex flex-col">
            <span className="font-['Oswald'] font-bold text-lg sm:text-xl tracking-wider text-white uppercase leading-none">
              AKADEMI AI
            </span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans">
              Online Professional Training
            </span>
          </div>
        </button>

        {/* Center: Clean Typography Navigation (No Pill Badges / Zero Clutter) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-neutral-300">
          <button
            onClick={scrollToBento}
            className="hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            <span>Pilih Kursus</span>
          </button>

          <button
            onClick={scrollToTheater}
            className="hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            <span>Bilik Video</span>
          </button>

          <button
            onClick={scrollToForum}
            className="hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            <span>ChatClub Forum</span>
          </button>

          <button
            onClick={() => setActiveTab('promptlab')}
            className={`transition-colors flex items-center gap-1.5 focus:outline-none ${
              activeTab === 'promptlab' ? 'text-white font-bold border-b border-white pb-0.5' : 'hover:text-white'
            }`}
          >
            <span>Makmal Prompt</span>
          </button>

          <button
            onClick={onOpenGlossary}
            className="hover:text-white transition-colors focus:outline-none"
          >
            <span>Glosari</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="hover:text-white transition-colors focus:outline-none"
          >
            <span>Ujian Tahap</span>
          </button>
        </nav>

        {/* Right: Clean Progress & Sijil CTA */}
        <div className="hidden sm:flex items-center gap-5 shrink-0">
          {/* Subtle Progress Indicator */}
          <div
            onClick={onOpenCertificate}
            className="flex items-center gap-2 text-xs text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
            title="Klik untuk lihat kemajuan dan sijil tamat"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-white text-xs">{completedLessonsCount}/{totalLessonsCount}</span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 hidden xl:inline">Selesai</span>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onOpenCertificate}
            className="px-4 py-2 bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Sijil Rasmi</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-white/10 px-6 py-5 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium uppercase tracking-wider text-neutral-300">
            <button
              onClick={() => handleNavClick(scrollToBento)}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Pilih Kursus (Bento Grid)
            </button>
            <button
              onClick={() => handleNavClick(scrollToTheater)}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Bilik Kuliah Video
            </button>
            <button
              onClick={() => handleNavClick(scrollToForum)}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              ChatClub Forum Komuniti
            </button>
            <button
              onClick={() => handleNavClick(() => setActiveTab('promptlab'))}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Makmal Prompt Interaktif
            </button>
            <button
              onClick={() => handleNavClick(onOpenGlossary)}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Glosari Istilah AI
            </button>
            <button
              onClick={() => handleNavClick(onOpenQuiz)}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Ujian Tahap & Kuiz
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-neutral-400">
              Kemajuan: <strong className="text-white">{completedLessonsCount}/{totalLessonsCount}</strong> Pelajaran
            </span>
            <button
              onClick={() => handleNavClick(onOpenCertificate)}
              className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider"
            >
              Sijil Rasmi
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
