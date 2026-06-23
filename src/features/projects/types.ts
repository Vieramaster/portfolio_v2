import type { ImageMetadata } from "astro";
import type { TechStackLabel } from "@/features/tech-stack/data";

export interface Project {
    title: string;
    description: string;
    image: ImageMetadata
    imageAlt?: string;
    projectURL: string;
    githubURL: string;
    techs: readonly TechStackLabel[];
    
}
