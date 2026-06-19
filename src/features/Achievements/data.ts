import { ClockIco, WorkIco } from "@/shared/components/icons/ui";
import { GitHubIco } from "@/shared/components/icons/social";
import type { AchievementItem } from "./types";

export const ACHIEVEMENTS_LIST = [
  {
    title: "2+",
    description: "years of experience",
    Icon: ClockIco,
  },
  {
    title: "2+",
    description: "daily-use projects",
    Icon: WorkIco,
  },
  {
    title: "17+",
    description: "GitHub projects",
    Icon: GitHubIco,
  },
] as const satisfies readonly AchievementItem[];
