import type { HTMLAttributes } from "astro/types";

export type IconProps = HTMLAttributes<"svg">;

export type IconComponent = (props: IconProps) => unknown;

export interface WithIcon {
    readonly Icon: IconComponent;
}
