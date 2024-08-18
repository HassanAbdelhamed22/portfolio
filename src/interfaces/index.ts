import { IconType } from "react-icons";

export interface ISkills {
  category: string;
  categoryIcon: IconType;
  skills: { icon: IconType; name: string }[];
}
