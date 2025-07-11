import { StaticImageData } from "next/image";

// Category
export type Category = "Tutti" | "HTML & CSS" | "React" | "Next.js" | "Angular";

// TechsType
type TechsType = {
  name: string;
  src: StaticImageData;
};

// TechCardProps
export interface TechCardProps {
  techName: string;
  techImage: StaticImageData;
}

// ProjectCardProps
export interface ProjectCardProps {
  projectImage: StaticImageData;
  projectTitle: string;
  projectDesc: string;
  projectTechs: TechsType[];
  projectGitHub: string;
  projectDemo?: string;
}

// EducationCardProps
export interface EducationCardProps {
  edcName: string;
  edcImage: StaticImageData;
  edcYear: string;
  edcSubtitle: string;
  edcTopics: string[];
}
