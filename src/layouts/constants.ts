import { PROFILE } from "@/shared/constants/profile";
import type { SoftGridConfig } from "./types";

export const SOFT_GRID_DEFAULTS = {
  grid: 60,
  speedX: 0.15,
  speedY: -0.15,
} as const satisfies SoftGridConfig;

export const SEO_DEFAULTS = {
  siteName: `${PROFILE.name} Portfolio`,
  title: `${PROFILE.name} | ${PROFILE.jobTitle}`,
  description:
    "Front-End Developer portfolio showcasing projects built with React, Next.js, Astro, TypeScript, and Tailwind CSS.",
  imagePath: "/images/og-image.webp",
  imageAlt: `${PROFILE.name} — ${PROFILE.jobTitle} portfolio preview`,
  imageWidth: 1200,
  imageHeight: 627,
  imageType: "image/webp",
  locale: "en_US",
} as const;
