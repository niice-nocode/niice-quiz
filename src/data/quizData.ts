import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Je krijgt een nieuw project. De deadline is krap, de eisen zijn vaag, en de klant wil "iets met AI". Wat is jouw eerste stap?',
    correctAnswer: 'C',
    answers: [
      { id: 'A', text: 'Gelijk beginnen met coderen\nTijd is geld, we zien wel waar we uitkomen!', image: "/src/assets/images/gelijk-beginnen.avif" },
      { id: 'B', text: 'Het team bijeenroepen voor een brainstorm\nSamen kom je verder dan alleen!', image: "/src/assets/images/team-samenwerken.avif" },
      { id: 'C', text: 'Koffie zetten en de klant bellen\nEerst begrijpen wat ze écht willen, dan pas beginnen.', image: "/src/assets/images/koffie-drinken.avif" },
      { id: 'D', text: 'Zeggen dat het niet kan\nVage eisen zijn een red flag..', image: "/src/assets/images/red-flag.avif" }
    ]
  },
  {
    id: 2,
    question: 'AI is hot, maar wat vind jij het belangrijkste bij het implementeren van AI-oplossingen?',
    correctAnswer: 'B',
    answers: [
      { id: 'A', text: 'Het nieuwste model gebruiken\nBlijf altijd voorop lopen met technologie!', image: "/src/assets/images/nieuwste-model.avif" },
      { id: 'B', text: 'De business case begrijpen\nWaarom doen we dit eigenlijk?', image: "/src/assets/images/business-case.avif" },
      { id: 'C', text: 'Alle data verzamelen die je kan krijgen\nMeer data = betere AI!', image: "/src/assets/images/gelijk-beginnen.avif" },
      { id: 'D', text: 'Eerst een prototype bouwen\nLearning by doing is de beste aanpak!', image: "/src/assets/images/prototype.avif" }
    ]
  },
  {
    id: 3,
    question: 'Je bent in een meeting en iemand stelt een idee voor dat technisch onmogelijk is. Hoe reageer je?',
    correctAnswer: 'C',
    answers: [
      { id: 'A', text: '"Dat kan niet."\nDuidelijk en direct communiceren!', image: "/src/assets/images/duidelijk-communiceren.avif" },
      { id: 'B', text: '"Misschien kunnen we dat met AI oplossen?"\nAI lost alles op, toch?', image: "/src/assets/images/ai-lost-alles-op.avif" },
      { id: 'C', text: '"Interessant idee! Laten we kijken hoe we het anders kunnen aanpakken"\nPositief blijven!', image: "/src/assets/images/alternatief.avif" },
      { id: 'D', text: 'Niets zeggen en het later bij de koffie bespreken\nVermijd confrontatie in meetings!', image: "/src/assets/images/confrontatie-vermijden.avif" }
    ]
  },
  {
    id: 4,
    question: 'Je bent Head of D&T. Één van je teams loopt vast op een project. Wat doe je?',
    correctAnswer: 'A',
    answers: [
      { id: 'A', text: 'Het team bij elkaar roepen voor een brainstorm\nSamen zoeken naar oplossingen!', image: "/src/assets/images/team-samenwerken.avif" },
      { id: 'B', text: 'Zelf het probleem oplossen\nLeiderschap betekent voorop lopen!', image: "/src/assets/images/oplossen.avif" },
      { id: 'C', text: 'Een ander team vragen om te helpen\nKnowledge sharing is key!', image: "/src/assets/images/ander-team.avif" },
      { id: 'D', text: 'De deadline opschuiven\nRealistisch blijven over wat mogelijk is!', image: "/src/assets/images/deadline-opschuiven.avif" }
    ]
  },
  {
    id: 5,
    question: 'Er komt een klacht binnen van een ontevreden klant. Jij reageert als volgt:',
    correctAnswer: 'B',
    answers: [
      { id: 'A', text: 'Escaleren naar het MT, altijd\nLaat de bazen het maar oplossen!', image: "/src/assets/images/mt.avif" },
      { id: 'B', text: 'Eerst zelf het gesprek aangaan en ownership nemen\nVerantwoordelijk voor je team!', image: "/src/assets/images/zelf-gesprek-aangaan.avif" },
      { id: 'C', text: 'Mail negeren en hopen op een wonder\nSoms lossen problemen zichzelf op!', image: "/src/assets/images/wonder.avif" },
      { id: 'D', text: 'Screenshotten en in de chatgroep gooien met 🔥\nTeam moet dit ook weten!', image: "/src/assets/images/screenshotten-haha.avif" }
    ]
  },
  {
    id: 6,
    question: 'Het is vrijdagmiddag 16:00, je team zit vast, en er is bier in de koelkast. Wat doe je?',
    correctAnswer: 'A',
    answers: [
      { id: 'A', text: 'Bier pakken en samen het probleem oplossen\nCreativiteit komt vrij in een relaxte sfeer!', image: "/src/assets/images/bier-pakken-samenwerken.avif" },
      { id: 'B', text: 'Eerst het probleem oplossen, dan bier\nWerk voor ontspanning!', image: "/src/assets/images/bier-pakken.avif" },
      { id: 'C', text: 'Maandag fresh beginnen\nWeekend is heilig!', image: "/src/assets/images/weekend.avif" },
      { id: 'D', text: 'Pizza bestellen en doorwerken\nFuel voor de laatste sprint!', image: "/src/assets/images/overwerken.avif" }
    ]
  }
];