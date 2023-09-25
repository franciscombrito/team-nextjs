import { Project } from "./project";

export type Developer = {
  name: string;
  projects: Project[];
  image?: string;
};
