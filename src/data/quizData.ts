import { QuizQuestion } from '../types/quiz';
import gelijkBeginnen from '../assets/images/gelijk-beginnen.avif';
import teamSamenwerken from '../assets/images/team-samenwerken.avif';
import koffieDrinken from '../assets/images/koffie-drinken.avif';
import redFlag from '../assets/images/red-flag.avif';
import nieuwsteModel from '../assets/images/nieuwste-model.avif';
import businessCase from '../assets/images/business-case.avif';
import prototype from '../assets/images/prototype.avif';
import duidelijkCommuniceren from '../assets/images/duidelijk-communiceren.avif';
import aiLostAllesOp from '../assets/images/ai-lost-alles-op.avif';
import alternatief from '../assets/images/alternatief.avif';
import confrontatieVermijden from '../assets/images/confrontatie-vermijden.avif';
import oplossen from '../assets/images/oplossen.avif';
import anderTeam from '../assets/images/ander-team.avif';
import deadlineOpschuiven from '../assets/images/deadline-opschuiven.avif';
import mt from '../assets/images/mt.avif';
import zelfGesprekAangaan from '../assets/images/zelf-gesprek-aangaan.avif';
import wonder from '../assets/images/wonder.avif';
import screenshottenHaha from '../assets/images/screenshotten-haha.avif';
import bierPakkenSamenwerken from '../assets/images/bier-pakken-samenwerken.avif';
import bierPakken from '../assets/images/bier-pakken.avif';
import weekend from '../assets/images/weekend.avif';
import overwerken from '../assets/images/overwerken.avif';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Je krijgt een nieuw project. De deadline is krap, de eisen zijn vaag, en de klant wil "iets met AI". Wat is jouw eerste stap?',
    correctAnswer: 'C',
    answers: [
      { id: 'A', text: 'Gelijk beginnen met coderen\nTijd is geld, we zien wel waar we uitkomen!', image: gelijkBeginnen },
      { id: 'B', text: 'Het team bijeenroepen voor een brainstorm\nSamen kom je verder dan alleen!', image: teamSamenwerken },
      { id: 'C', text: 'Koffie zetten en de klant bellen\nEerst begrijpen wat ze écht willen, dan pas beginnen.', image: koffieDrinken },
      { id: 'D', text: 'Zeggen dat het niet kan\nVage eisen zijn een red flag..', image: redFlag }
    ]
  },
  {
    id: 2,
    question: 'AI is hot, maar wat vind jij het belangrijkste bij het implementeren van AI-oplossingen?',
    correctAnswer: 'B',
    answers: [
      { id: 'A', text: 'Het nieuwste model gebruiken\nBlijf altijd voorop lopen met technologie!', image: nieuwsteModel },
      { id: 'B', text: 'De business case begrijpen\nWaarom doen we dit eigenlijk?', image: businessCase },
      { id: 'C', text: 'Alle data verzamelen die je kan krijgen\nMeer data = betere AI!', image: gelijkBeginnen },
      { id: 'D', text: 'Eerst een prototype bouwen\nLearning by doing is de beste aanpak!', image: prototype }
    ]
  },
  {
    id: 3,
    question: 'Je bent in een meeting en iemand stelt een idee voor dat technisch onmogelijk is. Hoe reageer je?',
    correctAnswer: 'C',
    answers: [
      { id: 'A', text: '"Dat kan niet."\nDuidelijk en direct communiceren!', image: duidelijkCommuniceren },
      { id: 'B', text: '"Misschien kunnen we dat met AI oplossen?"\nAI lost alles op, toch?', image: aiLostAllesOp },
      { id: 'C', text: '"Interessant idee! Laten we kijken hoe we het anders kunnen aanpakken"\nPositief blijven!', image: alternatief },
      { id: 'D', text: 'Niets zeggen en het later bij de koffie bespreken\nVermijd confrontatie in meetings!', image: confrontatieVermijden }
    ]
  },
  {
    id: 4,
    question: 'Je bent Head of D&T. Één van je teams loopt vast op een project. Wat doe je?',
    correctAnswer: 'A',
    answers: [
      { id: 'A', text: 'Het team bij elkaar roepen voor een brainstorm\nSamen zoeken naar oplossingen!', image: teamSamenwerken },
      { id: 'B', text: 'Zelf het probleem oplossen\nLeiderschap betekent voorop lopen!', image: oplossen },
      { id: 'C', text: 'Een ander team vragen om te helpen\nKnowledge sharing is key!', image: anderTeam },
      { id: 'D', text: 'De deadline opschuiven\nRealistisch blijven over wat mogelijk is!', image: deadlineOpschuiven }
    ]
  },
  {
    id: 5,
    question: 'Er komt een klacht binnen van een ontevreden klant. Jij reageert als volgt:',
    correctAnswer: 'B',
    answers: [
      { id: 'A', text: 'Escaleren naar het MT, altijd\nLaat de bazen het maar oplossen!', image: mt },
      { id: 'B', text: 'Eerst zelf het gesprek aangaan en ownership nemen\nVerantwoordelijk voor je team!', image: zelfGesprekAangaan },
      { id: 'C', text: 'Mail negeren en hopen op een wonder\nSoms lossen problemen zichzelf op!', image: wonder },
      { id: 'D', text: 'Screenshotten en in de chatgroep gooien met 🔥\nTeam moet dit ook weten!', image: screenshottenHaha }
    ]
  },
  {
    id: 6,
    question: 'Het is vrijdagmiddag 16:00, je team zit vast, en er is bier in de koelkast. Wat doe je?',
    correctAnswer: 'A',
    answers: [
      { id: 'A', text: 'Bier pakken en samen het probleem oplossen\nCreativiteit komt vrij in een relaxte sfeer!', image: bierPakkenSamenwerken },
      { id: 'B', text: 'Eerst het probleem oplossen, dan bier\nWerk voor ontspanning!', image: bierPakken },
      { id: 'C', text: 'Maandag fresh beginnen\nWeekend is heilig!', image: weekend },
      { id: 'D', text: 'Pizza bestellen en doorwerken\nFuel voor de laatste sprint!', image: overwerken }
    ]
  }
];