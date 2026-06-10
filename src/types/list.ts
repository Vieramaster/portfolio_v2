import type { WithIcon } from "./icon";

export interface TechStackItem extends WithIcon {
    label: string;
}

export interface AchievementItem extends WithIcon {
    title: string;
    description: string;
}

export interface SocialLink extends WithIcon {
    label: string;
    link: string;
}
