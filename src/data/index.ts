import { lazy } from "react";

// Icon imports
const FaHtml5 = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaHtml5 }))
);
const FaCss3Alt = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaCss3Alt }))
);
const FaJsSquare = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaJsSquare }))
);
const FaReact = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaReact }))
);
const FaPython = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaPython }))
);
const FaJava = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaJava }))
);
const FaGitAlt = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaGitAlt }))
);
const FaDocker = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaDocker }))
);
const FaSass = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaSass }))
);
const FaPhp = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaPhp }))
);
const FaCode = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaCode }))
);
const FaTools = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaTools }))
);
const FaLaptopCode = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaLaptopCode }))
);
const FaNodeJs = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaNodeJs }))
);

const SiTypescript = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTypescript }))
);
const SiCsharp = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiCsharp }))
);
const SiTailwindcss = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTailwindcss }))
);
const SiBootstrap = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiBootstrap }))
);
const SiPostman = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiPostman }))
);
const SiVercel = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiVercel }))
);
const SiVisualstudiocode = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiVisualstudiocode,
  }))
);
const SiMysql = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiMysql }))
);
const SiCplusplus = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiCplusplus }))
);
const SiFramer = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiFramer }))
);
const SiFigma = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiFigma }))
);
const SiTrello = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTrello }))
);
import {
  FaTasks,
  FaObjectGroup,
  FaClipboardList,
  FaFileSignature,
  FaPuzzlePiece,
  FaDatabase,
} from "react-icons/fa";
import { SiDatacamp } from "react-icons/si";

import { IEducation, IProject, ISkills } from "../interfaces";
import {
  adminPage,
  bankTransfer,
  crud,
  guessMyNumber,
  huddle,
  landingPage,
  todoList,
  uiUtopia,
  bankist,
  dashboard,
  ecommerce,
  fitnessApp,
  forkify,
  furniture,
  mapty,
  omnifood,
  pigGame,
  portfolio,
  prayerTimings,
  productsBuilder,
  startReact,
  todo,
} from "../assets/product Img/index";

