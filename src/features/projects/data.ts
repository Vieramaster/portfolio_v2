import outfitLand from "@/assets/images/projects/outfitland.webp";
import optiguide from "@/assets/images/projects/optiguide.webp"
import fantaspic from "@/assets/images/projects/fantaspic.webp"
import type { Project } from "./types";

export const PROJECTS_LIST = [
    {
        title: "Optiguide",
        image: optiguide,
        imageAlt:
            "Optiguide app interface helping optical industry employees learn concepts and use sales tools",
        githubURL: "https://github.com/Vieramaster/Optiguide",
        projectURL: "https://optiguide.vercel.app/",
        techs: ["Next.js", "Tailwind", "TypeScript"],
        description: "Educational platform for optical stores with interactive tools, lens simulations, face shape analysis, and a smart ophthalmic catalog.",
    },
    {
        title: "Outfitland",
        image: outfitLand,
        imageAlt:
            "Outfitland app showing men's outfit combinations with weather-based clothing suggestions",
        githubURL: "https://github.com/Vieramaster/Outfitland_2.0",
        projectURL: "https://outfitland.vercel.app",
        techs: ["React", "Tailwind", "TypeScript"],
        description:
            "Men's outfit generator with weather-based suggestions, color matching, practical styling tools, and an intuitive clothing recommendation system.",
    },
    {
        title: "Fantaspic",
        image: fantaspic,
        imageAlt:
            "Fantaspic Pinterest-style image search app with Unsplash results and trending topics",
        githubURL: "https://github.com/Vieramaster/Fantaspic",
        projectURL: "https://fantaspic.vercel.app/",
        techs: ["React", "Tailwind", "TypeScript"],
        description:
            "Image search application powered by the Unsplash API, designed to explore trending topics and provide a fast, intuitive browsing experience.",
    },
] as const satisfies readonly Project[];
