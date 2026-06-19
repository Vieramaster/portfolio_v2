import type { ImageMetadata } from "astro";

export interface Project {
    title: string;
    description: string;
    images: {
        mobile: ImageMetadata;
        desktop: ImageMetadata;
    };
    imageAlt?: string;
    url: string;
    github: string;
    techs: readonly string[];
}