const skillsList: ISkills[] = [
  {
    category: "Programming Languages",
    categoryIcon: FaCode,
    skills: [
      { icon: FaJsSquare, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: SiCplusplus, name: "C/C++" },
      { icon: FaPython, name: "Python" },
      { icon: FaJava, name: "Java" },
      { icon: FaPhp, name: "PHP" },
      { icon: SiCsharp, name: "C#" },
      { icon: SiMysql, name: "MyySQL" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    categoryIcon: FaLaptopCode,
    skills: [
      { icon: FaReact, name: "React.js" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiBootstrap, name: "Bootstrap" },
      { icon: FaSass, name: "SASS" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiFramer, name: "Material UI" },
    ],
  },
  {
    category: "Developer Tools",
    categoryIcon: FaTools,
    skills: [
      { icon: FaGitAlt, name: "GitHub" },
      { icon: SiVisualstudiocode, name: "VS Code" },
      { icon: SiPostman, name: "Postman" },
      { icon: FaDocker, name: "Docker (Basics)" },
      { icon: SiFigma, name: "Figma" },
      { icon: SiTrello, name: "Trello" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    category: "General Skills",
    categoryIcon: FaTools,
    skills: [
      { icon: SiDatacamp, name: "Data Structures" },
      { icon: FaObjectGroup, name: "Object-Oriented Programming (OOP)" },
      { icon: FaTasks, name: "Algorithms" },
      { icon: FaClipboardList, name: "Agile Methodologies" },
      { icon: FaFileSignature, name: "Test-Driven Development (TDD)" },
      { icon: FaPuzzlePiece, name: "Design Patterns" },
      { icon: FaDatabase, name: "Software Architecture" },
    ],
  },
];

export default skillsList;

export const educationData: IEducation[] = [
  {
    date: "(Sep 2024 - Oct 2024)",
    title: "Software Engineer Trainee",
    location: "Orange Digital Center",
    description: [
      "Developed SQL and MongoDB databases with ERD to optimize data flow and scalability.",
      "Created a full-stack Flask project with session-based authentication and Role-Based Access Control (RBAC), securing the app with CSRF protection using SQLAlchemy ORM.",
      "Built a To-Do List application using Agile principles, managing user stories in Figma and product backlog in Trello with Test-Driven Development (TDD).",
      "Designed a modular architecture for a Distributed Web Crawler, ensuring scalability and performance.",
      "Learned software design patterns (Strategy, Observer, Decorator, Adapter, MVC, Singleton) through a 'Battle ofPatterns' game.",
    ],
  },
  {
    date: "(Jul 2024 - Aug 2024)",
    title: "Integration and Business Automation Developer",
    location: "SAIB Bank",
    description: [
      "Developed a user management system using ASP.NET and MySQL, featuring smart login, CRN-based search, and profile management.",
      "Built middleware applications with IBM App Connect Enterprise, enhancing integration through WSDL files and message brokers.",
      "Implemented admin features like Excel uploads and CRN data management, ensuring effective duplicate handling.",
      "Enhanced system integration via SOAP and REST APIs, boosting operational efficiency.",
    ],
  },
  {
    date: "(Jan 2024 - Feb 2024)",
    title: "React JS Diploma",
    location: "Route Training Center",
    description: [
      "Attended online classes twice a week.",
      "Developed and maintained tasks using React.js, Redux Toolkit, TypeScript, Bootstrap, and SASS.",
      "Completed an e-commerce project, showcasing practical application of skills learned.",
    ],
  },
  {
    date: "(2021 - 2025)",
    title: "Computer Science",
    location: "Helwan University",
    description: [
      "Pursuing a degree in Computer and Artificial Intelligence with a grade of 'Very Good'.",
      "Engaged in advanced coursework in algorithms, data structures, artificial intelligence, and machine learning.",
      "Actively participated in academic projects and research, enhancing practical knowledge and problem-solving skills.",
    ],
    GPA: "3.19",
  },
];

export const projectData: IProject[] = [
  {
    image: ecommerce,
    title: "E-commerce App",
    description:
      "An online store built with HTML, CSS, JS, Bootstrap, and React.js, featuring user authentication, product filtering, shopping cart, order management, and secure payment processing using Formik, Yup, React Query, React Router Dom, JWT Decode, and Axios.",
    repoLink: "https://github.com/HassanAbdelhamed22/E-Commerce",
    liveLink: "https://hassanabdelhamed22.github.io/E-Commerce/",
    category: "React",
  },
  {
    image: todo,
    title: "Fullstack Todo List App",
    description:
      "Implemented user authentication with form validation, including profile management and password resets, developed CRUD operations for todos with search, sorting, pagination, and completion features, and designed using TypeScript, Tailwind CSS, React.js, Strapi, Headless UI.",
    repoLink: "https://github.com/HassanAbdelhamed22/fullstack-todo-app",
    category: "React & TS",
  },
  {
    image: fitnessApp,
    title: "Fitness App",
    description:
      "A fitness platform allowing users to search exercises, track workouts, and calculate BMI using Material UI, React.js, Rapid API, React Router Dom, Axios, and React Slider.",
    repoLink: "https://github.com/HassanAbdelhamed22/Fitness-App",
    liveLink: "https://fitness-app-hassan-abdelhameds-projects.vercel.app/",
    category: "React",
  },
  {
    image: prayerTimings,
    title: "Prayer Timings",
    description:
      "A prayer time tracking app based on user location, built with Material UI, React.js, and Moment.js for accurate time management.",
    repoLink: "https://github.com/HassanAbdelhamed22/Prayer-Timings",
    liveLink: "https://prayer-timings-eight.vercel.app/",
    category: "React",
  },
  {
    image: productsBuilder,
    title: "Products Builder",
    description:
      "A dynamic product customization tool using React.js, TypeScript, and Tailwind CSS, allowing users to design and configure products in real-time.",
    repoLink: "https://github.com/HassanAbdelhamed22/Products-Bulider",
    liveLink: "https://products-bulider.vercel.app/",
    category: "React & TS",
  },
  {
    image: portfolio,
    title: "Portfolio",
    description:
      "A personal portfolio showcasing projects and skills, built with TypeScript, Tailwind CSS, and React.js for a responsive and visually appealing design.",
    repoLink: "https://github.com/HassanAbdelhamed22/portfolio",
    category: "React & TS",
  },
  {
    image: adminPage,
    title: "User Management",
    description:
      "A user management system with CRUD operations and MySQL integration, built using HTML, CSS, Bootstrap, ADO.NET, and ASP.NET for robust backend functionality.",
    repoLink:
      "https://github.com/HassanAbdelhamed22/User-Management-Systems-using-ASP.NET",
    category: "ASP.net",
  },
  {
    image: forkify,
    title: "Forkify App",
    description:
      "A recipe search and management app using vanilla JavaScript, featuring ingredient tracking and dynamic recipe loading.",
    repoLink: "https://github.com/HassanAbdelhamed22/Forkify",
    liveLink: "",
    category: "JS",
  },
  {
    image: mapty,
    title: "Mapty",
    description:
      "A workout tracking app with geolocation and map integration, built with HTML, CSS, and JavaScript, allowing users to log activities on a map.",
    repoLink: "https://github.com/HassanAbdelhamed22/mapty",
    liveLink: "https://hassanabdelhamed22.github.io/mapty/",
    category: "JS",
  },
  {
    image: bankTransfer,
    title: "Bank Transfer",
    description:
      "A bank transfer simulation app developed using HTML, CSS, and JavaScript, allowing users to simulate financial transactions and track balances.",
    repoLink: "https://github.com/HassanAbdelhamed22/Bank-Transfer",
    liveLink: "https://hassanabdelhamed22.github.io/Bank-Transfer/",
    category: "JS",
  },
  {
    image: omnifood,
    title: "Omnifood",
    description:
      "A modern, responsive food delivery landing page, created with HTML and CSS, showcasing a clean design and interactive features.",
    repoLink: "https://github.com/HassanAbdelhamed22/omnifood",
    liveLink: "https://hassanabdelhamed22.github.io/omnifood/",
    category: "HTML & CSS",
  },
  {
    image: todoList,
    title: "ToDo List App",
    description:
      "A task management app built with HTML, CSS, and JavaScript, enabling users to add, edit, and delete tasks with a simple interface.",
    repoLink: "https://github.com/HassanAbdelhamed22/ToDo-List-App",
    liveLink: "https://hassanabdelhamed22.github.io/ToDo-List-App/",
    category: "JS",
  },
  {
    image: bankist,
    title: "Bankist App",
    description:
      "A fictional online banking app built with HTML, CSS, and JavaScript, featuring login functionality, balance tracking, and transaction history.",
    repoLink: "https://github.com/HassanAbdelhamed22/Bankist",
    liveLink: "https://hassanabdelhamed22.github.io/Bankist/",
    category: "JS",
  },
  {
    image: startReact,
    title: "Start React App",
    description:
      "A beginner's React project featuring a multi-page layout with routing, built using HTML, CSS, and React.js.",
    repoLink: "https://github.com/HassanAbdelhamed22/reactTest",
    liveLink: "https://hassanabdelhamed22.github.io/reactTest/",
    category: "React",
  },
  {
    image: crud,
    title: "CRUD App",
    description:
      "A basic CRUD application with Create, Read, Update, and Delete functionality, developed using HTML, CSS, and JavaScript.",
    repoLink: "https://github.com/HassanAbdelhamed22/CRUD-js",
    liveLink: "https://hassanabdelhamed22.github.io/CRUD-js/",
    category: "JS",
  },
  {
    image: dashboard,
    title: "Dashboard",
    description:
      "A responsive admin dashboard layout built with HTML and CSS, designed for data visualization and management.",
    repoLink: "https://github.com/HassanAbdelhamed22/Dashboard",
    liveLink: "https://hassanabdelhamed22.github.io/Dashboard/",
    category: "HTML & CSS",
  },
  {
    image: landingPage,
    title: "Landing Page",
    description:
      "A clean and modern landing page built with HTML and CSS, designed to be fully responsive and mobile-friendly.",
    repoLink: "https://github.com/HassanAbdelhamed22/LandingPage",
    liveLink: "https://hassanabdelhamed22.github.io/LandingPage/",
    category: "HTML & CSS",
  },
  {
    image: guessMyNumber,
    title: "Guess My Number",
    description:
      "A fun number guessing game built with HTML, CSS, and JavaScript, featuring interactive game play and score tracking.",
    repoLink: "https://github.com/HassanAbdelhamed22/Guess-My-Number",
    liveLink: "https://hassanabdelhamed22.github.io/Guess-My-Number/",
    category: "JS",
  },
  {
    image: pigGame,
    title: "Pig Game",
    description:
      "A two-player dice game created with HTML, CSS, and JavaScript, featuring turn-based game play and dynamic score keeping.",
    repoLink: "https://github.com/HassanAbdelhamed22/Pig-Game",
    liveLink: "https://hassanabdelhamed22.github.io/Pig-Game/",
    category: "JS",
  },
  {
    image: uiUtopia,
    title: "UI Utopia",
    description:
      "A collection of reusable UI components and layouts designed with HTML and CSS, suitable for various web projects.",
    repoLink: "https://github.com/HassanAbdelhamed22/Ui_Utopia",
    liveLink: "https://hassanabdelhamed22.github.io/Ui_Utopia/",
    category: "HTML & CSS",
  },
  {
    image: huddle,
    title: "Huddle Home Page",
    description:
      "A responsive homepage for a fictional company, built with HTML and CSS, showcasing a clean and professional design.",
    repoLink: "https://github.com/HassanAbdelhamed22/Huddle-Home-Page",
    liveLink: "https://hassanabdelhamed22.github.io/Huddle-Home-Page/",
    category: "HTML & CSS",
  },
  {
    image: furniture,
    title: "Furniture Home Page",
    description:
      "A modern landing page for a furniture store, designed with HTML and CSS to be fully responsive and visually appealing.",
    repoLink: "https://github.com/HassanAbdelhamed22/Furniture-Home-page",
    liveLink: "https://hassanabdelhamed22.github.io/Furniture-Home-Page/",
    category: "HTML & CSS",
  },
];
