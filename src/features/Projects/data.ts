import optiguideMobile from "@/assets/images/projects/optiguide-mobile.webp";
import optiguideXl from "@/assets/images/projects/optiguide-xl.webp";
import outfitlandMobile from "@/assets/images/projects/outfitland-mobile.webp";
import outfitlandXl from "@/assets/images/projects/outfitland-xl.webp";
import fantaspicMobile from "@/assets/images/projects/fantaspic-mobile.webp";
import fantaspicXl from "@/assets/images/projects/fantaspic-xl.webp";
import type { Project } from "./types";

export const PROJECTS_LIST = [
    {
        title: "Optiguide",
        images: { mobile: optiguideMobile, desktop: optiguideXl },
        imageAlt:
            "Optiguide app interface helping optical industry employees learn concepts and use sales tools",
        github: "https://github.com/Vieramaster/Optiguide",
        url: "https://optiguide.vercel.app/",
        techs: ["Next.js", "Tailwind", "TypeScript"],
        description: "Educational platform for optical stores with interactive tools, lens simulations, face shape analysis, and a smart ophthalmic catalog.",
    },
    {
        title: "Outfitland",
        images: { mobile: outfitlandMobile, desktop: outfitlandXl },
        imageAlt:
            "Outfitland app showing men's outfit combinations with weather-based clothing suggestions",
        github: "https://github.com/Vieramaster/Outfitland_2.0",
        url: "https://outfitland.vercel.app",
        techs: ["React", "Tailwind", "TypeScript"],
        description:
            "Men's outfit generator with weather-based suggestions, color matching, practical styling tools, and an intuitive clothing recommendation system.",
    },
    {
        title: "Fantaspic",
        images: { mobile: fantaspicMobile, desktop: fantaspicXl },
        imageAlt:
            "Fantaspic Pinterest-style image search app with Unsplash results and trending topics",
        github: "https://github.com/Vieramaster/Fantaspic",
        url: "https://fantaspic.vercel.app/",
        techs: ["React", "Tailwind", "TypeScript"],
        description:
            "Image search application powered by the Unsplash API, designed to explore trending topics and provide a fast, intuitive browsing experience.",
    },
] as const satisfies readonly Project[];
