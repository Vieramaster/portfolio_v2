import {
  GitHubIco,
  InstagramIco,
  LinkedInIco,
  TelegramIco,
  DiscordIco,
} from "@/shared/components/icons/social";
import type { SocialLink } from "./types";

export const SOCIAL_LINKS = [
  { Icon: GitHubIco, link: "https://github.com/Vieramaster", label: "GitHub" },
  {
    Icon: InstagramIco,
    link: "https://www.instagram.com/martin_viera90/",
    label: "Instagram",
  },
  {
    Icon: LinkedInIco,
    link: "https://www.linkedin.com/in/rodrigo-martin-viera-royer",
    label: "LinkedIn",
  },
  { Icon: TelegramIco, link: "https://t.me/vieramaster", label: "Telegram" },
  {
    Icon: DiscordIco,
    link: "https://discord.com/users/viera#4098",
    label: "Discord",
  },
] as const satisfies readonly SocialLink[];
