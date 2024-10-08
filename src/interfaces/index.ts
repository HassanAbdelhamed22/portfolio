import { LazyExoticComponent } from "react";
import { IconType } from "react-icons";

export interface ISkills {
  category: string;
  categoryIcon: IconType | LazyExoticComponent<IconType>;
  skills: { icon: IconType | LazyExoticComponent<IconType>; name: string }[];
}

export interface IEducation {
  date: string;
  title: string;
  location: string;
  description: string[];
  GPA?: string;
}

export interface IProject {
  image: string;
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  category: "React" | "React & TS" | "JS" | "HTML & CSS" | "ASP.net";
}
