import type { SoftGridConfig } from "./types"

export const SOFT_GRID_DEFAULTS = {
  grid: 60,
  speedX: 0.15,
  speedY: -0.15,
} as const satisfies SoftGridConfig;

export const SEO_DEFAULTS = {
  siteName: "Martin Viera Portfolio",
  title: "Martin Viera | Front-End Developer",
  description:
    "Front-End Developer portfolio showcasing projects built with React, Next.js, Astro, TypeScript, and Tailwind CSS.",
  imagePath: "/images/og-image.webp",
  imageAlt: "Martin Viera — Front-End Developer portfolio preview",
  imageWidth: 1200,
  imageHeight: 627,
  imageType: "image/webp",
  locale: "en_US",
} as const;

