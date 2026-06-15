import type { HTMLAttributes } from "astro/types";

export type IconProps = HTMLAttributes<"svg">;

export type IconComponent = (props: IconProps) => unknown;

export interface WithIcon {
  readonly Icon: IconComponent;
}



export interface TechStackItem extends WithIcon {
  label: string;
}

export type TechTool = string;

export interface AchievementItem extends WithIcon {
  title: string;
  description: string;
}

export interface SocialLink extends WithIcon {
  label: string;
  link: string;
}

export interface AboutMeItem extends WithIcon {
  description: string;
}

export interface LetsTalkItem extends WithIcon {
  type?: "status" | "link";
  iconClass: string;
  content: string;
  textClass?: string;
  href?: string;
  download?: string;
}
