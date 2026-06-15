import {
  CircleIco,
  MapPinIco,
  CurriculumIco,
} from "@/components/icons/ui";
import type { LetsTalkItem } from "@/types";

const BASE_ICON_CLASS = "size-5 shrink-0";

export const LETS_TALK_ITEMS = [
  {
    type: "status",
    Icon: CircleIco,
    iconClass: `${BASE_ICON_CLASS} fill-accent stroke-accent`,
    content: "AVAILABLE FOR WORK",
    textClass:
      "animate-pulse [animation-duration:3s] leading-none xl:text-base text-accent!",
  },
  {
    Icon: MapPinIco,
    iconClass: `${BASE_ICON_CLASS} stroke-accent fill-accent`,
    content: "Mar del Plata, Argentina",

  },
  {
    type: "link",
    Icon: CurriculumIco,
    iconClass: `${BASE_ICON_CLASS} stroke-accent`,
    content: "Download Curriculum",
    href: "/cv-martin.pdf",
    download: "Martin-CV.pdf",
  },
] satisfies LetsTalkItem[];
