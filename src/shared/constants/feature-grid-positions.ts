
export const FEATURE_GRID_POSITIONS = {
  main: [
    "w-80 mx-auto py-6 min-h-dvh grid grid-cols-1 gap-4 place-items-center place-content-center",
    "max-md:w-full max-md:max-w-80 max-md:px-4 max-md:min-h-0 max-md:place-items-stretch max-md:place-content-start max-md:gap-5",
    "md:w-180 md:grid-cols-2 md:grid-rows-[repeat(24,2rem)]",
    "xl:w-6xl xl:grid-cols-3 xl:grid-rows-[repeat(16,2rem)] xl:gap-6",
    "3xl:w-450 3xl:grid-cols-5 3xl:grid-rows-[repeat(15,2rem)]",
  ].join(" "),
  hero: [
    "md:row-span-7 md:size-full",
    "xl:col-start-1 xl:row-span-7"
  ].join(" "),
  letsTalk: [
    "max-md:col-auto col-start-1 ",
    "md:row-start-8 md:row-span-4 md:size-full",
    "xl:row-start-8 xl:row-span-4",
    "3xl:row-span-4",
  ].join(""),
  aboutMe: [
    "max-md:col-auto max-md:row-auto",
    "md:size-full md:col-start-2 md:row-span-11",
    "xl:col-start-2 xl:col-end-4 xl:row-span-6 xl:row-start-1",
    "3xl:col-start-2 3xl:col-end-6 3xl:row-start-1 3xl:row-span-5"
  ].join(""),
  projects: [
    "md:size-full md:col-start-2 md:row-start-12 md:row-span-11",
    "xl:col-start-3 xl:row-start-7 xl:row-span-9 ",
    "3xl:col-end-6 3xl:row-start-6 3xl:row-span-10",
  ].join(""),
  techStack: [
    "md:col-start-1 md:row-start-12 md:row-span-9 md:size-full",
    "xl:col-start-2 xl:row-start-7 xl:row-span-7 ",
    "3xl:row-start-6 3xl:row-span-8"
  ].join(""),
  achievements: [
    "md:flex max-md:col-auto max-md:row-auto md:size-full md:col-start-1 md:col-end-3 md:row-start-23 md:row-span-2",
    "xl:row-start-14 xl:row-span-2 xl:h-full",
  ].join("")
  ,
  socials: [
    "max-md:col-auto md:size-full md:col-start-1 md:row-start-21 md:row-span-2 md:justify-center",
    "xl:col-start-1 xl:row-start-12 xl:row-span-2 ",
    " 3xl:row-span-2 3xl:row-start-12"
  ].join("")
} as const;
