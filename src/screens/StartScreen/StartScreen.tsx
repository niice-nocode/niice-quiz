import React, { useEffect, useRef } from 'react';
import { Button } from '../../components/ui/button';
import { gsap } from 'gsap';
import star from '../../assets/images/star.svg';

interface StartScreenProps {
  onStart: () => void;
}

const headlineText = `Ben jij onze nieuwe Head of Design and Technology?`;
const subText = `Een quiz om te kijken of we bij elkaar passen.`;

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Headline animatie
    if (headlineRef.current) {
      headlineRef.current.innerHTML = `<span style=\"display: block; overflow: hidden;\"><span style=\"display: inline-block;\">${headlineText}</span></span>`;
      const spans = headlineRef.current.querySelectorAll('span span');
      gsap.fromTo(spans,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "expo.out",
          delay: 0.5
        }
      );
    }
    // SubText animatie
    if (subTextRef.current) {
      subTextRef.current.innerHTML = `<span style=\"display: inline-block; overflow: hidden;\"><span style=\"display: inline-block;\">${subText}</span></span>`;
      const subSpan = subTextRef.current.querySelector('span span');
      gsap.fromTo(subSpan,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "expo.out",
          delay: 1.2 // iets na de headline
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col h-screen min-h-screen items-center justify-center gap-12 px-4 relative bg-primary-navy">
      <div className="flex flex-col items-center gap-8 max-w-4xl text-center">
        <img
          className="w-[22px] h-[22px]"
          alt="Star"
          src={star}
        />
        <h1
          ref={headlineRef}
          className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] lg:text-5xl tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]"
        >
          {/* De tekst wordt via JS geplaatst */}
        </h1>
        <p
          ref={subTextRef}
          className="mt-6 text-white text-base font-text-regular-medium max-w-2xl"
        >
          {/* De tekst wordt via JS geplaatst */}
        </p>
        <Button
          onClick={onStart}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-[#e51f5c] rounded-3xl backdrop-blur-[20px] hover:bg-[#d01a52] transition-all duration-300 hover:scale-105 text-lg"
        >
          <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
            Start de quiz
          </span>
        </Button>
      </div>
    </div>
  );
};