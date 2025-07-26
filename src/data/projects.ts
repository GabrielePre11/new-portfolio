// Projects Images
import gameshelfImage from "@/assets/images/projects/gameshelf.png";
import recipeImage from "@/assets/images/projects/recipe-app.png";
import angularBrowser from "@/assets/images/projects/angular-browser.png";
import angularQuiz from "@/assets/images/projects/angular-quiz.png";
import angularToDo from "@/assets/images/projects/angular-todo.png";
import nextJsExclusive from "@/assets/images/projects/nextjs-ecommerce.png";
import nextJsCineRadar from "@/assets/images/projects/nextjs-movies.png";
import reactDragonBall from "@/assets/images/projects/react-dragonball.png";
import reactQuiz from "@/assets/images/projects/react-quiz.png";
import reactMeteo from "@/assets/images/projects/react-meteo.png";
import GPOldPortfolio from "@/assets/images/projects/react-portfolio.png";
import reactToDo from "@/assets/images/projects/react-todo.png";
import reactEducity from "@/assets/images/projects/react-educity.png";
import htmlFormVehicles from "@/assets/images/projects/htmlCssTSForm.png";
import htmlRockPaperScissors from "@/assets/images/projects/htmlrockpaperscissors.png";
import htmlMusicPlayer from "@/assets/images/projects/htmlMusicPlayer.png";

// Icons by TechIcons.dev
import AngularIcon from "@/assets/images/projects/Icons/Angular.png";
import ReactIcon from "@/assets/images/projects/Icons/React.png";
import NextJsIcon from "@/assets/images/projects/Icons/Next.js.png";
import HTMLIcon from "@/assets/images/projects/Icons/HTML5.png";
import CSS3Icon from "@/assets/images/projects/Icons/CSS3.png";
import SassIcon from "@/assets/images/projects/Icons/Sass.png";
import JavaScriptIcon from "@/assets/images/projects/Icons/JavaScript.png";
import TypeScriptIcon from "@/assets/images/projects/Icons/TypeScript.png";
import TailwindCSSIcon from "@/assets/images/projects/Icons/Tailwind CSS.png";
import ZustandIcon from "@/assets/images/projects/Icons/Zustand.svg";
import FramerMotion from "@/assets/images/projects/Icons/FramerMotion.svg";
import Redux from "@/assets/images/projects/Icons/Redux.png";

