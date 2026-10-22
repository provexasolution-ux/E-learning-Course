import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BentoCourseGrid } from './components/BentoCourseGrid';
import { CourseCurriculum } from './components/CourseCurriculum';
import { VideoPlayerView } from './components/VideoPlayerView';
import { ChatClubForum } from './components/ChatClubForum';
import { FacultySection } from './components/FacultySection';
import { InteractiveVisualizer } from './components/InteractiveVisualizer';
import { PromptLab } from './components/PromptLab';
import { QuizModal } from './components/QuizModal';
import { CertificateModal } from './components/CertificateModal';
import { GlossaryModal } from './components/GlossaryModal';
import { Footer } from './components/Footer';
import { CourseLevel, Lesson, UserProgress } from './types';
import { MODULES_DATA, LEVELS_CONFIG } from './data/coursesData';

const STORAGE_KEY = 'akademi_ai_user_progress_v2';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading localStorage', e);
    }
    return {
      completedLessons: ['les-1-1'],
      completedQuizzes: {},
      notes: {},
      userName: 'Ahmad Faiz bin Zulkifli',
      selectedLevel: 'level_1'
    };
  });

  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>(progress.selectedLevel || 'level_1');
  const [activeTab, setActiveTab] = useState<'curriculum' | 'promptlab' | 'visualizer'>('curriculum');

  const currentModules = MODULES_DATA.filter(m => m.level === selectedLevel);
  const allLessons = MODULES_DATA.flatMap(m => m.lessons);
  const currentLevelLessons = currentModules.flatMap(m => m.lessons);

  const [selectedLesson, setSelectedLesson] = useState<Lesson>(() => {
    return currentLevelLessons[0] || MODULES_DATA[0].lessons[0];
  });

  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [quizLevel, setQuizLevel] = useState<CourseLevel>('level_1');
  const [isCertOpen, setIsCertOpen] = useState<boolean>(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [initialPromptForLab, setInitialPromptForLab] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...progress,
        selectedLevel
      }));
    } catch (e) {
      console.error('Error saving progress', e);
    }
  }, [progress, selectedLevel]);

  const handleSelectLevel = (level: CourseLevel) => {
    setSelectedLevel(level);
    const newLevelModules = MODULES_DATA.filter(m => m.level === level);
    const newLevelLessons = newLevelModules.flatMap(m => m.lessons);
    if (newLevelLessons.length > 0) {
      setSelectedLesson(newLevelLessons[0]);
    }
  };

  const handleToggleComplete = (lessonId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setProgress(prev => {
      const exists = prev.completedLessons.includes(lessonId);
      const updated = exists
        ? prev.completedLessons.filter(id => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return { ...prev, completedLessons: updated };
    });
  };

  const handleSaveNote = (lessonId: string, noteText: string) => {
    setProgress(prev => ({
      ...prev,
      notes: { ...prev.notes, [lessonId]: noteText }
    }));
  };

  const handleSaveQuizScore = (level: CourseLevel, score: number) => {
    setProgress(prev => ({
      ...prev,
      completedQuizzes: { ...prev.completedQuizzes, [level]: score }
    }));
  };

  const handleSaveUserName = (name: string) => {
    setProgress(prev => ({
      ...prev,
      userName: name
    }));
  };

  const handleOpenQuiz = (level?: CourseLevel) => {
    setQuizLevel(level || selectedLevel);
    setIsQuizOpen(true);
  };

  const currentIndexInLevel = currentLevelLessons.findIndex(l => l.id === selectedLesson.id);
  const prevLesson = currentIndexInLevel > 0 ? currentLevelLessons[currentIndexInLevel - 1] : undefined;
  const nextLesson = currentIndexInLevel < currentLevelLessons.length - 1 ? currentLevelLessons[currentIndexInLevel + 1] : undefined;

  const handlePrevLesson = prevLesson ? () => setSelectedLesson(prevLesson) : undefined;
  const handleNextLesson = nextLesson ? () => setSelectedLesson(nextLesson) : undefined;

  const currentModule = currentModules.find(m => m.lessons.some(l => l.id === selectedLesson.id)) || currentModules[0];

  const handleOpenPromptLabWithPrompt = (promptText: string) => {
    setInitialPromptForLab(promptText);
    setActiveTab('promptlab');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const completedCountTotal = allLessons.filter(l => progress.completedLessons.includes(l.id)).length;
  const completedCountInLevel = currentLevelLessons.filter(l => progress.completedLessons.includes(l.id)).length;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white/20 selection:text-white">
      {/* CLI Conservatory Style Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedLevel={selectedLevel}
        onOpenQuiz={() => handleOpenQuiz(selectedLevel)}
        onOpenCertificate={() => setIsCertOpen(true)}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenChatClub={() => {
          setActiveTab('curriculum');
          setTimeout(() => {
            const el = document.getElementById('chatclub-forum-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        completedLessonsCount={completedCountTotal}
        totalLessonsCount={allLessons.length}
      />

      <main className="flex-1">
        {/* TAB 1: CURRICULUM FLOW (CLEAN MINIMALIST LAYOUT) */}
        {activeTab === 'curriculum' && (
          <div className="space-y-12 sm:space-y-16">
            {/* 1. Bento Design: PILIH TAHAP KURSUS (Depan Sekali) */}
            <div id="bento-course-selection" className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
              <BentoCourseGrid
                selectedLevel={selectedLevel}
                onSelectLevel={(lvl) => {
                  handleSelectLevel(lvl);
                  const stage = document.getElementById('lesson-theater');
                  if (stage) stage.scrollIntoView({ behavior: 'smooth' });
                }}
                onOpenPromptLab={() => {
                  setActiveTab('promptlab');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenVisualizer={() => {
                  setActiveTab('visualizer');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenCertificate={() => setIsCertOpen(true)}
                completedLessonsInLevel={{
                  level_1: progress.completedLessons.filter(id => id.startsWith('les-1')).length,
                  level_2: progress.completedLessons.filter(id => id.startsWith('les-2')).length,
                  level_3: progress.completedLessons.filter(id => id.startsWith('les-3')).length
                }}
              />
            </div>

            {/* 2. BILIK KULIAH VIDEO & CHATCLUB FORUM (Nak Course Video Jer + Ruang Komen) */}
            <div id="lesson-theater" className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10 border-t border-white/10">
              {/* Active Course Stage Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 bg-[#0e0e0e] border border-white/10">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-amber-400">
                    <span>Sedang Dimainkan</span>
                    <span>·</span>
                    <span>{LEVELS_CONFIG[selectedLevel].badge}</span>
                  </div>
                  <h2 className="font-['Oswald'] text-2xl sm:text-3xl font-bold tracking-wide text-white uppercase mt-0.5 truncate">
                    {LEVELS_CONFIG[selectedLevel].title}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-0.5 truncate">
                    {LEVELS_CONFIG[selectedLevel].subtitle} · {currentLevelLessons.length} Pelajaran Video ({completedCountInLevel} Selesai)
                  </p>
                </div>

                {/* Level Quick Switcher Buttons */}
                <div className="flex items-center gap-1.5 p-1 bg-black border border-white/10 text-xs font-sans uppercase tracking-wider self-start sm:self-auto shrink-0">
                  {(['level_1', 'level_2', 'level_3'] as CourseLevel[]).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => handleSelectLevel(lvl)}
                      className={`px-3 py-1.5 font-bold transition-all whitespace-nowrap ${
                        selectedLevel === lvl
                          ? 'bg-white text-black shadow-md'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {LEVELS_CONFIG[lvl].badge}
                    </button>
                  ))}
                </div>
              </div>

              {/* Course Video Player (Left 8 cols) & Curriculum (Right 4 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <VideoPlayerView
                    lesson={selectedLesson}
                    levelBadge={LEVELS_CONFIG[selectedLevel].badge}
                    moduleTitle={currentModule?.title || 'Modul Pembelajaran'}
                    isCompleted={progress.completedLessons.includes(selectedLesson.id)}
                    onToggleComplete={handleToggleComplete}
                    onPrevLesson={handlePrevLesson}
                    onNextLesson={handleNextLesson}
                    savedNote={progress.notes[selectedLesson.id] || ''}
                    onSaveNote={handleSaveNote}
                    onOpenPromptLabWithPrompt={handleOpenPromptLabWithPrompt}
                  />
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <CourseCurriculum
                    modules={currentModules}
                    selectedLessonId={selectedLesson.id}
                    onSelectLesson={(lesson) => {
                      setSelectedLesson(lesson);
                      if (window.innerWidth < 1024) {
                        const stage = document.getElementById('lesson-theater');
                        if (stage) stage.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    completedLessonIds={progress.completedLessons}
                    onToggleComplete={handleToggleComplete}
                  />
                </div>
              </div>

              {/* Ruang Komen & Forum ChatClub (Directly under the Course Video) */}
              <div id="chatclub-forum-section" className="pt-6">
                <ChatClubForum
                  currentLessonId={selectedLesson.id}
                  currentLessonTitle={selectedLesson.title}
                  userName={progress.userName}
                />
              </div>
            </div>

            {/* 3. Faculty Section: TRAIN WITH OUR INDUSTRY-LEADING FACULTY */}
            <FacultySection />
          </div>
        )}

        {/* TAB 2: PROMPT LAB */}
        {activeTab === 'promptlab' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
            <PromptLab initialPrompt={initialPromptForLab} />
          </div>
        )}

        {/* TAB 3: INTERACTIVE VISUALIZER */}
        {activeTab === 'visualizer' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
            <InteractiveVisualizer />
          </div>
        )}
      </main>

      {/* Global Modals */}
      <QuizModal
        level={quizLevel}
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSaveScore={handleSaveQuizScore}
        onViewCertificate={() => setIsCertOpen(true)}
      />

      <CertificateModal
        isOpen={isCertOpen}
        onClose={() => setIsCertOpen(false)}
        userName={progress.userName}
        onSaveUserName={handleSaveUserName}
        selectedLevel={selectedLevel}
        completedQuizzes={progress.completedQuizzes}
        completedLessonsCount={completedCountTotal}
        totalLessonsCount={allLessons.length}
      />

      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      {/* Black Theme Footer */}
      <Footer
        onSelectLevel={(lvl) => {
          handleSelectLevel(lvl);
          setActiveTab('curriculum');
          const el = document.getElementById('lesson-theater');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenCertificate={() => setIsCertOpen(true)}
        onOpenPromptLab={() => {
          setActiveTab('promptlab');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
