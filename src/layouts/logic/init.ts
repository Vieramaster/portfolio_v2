import { projectsSlider } from "@/features/projects/logic/slider";
import { bodyGridAnimation } from "./background-animation/body-grid-animation";

export const initClient = (): void => {
  projectsSlider();
  bodyGridAnimation();
};
