import React from 'react';
import { Play, ArrowUpRight, Sparkles, Award, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { CourseLevel } from '../types';
import { LEVELS_CONFIG } from '../data/coursesData';

interface BentoCourseGridProps {
  selectedLevel: CourseLevel;
  onSelectLevel: (lvl: CourseLevel) => void;
  onOpenPromptLab: () => void;
  onOpenVisualizer: () => void;
  onOpenCertificate: () => void;
  completedLessonsInLevel: Record<CourseLevel, number>;
}

export const BentoCourseGrid: React.FC<BentoCourseGridProps> = ({
  selectedLevel,
  onSelectLevel,
  onOpenPromptLab,
  onOpenVisualizer,
  onOpenCertificate,
  completedLessonsInLevel
}) => {
  const l1 = LEVELS_CONFIG['level_1'];
  const l2 = LEVELS_CONFIG['level_2'];
  const l3 = LEVELS_CONFIG['level_3'];

  return (
    <section className="space-y-6 pt-4">
      {/* Bento Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-400">
            PILIH LALUAN KURSUS
          </span>
          <h2 className="font-['Oswald'] font-black text-3xl sm:text-5xl tracking-wider text-white uppercase mt-0.5">
            TEROKAI KURSUS MENGIKUT TAHAP
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-md">
          Pilih mana-mana modul di bawah untuk memulakan video kuliah, menyertai perbincangan ChatClub, dan memperolehi sijil.
        </p>
      </div>

      {/* The Bento Grid (12 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* ================= BENTO ITEM 1: TAHAP 1 (Large Feature Card - 7 Cols) ================= */}
        <div
          onClick={() => onSelectLevel('level_1')}
          className={`md:col-span-7 bg-[#0e0e0e] border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-xl ${
            selectedLevel === 'level_1'
              ? 'border-white ring-1 ring-white/40'
              : 'border-white/10 hover:border-white/30'
          }`}
        >
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-sans uppercase tracking-wider">
                <span className="text-amber-400 font-bold">{l1.badge}</span>
                <span>·</span>
                <span>{l1.totalLessons} Pelajaran Video</span>
                <span>·</span>
                <span>{l1.estimatedHours}</span>
              </div>
              {selectedLevel === 'level_1' ? (
                <span className="flex items-center gap-1 text-[11px] font-sans font-bold uppercase tracking-wider text-black bg-white px-3 py-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Sedang Ditonton</span>
                </span>
              ) : (
                <span className="w-8 h-8 bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              )}
            </div>

            <div className="space-y-2 max-w-lg">
              <h3 className="font-['Oswald'] text-2xl sm:text-3xl font-bold tracking-wide text-white uppercase group-hover:text-amber-400 transition-colors">
                {l1.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {l1.description}
              </p>
            </div>
          </div>

          {/* Visual Showcase Frame */}
          <div className="mt-6 pt-2 relative overflow-hidden aspect-[21/9] sm:aspect-[16/7] bg-black border border-white/10">
            <img
              src={l1.coverImage}
              alt={l1.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-end justify-between p-4">
              <div className="text-white text-xs">
                <div className="font-sans font-bold text-white uppercase tracking-wider">Asas Model, Data & Prompting</div>
                <div className="text-neutral-400 text-[11px]">Sesuai untuk semua tanpa latar teknikal</div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-white text-black shrink-0">
                <Play className="w-3 h-3 fill-black" />
                <span>{selectedLevel === 'level_1' ? 'Tonton Kuliah' : 'Pilih Kursus'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BENTO ITEM 2: TAHAP 2 (Medium Card - 5 Cols) ================= */}
        <div
          onClick={() => onSelectLevel('level_2')}
          className={`md:col-span-5 bg-[#0e0e0e] border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-xl ${
            selectedLevel === 'level_2'
              ? 'border-white ring-1 ring-white/40'
              : 'border-white/10 hover:border-white/30'
          }`}
        >
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-sans uppercase tracking-wider">
                <span className="text-emerald-400 font-bold">{l2.badge}</span>
                <span>·</span>
                <span>{l2.totalLessons} Pelajaran</span>
              </div>
              {selectedLevel === 'level_2' ? (
                <span className="flex items-center gap-1 text-[11px] font-sans font-bold uppercase tracking-wider text-black bg-white px-3 py-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Sedang Ditonton</span>
                </span>
              ) : (
                <span className="w-8 h-8 bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-['Oswald'] text-2xl font-bold tracking-wide text-white uppercase group-hover:text-emerald-400 transition-colors">
                {l2.title}
              </h3>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed line-clamp-2">
                Kuasai LLM lanjutan, penjanaan visual fotorealistik, sintesis PDF dokumen panjang, dan automasi lembaran kerja.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-2 relative overflow-hidden aspect-[16/9] bg-black border border-white/10">
            <img
              src={l2.coverImage}
              alt={l2.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-between p-4">
              <div className="text-white text-xs">
                <div className="font-sans font-bold text-white uppercase tracking-wider">Alatan Generative AI</div>
                <div className="text-neutral-400 text-[11px]">{l2.estimatedHours} · Projek Akhir Komersial</div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-black bg-white px-3 py-1">
                {selectedLevel === 'level_2' ? 'Tonton Kuliah' : 'Pilih Kursus'}
              </span>
            </div>
          </div>
        </div>

        {/* ================= BENTO ITEM 3: TAHAP 3 (Advanced Deep Learning - 4 Cols) ================= */}
        <div
          onClick={() => onSelectLevel('level_3')}
          className={`md:col-span-4 bg-[#0e0e0e] border transition-all duration-300 p-6 flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-xl ${
            selectedLevel === 'level_3'
              ? 'border-white ring-1 ring-white/40'
              : 'border-white/10 hover:border-white/30'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-purple-400">{l3.badge}</span>
              {selectedLevel === 'level_3' ? (
                <span className="flex items-center gap-1 text-[11px] font-sans font-bold uppercase tracking-wider text-black bg-white px-2.5 py-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Aktif</span>
                </span>
              ) : (
                <span className="w-7 h-7 bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              )}
            </div>

            <h3 className="font-['Oswald'] text-xl font-bold tracking-wide text-white uppercase group-hover:text-purple-400 transition-colors">
              {l3.title}
            </h3>

            <p className="font-sans text-xs text-neutral-300 leading-relaxed line-clamp-3">
              Mekanisme Self-Attention Transformer, embedding berdimensi tinggi, pangkalan data vektor, RAG saluran pengeluaran dan Ejen AI autonomi.
            </p>
          </div>

          <div className="mt-5 relative overflow-hidden aspect-[16/10] bg-black border border-white/10">
            <img
              src={l3.coverImage}
              alt={l3.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <div className="text-[11px] text-white font-sans font-bold uppercase tracking-wider">
                {l3.totalLessons} Pelajaran · 6.0 Jam Amali Kod
              </div>
            </div>
          </div>
        </div>

        {/* ================= BENTO ITEM 4: MAKMAL PROMPT CRTF (4 Cols) ================= */}
        <div
          onClick={onOpenPromptLab}
          className="md:col-span-4 bg-[#0e0e0e] text-white border border-white/10 p-6 flex flex-col justify-between group cursor-pointer shadow-xl hover:border-white/30 transition-all relative overflow-hidden"
        >
          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-blue-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Makmal Amali Terbina</span>
              </div>
              <span className="w-7 h-7 bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <h3 className="font-['Oswald'] text-xl font-bold tracking-wide text-white uppercase group-hover:text-blue-400 transition-colors">
              Makmal Formula Prompt CRTF
            </h3>

            <p className="font-sans text-xs text-neutral-300 leading-relaxed">
              Bina dan uji prompt berstruktur untuk emel korporat, analisis jualan dan strategi perniagaan tanpa tekaan.
            </p>
          </div>

          {/* Code Preview Chip */}
          <div className="mt-5 p-3 bg-black border border-white/10 font-mono text-[11px] text-neutral-300 space-y-1">
            <div className="text-blue-400">[C] Konteks: Objektif & Latar</div>
            <div className="text-emerald-400">[R] Peranan: Pakar Strategi</div>
            <div className="text-amber-400">[T] Tugasan: Analisis + Kekangan</div>
            <div className="text-neutral-400">[F] Format: Jadual & Pelan 14 Hari</div>
          </div>
        </div>

        {/* ================= BENTO ITEM 5: SIMULATOR & PENGESAHAN SIJIL (4 Cols) ================= */}
        <div
          onClick={onOpenVisualizer}
          className="md:col-span-4 bg-[#0e0e0e] border border-white/10 p-6 flex flex-col justify-between group cursor-pointer shadow-xl hover:border-white/30 transition-all"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-amber-400">Simulator Visual</span>
              <span className="w-7 h-7 bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <h3 className="font-['Oswald'] text-xl font-bold tracking-wide text-white uppercase group-hover:text-amber-400 transition-colors">
              Simulator Transformer & RAG
            </h3>

            <p className="font-sans text-xs text-neutral-300 leading-relaxed">
              Terokai pengiraan matriks perhatian Self-Attention dan pemadanan vektor cosine similarity secara interaktif.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
            <span className="font-sans font-medium text-white">Kajian Kes RAG Terbina</span>
            <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
              Buka Simulator &rarr;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
