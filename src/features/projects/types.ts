import type { ImageMetadata } from "astro";

export interface Project {
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt?: string;
  projectURL: string;
  githubURL: string;
  techs: readonly string[];
}
