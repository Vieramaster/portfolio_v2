import {
  LightBulbIco,
  LaboratoryTubeIco,
  RefreshIco,
} from "@/shared/components/icons/ui";
import type { AboutMeItem } from "./types"

export const ABOUT_ME_ITEMS = [
  {
    Icon: LightBulbIco,
    description:
      "Seeing an idea become something real that people can use is what motivates me the most. I enjoy turning concepts into intuitive and useful interfaces.",
  },
  {
    Icon: LaboratoryTubeIco,
    description:
      "I learn best by building, experimenting with code, and exploring new ideas while continuously improving my skills.",
  },
  {
    Icon: RefreshIco,
    description:
      "I believe great products evolve through iteration, delivering reliable solutions first and refining them with usability and accessibility in mind.",
  },
] as const satisfies readonly AboutMeItem[];
