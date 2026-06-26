import {
  AstroIco,
  ReactIco,
  NextIco,
  TailwindIco,
  TypeScriptIco,
} from "@/shared/components/icons/tech";
import type { TechStackItem } from "./types";

export const TECH_STACK = [
  { label: "Astro", Icon: AstroIco },
  { label: "React", Icon: ReactIco },
  { label: "Next.js", Icon: NextIco },
  { label: "Tailwind", Icon: TailwindIco },
  { label: "TypeScript", Icon: TypeScriptIco },
] as const satisfies readonly TechStackItem[];

export const TECH_TOOLS = [
  "TanStack",
  "Zustand",
  "Git",
  "Shadcn/ui",
  "React Doctor",
  "Vitest",
  "Eslint",
  "Prettier",
  "React Router",
  "Zod",
  "Vercel",
] as const;
