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
import { ISkills } from "../interfaces";

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
