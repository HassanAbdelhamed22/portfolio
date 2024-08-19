import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaSass,
  FaPhp,
  FaCode,
  FaTools,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
  SiMysql,
  SiDotnet,
  SiCplusplus,
} from "react-icons/si";
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
} from '../assets/projectsImg';

const skillsList: ISkills[] = [
  {
    category: "Front-End Tools",
    categoryIcon: FaLaptopCode,
    skills: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: FaJsSquare, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaReact, name: "React.js" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiBootstrap, name: "Bootstrap" },
      { icon: FaSass, name: "SASS" },
    ],
  },
  {
    category: "Programming Languages",
    categoryIcon: FaCode,
    skills: [
      { icon: FaPython, name: "Python" },
      { icon: SiCsharp, name: "C#" },
      { icon: SiCplusplus, name: "C/C++" },
      { icon: FaJava, name: "Java" },
      { icon: FaPhp, name: "PHP" },
    ],
  },
  {
    category: "Back-End Technologies",
    categoryIcon: FaDatabase,
    skills: [
      { icon: SiDotnet, name: "ASP.NET Web Forms" },
      { icon: SiMysql, name: "MySQL" },
    ],
  },
  {
    category: "Other Tools",
    categoryIcon: FaTools,
    skills: [
      { icon: FaGitAlt, name: "Git" },
      { icon: SiPostman, name: "Postman" },
      { icon: FaDocker, name: "Docker" },
      { icon: SiVisualstudiocode, name: "VS Code" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
];

export default skillsList;

export const educationData: IEducation[] = [
  {
    date: "(Jul 2024 - Aug 2024)",
    title: "Integration and Business Automation",
    location: "SAIB Bank",
    description: [
      "Collaborated on-site for project alignment.",
      "Gained expertise in SOAP API, REST API, Middleware, ESQL, and SQL.",
      "Developed four applications using IBM App Connect Enterprise to enhance data flow and efficiency.",
      "Learned ASP.NET Web Forms and built a user management project using ASP.NET and MySQL.",
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

];
