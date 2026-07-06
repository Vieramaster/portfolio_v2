import heroImage from "@/assets/images/hero/hero.webp"

export const PROFILE = {
  name: "Martín Viera",
  jobTitle: "Frontend Developer",
  location: "Mar del Plata, Argentina",
  image: heroImage,
  imageAlt:
    "Portrait of Martín Viera with his face turned slightly to the right, serious expression, black T-shirt, dark background with soft lighting.",
  cv: {
    href: "/cv/martin-viera-cv.pdf",
    downloadFilename: "martin-viera-CV.pdf",
  },
} as const;
