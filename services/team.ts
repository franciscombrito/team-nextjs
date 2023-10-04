import { Developer } from "@/types/developer";
import { Project } from "@/types/project";

export async function getTeam() {
  return fetchFromAPI<Developer[]>("https://team-api-508w.onrender.com/team");
}

export async function getProjects() {
  return fetchFromAPI<Project[]>("https://team-api-508w.onrender.com/projects");
}

async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint);
  return response.json();
}
