import { PROFILE } from "@/shared/constants/profile";

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

