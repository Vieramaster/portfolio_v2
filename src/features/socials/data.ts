import {
  GitHubIco,
  InstagramIco,
  LinkedInIco,
  TelegramIco,
  DiscordIco,
} from "@/shared/components/icons/social";

import { PROFILE } from "@/shared/constants/profile";

import type { SocialLink } from "./types";

export const SOCIAL_LINKS = [
  { Icon: GitHubIco, link: PROFILE.social.github, label: "GitHub" },
  {
    Icon: InstagramIco,
    link: PROFILE.social.instagram,
    label: "Instagram",
  },
  {
    Icon: LinkedInIco,
    link: PROFILE.social.linkedin,
    label: "LinkedIn",
  },
  { Icon: TelegramIco, link: PROFILE.social.telegram, label: "Telegram" },
  {
    Icon: DiscordIco,
    link: PROFILE.social.discord,
    label: "Discord",
  },
] as const satisfies readonly SocialLink[];
