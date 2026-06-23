import heroImage from "@/assets/images/hero/hero.webp";
import type { HeroData } from "./types";

export const HERO_DATA = {
  name: "Martín Viera",
  role: "Frontend Developer",
  image: heroImage,
  imageAlt:
    "Portrait of Martín Viera with his face turned slightly to the right, serious expression, black T-shirt, dark background with soft lighting.",
} as const satisfies HeroData;
