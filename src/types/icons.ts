import type { HTMLAttributes } from "astro/types";

export type IconProps = HTMLAttributes<"svg">;

export type IconComponent = (props: IconProps) => unknown;

export interface WithIcon {
  readonly Icon: IconComponent;
}

export interface MapPinIcoProps {
  class?: string;
  circleClass?: string;
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
