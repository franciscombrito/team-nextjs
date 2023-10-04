import { Developer } from "@/types/developer";

//Fisher-Yates algorithm (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
export function shuffleTeam(team: Developer[]) {
  for (let i = team.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap elements at randomIndex and i
    [team[i], team[randomIndex]] = [team[randomIndex], team[i]];
  }

  return team;
}
