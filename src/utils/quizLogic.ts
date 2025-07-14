import { QuizResult, QuizSubmission } from '../types/quiz';
import { quizQuestions } from '../data/quizData';

export const calculateQuizResult = (answers: string[]): QuizResult => {
  const correctAnswers = ['C', 'B', 'C', 'A', 'B', 'A'];
  let score = 0;

  answers.forEach((answer, index) => {
    // Question 4 has two correct answers (A or C)
    if (index === 3) {
      if (answer === 'A' || answer === 'C') {
        score++;
      }
    } else if (answer === correctAnswers[index]) {
      score++;
    }
  });

  let matchStatus: 'perfect' | 'good' | 'interesting';
  let message: string;

  if (score >= 5) {
    matchStatus = 'perfect';
    message = '🎉 Jij bent een perfecte match voor ons team! Wanneer begin je?';
  } else if (score >= 3) {
    matchStatus = 'good';
    message = '🔥 Je zit goed in de buurt, get in touch!';
  } else {
    matchStatus = 'interesting';
    message = '✨ Interessant profiel — we zijn benieuwd naar je motivatie!';
  }

  return {
    score,
    totalQuestions: quizQuestions.length,
    matchStatus,
    message
  };
};

export const submitQuizData = async (
  formData: { name: string; email: string; phone?: string },
  answers: string[],
  result: QuizResult
): Promise<boolean> => {
  const submission: QuizSubmission = {
    ...formData,
    answers,
    score: result.score,
    matchStatus: result.message,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  };

  try {
    // Replace with actual Make webhook URL
    const webhookUrl = 'https://hook.eu2.make.com/crzsqhs1ez2em8ictjpqlckuopttinmj';
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission)
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to submit quiz data:', error);
    return false;
  }
};