import React from 'react';
import { Card, CardContent } from './ui/card';
import { QuizAnswer } from '../types/quiz';

interface QuizCardProps {
  answer: QuizAnswer;
  isSelected: boolean;
  onClick: () => void;
  rotation: string;
  image: string;
  imageRotation: string;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  answer,
  isSelected,
  onClick,
  rotation,
  image,
  imageRotation
}) => {
  return (
    <Card
      className={`w-auto lg:w-[259px] ${rotation} shadow-xxlarge bg-white rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
        isSelected
          ? "border-4 border-solid border-[#8dde76] w-auto lg:w-[267px]"
          : ""
      }`}
      onClick={onClick}
    >
      <CardContent className="flex flex-row lg:flex-col items-center gap-3.5 p-[5px] lg:pb-5">
        <img
          className={`w-auto lg:w-full max-w-[35%] lg:max-w-[100%] h-auto lg:h-[200px] min-h-[100px] lg:min-h-auto aspect-[2/1] lg:aspect-auto relative object-cover rounded-md`}
          alt="Answer option"
          src={answer.image}
        />
        <div className="relative w-auto lg:w-[230px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] text-left lg:text-center tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
          {answer.text}
        </div>
      </CardContent>
    </Card>
  );
};