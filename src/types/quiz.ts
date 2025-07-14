export interface QuizAnswer {
  id: string;
  text: string;
  image: string;
  isCorrect?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  answers: QuizAnswer[];
  correctAnswer: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  matchStatus: 'perfect' | 'good' | 'interesting';
  message: string;
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
}

export interface QuizSubmission extends FormData {
  answers: string[];
  score: number;
  matchStatus: string;
  timestamp: string;
  userAgent: string;
}