export const projects = [
  {
    src: gameshelfImage,
    title: "GameShelf",
    description:
      "Una libreria di giochi sviluppata con Next.js, TypeScript, TailwindCSS e Redux Toolkit. Gli utenti possono esplorare un'ampia gamma di giochi, cercarli e filtrarli, visualizzare pagine dettagliate e gestire la propria lista dei preferiti con facilità.",
    category: "Next.js",
    technologies: [
      { name: "Next.js", src: ReactIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
      { name: "Redux Toolkit", src: Redux },
    ],
    gitHubLink: "https://github.com/GabrielePre11/nextjs-gameshelf",
    demo: "https://nextjs-gameshelf.vercel.app/",
  },

  {
    src: recipeImage,
    title: "Recipes App",
    description:
      "Un'app di ricette moderna e reattiva, sviluppata con React, TypeScript, TailwindCSS, Zustand e React Router. Gli utenti possono esplorare un'ampia gamma di ricette, cercarle e filtrarle, visualizzare pagine dettagliate e gestire la propria lista dei preferiti con facilità.",
    category: "React",
    technologies: [
      { name: "React", src: ReactIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
      { name: "Zustand", src: ZustandIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/react-recipes-app",
    demo: "https://react-recipes-app-umber.vercel.app/",
  },

  {
    src: angularBrowser,
    title: "Angular Browser Extension",
    description:
      "Gestore di estensioni browser, realizzato con Angular 20. 🎯 Un progetto personale inizialmente creato in React ricreato in Angular per testare signals, input()/output() e localStorage().",
    category: "Angular",
    technologies: [
      { name: "Angular", src: AngularIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/angular-browser-extension",
    demo: "https://angular-browser-extension.vercel.app/",
  },

  {
    src: angularQuiz,
    title: "Angular Quiz App",
    description:
      "Un'app di quiz semplice e interattiva, sviluppata utilizzando Angular 20 e Sass (SCSS). Permette agli utenti di rispondere a una serie di domande, monitorare i propri progressi e visualizzare il punteggio in tempo reale.",
    category: "Angular",
    technologies: [
      { name: "Angular", src: AngularIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "Sass", src: SassIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/angular-quiz-app",
    demo: "https://angular-quiz-app-ten.vercel.app/",
  },

  {
    src: angularToDo,
    title: "Angular To-Do List",
    description:
      "Una lista di cose da fare semplice e moderna, creata con Angular, per mettere in pratica i fondamenti del framework. Gli utenti possono eseguire azioni di base come aggiungere, completare, rimuovere e filtrare attività.",
    category: "Angular",
    technologies: [
      { name: "Angular", src: AngularIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/angular-todolist",
    demo: "https://angular-todolist-sigma.vercel.app/",
  },

  {
    src: nextJsExclusive,
    title: "Exclusive",
    description:
      "Exclusive è un progetto e-commerce moderno e minimale, sviluppato con Next.js (React), TypeScript, TailwindCSS e Zustand per la gestione dello stato globale. Questo progetto mi ha dato una grande mano a capire meglio il funzionamento di Zustand, fare progressi in Next JS, e migliorare le mie skills in TypeScript e TailwindCSS.",
    category: "Next.js",
    technologies: [
      { name: "Next.js", src: NextJsIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
      { name: "Zustand", src: ZustandIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/nextjs-ecommerce",
    demo: "https://nextjs-ecommerce-rho-henna.vercel.app/",
  },

  {
    src: nextJsCineRadar,
    title: "CineRadar",
    description:
      "CineRadar è una libreria di film e serie TV sviluppata con Next.js 15. Permette agli utenti di esplorare migliaia di titoli, visualizzare i dettagli completi e salvare i preferiti in locale. E' il mio primo progetto con NextJS, che mi ha anche introdotto a Zustand.",
    category: "Next.js",
    technologies: [
      { name: "Next.js", src: NextJsIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
      { name: "Zustand", src: ZustandIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/nextjs-cineradar",
    demo: "https://nextjs-cineradar.vercel.app/",
  },

  {
    src: reactDragonBall,
    title: "Dragon Ball",
    description:
      "Come primo progetto per testare la libreria React Router, ho sviluppato una semplice web app dedicata ai personaggi del celebre anime Dragon Ball, un cartone che amavo da bambino.",
    category: "React",
    technologies: [
      { name: "React", src: ReactIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/dragon-ball",
    demo: "https://dragon-ball-tau.vercel.app/",
  },

  {
    src: reactQuiz,
    title: "Quiz App",
    description:
      "Una Quiz App sviluppata in React, TypeScript e TailwindCSS v4, con un totale di 10 domande e 4 opzioni disponibli per ogni domanda!",
    category: "React",
    technologies: [
      { name: "React", src: ReactIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/gp-quiz-app",
    demo: "https://gp-quiz-app.vercel.app/",
  },

  {
    src: GPOldPortfolio,
    title: "GP Portfolio (Old)",
    description:
      "Come secondo progetto di React ho voluto creare un portfolio personale, che mi ha permesso di migliorare le mie competenze di base di React, e di imparare le basi di Framer Motion per creare delle animazioni semplici.",
    category: "React",
    technologies: [
      { name: "React", src: ReactIcon },
      { name: "CSS", src: CSS3Icon },
      { name: "JavaScript", src: JavaScriptIcon },
      { name: "Framer Motion", src: FramerMotion },
    ],
    gitHubLink: "https://github.com/GabrielePre11/gp-portfolio",
    demo: "https://gp-portfolio-kappa.vercel.app/",
  },

  {
    src: reactMeteo,
    title: "Weather/Meteo App",
    description:
      "Una semplice App Meteo creata in React, TypeScript e Tailwind CSS v4. Le API sono fornite da OpenWeatherMap.",
    category: "React",
    technologies: [
      { name: "React", src: ReactIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/meteo-app",
    demo: "https://gp-meteo-app.vercel.app/",
  },

  {
    src: reactToDo,
    title: "To-Do List",
    description:
      "Una moderna To-Do List creata con React, Vite, TypeScript e TailwindCSS v4, che permette l'aggiunta di nuove attività, l'eliminazione delle attività e il salvataggio con localStorage",
    category: "React",
    technologies: [
      { name: "React", src: ReactIcon },
      { name: "TypeScript", src: TypeScriptIcon },
      { name: "TailwindCSS", src: TailwindCSSIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/todo-list",
    demo: "https://todo-list-woad-sigma.vercel.app/",
  },

  {
    src: reactEducity,
    title: "Educity",
    description:
      "Educity è una replica di un sito educativo sviluppata con React e Vite come mio primo progetto, il che mi ha permesso di mettere in pratica i concetti di base di React, esplorare l'uso degli hooks principali (useState, useEffect e useRef) e di esplorare altre funzionalità.",
    category: "React",
    technologies: [
      { name: "React", src: ReactIcon },
      { name: "CSS", src: CSS3Icon },
      { name: "JavaScript", src: JavaScriptIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/educity-react",
    demo: "https://educity-react-mu.vercel.app/",
  },

  {
    src: htmlFormVehicles,
    title: "Vehicles Form",
    description:
      "Un Form realizzato con HTML, CSS e TypeScript in cui l'utente può aggiungere dei veicoli inserendo varie informazioni tramite i campi di input.",
    category: "HTML & CSS",
    technologies: [
      { name: "HTML", src: HTMLIcon },
      { name: "CSS", src: CSS3Icon },
      { name: "TypeScript", src: TypeScriptIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/Form-Veicoli-in-TS",
  },

  {
    src: htmlRockPaperScissors,
    title: "Rock Paper Scissors",
    description:
      "Un semplice emulatore del classico gioco 'Rock Paper Scissors', realizzato con HTML, CSS e JavaScript. Il giocatore sfida la CPU scegliendo tra sasso, carta o forbici, con punteggio aggiornato in tempo reale. La partita termina al raggiungimento di 5 punti.",
    category: "HTML & CSS",
    technologies: [
      { name: "HTML", src: HTMLIcon },
      { name: "CSS", src: CSS3Icon },
      { name: "JavaScript", src: JavaScriptIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/Rock-Paper-Scissors",
  },

  {
    src: htmlMusicPlayer,
    title: "Music Player",
    description:
      "Un semplice Music Player in cui l'utente può far partire e stoppare una canzone, cliccare il tasto 'Like' e utilizzare altri comandi.",
    category: "HTML & CSS",
    technologies: [
      { name: "HTML", src: HTMLIcon },
      { name: "CSS", src: CSS3Icon },
      { name: "JavaScript", src: JavaScriptIcon },
    ],
    gitHubLink: "https://github.com/GabrielePre11/Music-Player",
  },
];
