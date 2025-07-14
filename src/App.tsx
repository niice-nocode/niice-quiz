import React from "react";
import { useState } from "react";
import { StartScreen } from "./screens/StartScreen";
import { QuizScreen } from "./screens/QuizScreen";
import { ResultScreen } from "./screens/ResultScreen";
import { ThankYouScreen } from "./screens/ThankYouScreen";
import { calculateQuizResult } from "./utils/quizLogic";
import { quizQuestions } from "./data/quizData";

type AppState = 'start' | 'quiz' | 'result' | 'thankyou';

export const App = () => {
  const [currentState, setCurrentState] = useState<AppState>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => {
    setCurrentState('quiz');
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentState('result');
    }
  };

  const handleSubmit = () => {
    setCurrentState('thankyou');
  };

  const result = currentState === 'result' || currentState === 'thankyou' 
    ? calculateQuizResult(answers) 
    : null;

  switch (currentState) {
    case 'start':
      return <StartScreen onStart={handleStart} />;
    case 'quiz':
      return (
        <QuizScreen 
          currentQuestion={currentQuestion} 
          onAnswer={handleAnswer} 
        />
      );
    case 'result':
      return result ? (
        <ResultScreen 
          result={result} 
          answers={answers} 
          onSubmit={handleSubmit} 
        />
      ) : null;
    case 'thankyou':
      return <ThankYouScreen />;
    default:
      return <StartScreen onStart={handleStart} />;
  }
};
