import { projectsSlider } from "@/features/Projects/logic/manager";
import { bodyGridAnimation } from "./background-animation/bodyGridAnimation";

export const initClient = (): void => {
  projectsSlider();
  bodyGridAnimation();
};
