import type { SoftGridConfig } from "./types";

export const SOFT_GRID_DEFAULTS = {
  grid: 60,
  speedX: 0.15,
  speedY: -0.15,
} as const satisfies SoftGridConfig;
