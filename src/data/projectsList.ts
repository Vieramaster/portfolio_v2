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
        description: "OptiGuide is an educational platform designed to help new optical store employees learn essential concepts and adapt faster through interactive tools, lens simulations, face-shapes and a smart ophthalmic lens catalog.",
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
            "Outfit generator designed to help new clothing store employees learn how to combine men's apparel with confidence. Generates random outfit suggestions based on style and weather, complemented by a simple built-in weather tool.",
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
            "Pinterest-style image search application built to explore the Unsplash API and strengthen my experience with modern web technologies. Features an image search engine, a Latest Topics section with trending searches, and a clean, intuitive interface",
    },
] as const satisfies readonly Project[];
