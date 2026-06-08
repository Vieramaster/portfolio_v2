import { GithubIco, InstagramIco, LinkedInIco, TelegramIco, DiscordIco } from "../components/icons/social"

export const SOCIAL_LIST = [
    { Icon: GithubIco, link: "https://github.com/Vieramaster", label: "GitHub" },
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
] as const;
