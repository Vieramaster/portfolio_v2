import heroProfile from "@/assets/images/hero-profile/hero-profile.webp";

export const PROFILE = {
  name: "Martín Viera",
  jobTitle: "Frontend Developer",
  location: "Mar del Plata, Argentina",

  image: heroProfile,
  imageAlt:
    "Portrait of Martín Viera with his face turned slightly to the right, serious expression, black T-shirt, dark background with soft lighting.",
  cv: {
    href: "/cv/martin-viera-cv.pdf",
    downloadFilename: "martin-viera-CV.pdf",
  },
  social: {
    instagram: "https://www.instagram.com/martin_viera90/",
    linkedin: "https://www.linkedin.com/in/rodrigo-martin-viera-royer",
    discord: "https://discord.com/users/viera#4098",
    github: "https://github.com/Vieramaster",
    email: "martinviera.dev@outlook.com",
    telegram: "https://t.me/vieramaster",
  },
} as const;
