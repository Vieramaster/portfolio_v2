import type { WithIcon } from "@/shared/types/with-icon";

export interface AchievementItem extends WithIcon {
  title: string;
  description: string;
  iconVariant: "stroke" | "fill";
}
