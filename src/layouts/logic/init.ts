import { projectsSlider } from "@/features/projects/logic/manager";
import { bodyGridAnimation } from "./background-animation/body-grid-animation";

export const initClient = (): void => {
  projectsSlider();
  bodyGridAnimation();
};
