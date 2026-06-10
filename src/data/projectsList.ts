import type { Project } from "@/types";

export const PROJECTS_LIST = [
    {
        title: "Optiguide",
        images: {
            desktop: "/images/projects/optiguide.png",
            mobile: "/images/projects/optiguide-mobile.webp",
        },
        imageAlt:
            "Optiguide app interface helping optical industry employees learn concepts and use sales tools",
        github: "https://github.com/Vieramaster/Optiguide",
        url: "https://optiguide.vercel.app/",
        techs: ["Next.js", "Tailwind", "TypeScript"],
        description: "Is a web application designed to help new employees adapt to the optical industry. It combines educational resources with practical tools, allowing users to learn essential concepts while using interactive apps that support daily tasks and improve the sales process.",
    },
    {
        title: "Outfitland",
        images: {
            desktop: "/images/projects/outfitland.png",
            mobile: "/images/projects/outfitland-mobile.webp",
        },
        imageAlt:
            "Outfitland app showing men's outfit combinations with weather-based clothing suggestions",
        github: "https://github.com/Vieramaster/Outfitland_2.0",
        url: "https://outfitland.vercel.app",
        techs: ["React", "Tailwind", "TypeScript"],
        description:
            "This application was created to help new clothing store employees learn how to combine men's outfits. It offers random outfit suggestions based on the selected garment while considering style and weather conditions, along with a simple weather tool to support everyday clothing choices.",
    },
    {
        title: "Fantaspic",
        images: {
            desktop: "/images/projects/fantaspic.png",
            mobile: "/images/projects/fantaspic-mobile.webp",
        },
        imageAlt:
            "Fantaspic Pinterest-style image search app with Unsplash results and trending topics",
        github: "https://github.com/Vieramaster/Fantaspic",
        url: "https://fantaspic.vercel.app/",
        techs: ["React", "Tailwind", "TypeScript"],
        description:
            "This project is a Pinterest-style image search application built to learn how to work with external APIs and modern front-end technologies. It integrates the Unsplash API, features an image search engine, and includes a “Latest Topics” section that displays trending searches.",
    },
] as const satisfies readonly Project[];
