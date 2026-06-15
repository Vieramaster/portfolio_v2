import {
  LightBulbIco,
  LaboratoryTubeIco,
  RefreshIco,
} from "@/components/icons/ui";
import type { AboutMeItem } from "@/types";

export const ABOUT_ME_ITEMS = [
  {
    Icon: LightBulbIco,
    description:
      "Seeing an idea become something people can use is what motivates me the most. I enjoy turning concepts into intuitive products that solve real problems.",
  },
  {
    Icon: LaboratoryTubeIco,
    description:
      "I learn best by building, experimenting with code, and exploring new ideas to continuously improve.",
  },
  {
    Icon: RefreshIco,
    description:
      "I believe great products evolve through iteration, starting with reliable solutions and refining them with usability and accessibility in mind.",
  },
] as const satisfies readonly AboutMeItem[];
