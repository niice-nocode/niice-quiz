import React, { useState, useEffect, useRef } from 'react';
import { ProgressIndicator } from '../../components/ProgressIndicator';
import { QuizCard } from '../../components/QuizCard';
import { quizQuestions } from '../../data/quizData';
import { gsap } from 'gsap';
import star from '../../assets/images/star.svg';

interface QuizScreenProps {
  currentQuestion: number;
  onAnswer: (answer: string) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ 
  currentQuestion, 
  onAnswer 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const question = quizQuestions[currentQuestion];

  const cardRotations = ['lg:rotate-[-8deg]', 'lg:rotate-[-4deg]', 'lg:rotate-[4deg]', 'lg:rotate-[8deg]'];
  const imageRotations = ['rotate-[8deg]', 'rotate-[4deg]', 'rotate-[-4deg]', 'rotate-[-8deg]'];
  const images = ['/rectangle-51.png', '/rectangle-52.png', '/rectangle-51-1.png', '/rectangle-52-1.png'];

  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }
      );
    }
  }, [currentQuestion]);

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
    // Auto-advance after selection with a small delay
    setTimeout(() => {
      onAnswer(answerId);
      setSelectedAnswer(null);
    }, 800);
  };

  return (
    <div className="flex flex-col h-full min-h-screen lg:h-screen items-center justify-center gap-6 lg:gap-12 px-2 lg:px-[164px] py-6 lg:py-[86px] relative bg-primary-navy">
      <div className="flex flex-col w-full max-w-full lg:max-w-[1089.4px] items-center gap-6 lg:gap-[98px] relative">
        {/* Progress indicator */}
        <ProgressIndicator 
          currentStep={currentQuestion + 1} 
          totalSteps={quizQuestions.length} 
        />

        {/* Question */}
        <div className="w-full max-w-full lg:max-w-[672px] gap-6 lg:gap-8 flex flex-col items-center relative">
          <img
            className="w-[22px] h-[22px]"
            alt="Star"
            src={star}
          />

          <div
            ref={headingRef}
            className="relative w-full font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[1.1rem] lg:text-[length:var(--heading-h5-font-size)] lg:text-2xl text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]"
          >
            {question.question}
          </div>
        </div>

        {/* Answer cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2 relative w-full max-w-full lg:max-w-[900px]">
          {question.answers.map((answer, index) => (
            <QuizCard
              key={answer.id}
              answer={answer}
              isSelected={selectedAnswer === answer.id}
              onClick={() => handleAnswerSelect(answer.id)}
              rotation={cardRotations[index]}
              image={images[index]}
              imageRotation={imageRotations[index]}
            />
          ))}
        </div>

        {/* Question counter */}
        <div className="text-white/60 text-xs lg:text-sm">
          Vraag {currentQuestion + 1} van {quizQuestions.length}
        </div>
      </div>
    </div>
  );
};