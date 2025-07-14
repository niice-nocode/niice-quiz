import React from 'react';
import { Separator } from './ui/separator';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps
}) => {
  return (
    <div className="inline-flex items-center gap-[9px] relative">
      {Array.from({ length: totalSteps }, (_, index) => (
        <Separator
          key={`step-${index}`}
          className={`relative w-5 h-1 rounded-[100px] ${
            index < currentStep ? "bg-[#ffffff]" : "bg-[#ffffff33]"
          }`}
        />
      ))}
    </div>
  );
};