import type { ImageMetadata } from "astro";

export interface HeroData {
  name: string;
  role: string;
  image: ImageMetadata;
  imageAlt: string;
}
