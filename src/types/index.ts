export type CourseLevel = 'level_1' | 'level_2' | 'level_3';

export interface LessonTimestamp {
  time: string;
  seconds: number;
  title: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  durationMinutes: number;
  videoUrl: string; // Embeddable video URL (e.g., curated YouTube / high quality tutorial)
  summary: string;
  keyPoints: string[];
  timestamps: LessonTimestamp[];
  transcriptSnippet: string;
  practicePrompt?: string;
  resources: { title: string; url: string }[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  iconName: string;
  lessons: Lesson[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LevelQuiz {
  level: CourseLevel;
  title: string;
  description: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface GlossaryTerm {
  term: string;
  englishTerm: string;
  category: 'Asas' | 'Model & LLM' | 'Teknikal' | 'Etika';
  definition: string;
  example: string;
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  rating: number;
  studentsCount: string;
  coursesCount: number;
  avatar: string;
}

export interface StudentReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  content: string;
}

export interface CourseProject {
  title: string;
  description: string;
  deliverables: string[];
  showcaseImage: string;
  studentProjectsCount: number;
}

export interface ForumComment {
  id: string;
  lessonId?: string;
  author: string;
  role: 'Pelajar' | 'Tenaga Pengajar' | 'Moderator';
  avatar?: string;
  timestamp: string;
  content: string;
  likes: number;
  isLiked?: boolean;
  isPinned?: boolean;
  category: 'Soalan Pelajaran' | 'Kongsi Prompt' | 'Bincang Umum';
  replies?: {
    id: string;
    author: string;
    role: 'Pelajar' | 'Tenaga Pengajar' | 'Moderator';
    avatar?: string;
    timestamp: string;
    content: string;
    likes: number;
    isLiked?: boolean;
  }[];
}

export interface UserProgress {
  completedLessons: string[]; // lesson ids
  completedQuizzes: { [level in CourseLevel]?: number }; // score out of 100
  notes: { [lessonId: string]: string };
  userName: string;
  selectedLevel: CourseLevel;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  image: string;
  expertise: string[];
}
