import React from 'react';
import star from '../../assets/images/star.svg';

export const ThankYouScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-8 px-4 relative bg-primary-navy">
      <div className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <img
          className="w-[22px] h-[22px]"
          alt="Star"
          src={star}
        />
        
        <h1 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] lg:text-4xl tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
          Yesss, bedankt! We hebben je antwoorden ontvangen en nemen snel contact met je op!
        </h1>

        <div className="text-6xl animate-bounce">
          🎉
        </div>
      </div>
    </div>
  );
};