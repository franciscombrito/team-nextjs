import { Developer } from "@/types/developer";
import { Project } from "@/types/project";

export async function getTeam(): Promise<Developer[]> {
  const response = await fetch("https://team-api-508w.onrender.com/team");
  return response.json();
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch("https://team-api-508w.onrender.com/projects");
  return response.json();
}
