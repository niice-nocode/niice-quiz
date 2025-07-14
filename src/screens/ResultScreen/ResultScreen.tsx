import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { QuizResult } from '../../types/quiz';
import { submitQuizData } from '../../utils/quizLogic';
import star from '../../assets/images/star.svg';

interface ResultScreenProps {
  result: QuizResult;
  answers: string[];
  onSubmit: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ 
  result, 
  answers, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mailadres is verplicht';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Voer een geldig e-mailadres in';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const success = await submitQuizData(formData, answers, result);
      if (success) {
        onSubmit();
      } else {
        alert('Er ging iets mis bij het versturen. Probeer het opnieuw.');
      }
    } catch (error) {
      alert('Er ging iets mis bij het versturen. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6 lg:gap-8 px-2 lg:px-[164px] py-6 lg:py-[86px] relative bg-primary-navy">
      <div className="flex flex-col w-full max-w-full lg:max-w-[600px] items-center gap-6 lg:gap-8 relative">
        <img
          className="w-[22px] h-[22px]"
          alt="Star"
          src={star}
        />

        {/* Result message */}
        <div className="text-center px-2 lg:px-0">
          <h2 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-xl lg:text-[length:var(--heading-h5-font-size)] lg:text-3xl tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)] mb-4">
            {result.message}
          </h2>
          <p className="text-white/80 text-base lg:text-lg">
            Je hebt {result.score} van de {result.totalQuestions} vragen goed beantwoord.
          </p>
        </div>

        {/* Form */}
        <Card className="w-full bg-white/10 backdrop-blur-md">
          <CardContent className="p-3 lg:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white text-xs lg:text-sm font-normal mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 lg:px-4 py-3 lg:py-4 text-white bg-transparent rounded-none placeholder-white/60 border-b border-custom-border focus:outline-none focus:border-custom-border-focus hover:border-custom-border-focus transition-colors duration-300 ease-in-out text-base lg:text-[length:var(--text-regular-medium-font-size)]"
                  placeholder="Vul hier je naam in"
                />
                {errors.name && <p className="text-red-400 text-xs lg:text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-white text-xs lg:text-sm font-normal mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 lg:px-4 py-3 lg:py-4 text-white bg-transparent rounded-none placeholder-white/60 border-b border-custom-border focus:outline-none focus:border-custom-border-focus hover:border-custom-border-focus transition-colors duration-300 ease-in-out text-base lg:text-[length:var(--text-regular-medium-font-size)]"
                  placeholder="jouw@email.com"
                />
                {errors.email && <p className="text-red-400 text-xs lg:text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4 lg:mb-6">
                <label className="block text-white text-xs lg:text-sm font-normal mb-2">
                  Telefoonnummer (optioneel)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 lg:px-4 py-3 lg:py-4 text-white bg-transparent rounded-none border-b border-custom-border focus:outline-none focus:border-custom-border-focus hover:border-custom-border-focus transition-colors duration-300 ease-in-out text-base lg:text-[length:var(--text-regular-medium-font-size)]"
                  placeholder="06 12345678"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full lg:w-1/2 inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#e51f5c] rounded-3xl backdrop-blur-[20px] hover:bg-[#d01a52] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-base lg:text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  {isSubmitting ? 'Versturen...' : 'Verstuur mijn antwoorden'}
                </span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};