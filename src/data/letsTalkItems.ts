import {
  CircleIco,
  MapPinIco,
  CurriculumIco,
} from "@/components/icons/ui";

const iconClass = "size-5 shrink-0";

export const LETS_TALK_ITEMS = [
  {
    type: "status",
    Ico: CircleIco,
    iconProps: `${iconClass} fill-accent stroke-accent`,
    content: "AVAILABLE FOR WORK",
    contentClass:
      "animate-pulse [animation-duration:3s] leading-none xl:text-base text-accent!",
  },
  {
    Ico: MapPinIco,
    iconProps: `${iconClass} stroke-red-500`,
    content: "Mar del Plata, Argentina",
  },
  {
    type: "link",
    Ico: CurriculumIco,
    iconProps: `${iconClass} stroke-accent`,
    content: "Download Curriculum",
    href: "/cv-martin.pdf",
    download: "Martin-CV.pdf",
    
  },
];
