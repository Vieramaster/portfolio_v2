import { GRID_MEDIA_QUERY } from "@/shared/constants/breakpoints";

export const projectsSlider = (): void => {
  const slider = document.querySelector<HTMLElement>("[data-slider]");
  if (!slider) return;
  if (slider.classList.contains("js-initialized")) return;

  const radios = Array.from(
    slider.querySelectorAll<HTMLInputElement>("[data-slider-radio]"),
  );
  const slides = Array.from(
    slider.querySelectorAll<HTMLElement>("[data-slider-slide]"),
  );

  if (radios.length === 0 || slides.length === 0) return;

  const gridMedia = window.matchMedia(GRID_MEDIA_QUERY);

  const getActiveIndex = (): number => {
    const checkedIndex = radios.findIndex((radio) => radio.checked);
    return checkedIndex >= 0 ? checkedIndex : 0;
  };

  const restoreFocusIfTrapped = (activeIndex: number): void => {
    const activeElement = document.activeElement;
    if (!(activeElement instanceof HTMLElement)) return;

    const trappedSlide = slides.find(
      (slide) => slide.hasAttribute("inert") && slide.contains(activeElement),
    );
    if (!trappedSlide) return;

    const activeRadio = radios[activeIndex];
    activeRadio?.focus({ preventScroll: true });
  };

  const syncA11y = (): void => {
    if (gridMedia.matches) {
      slides.forEach((slide) => {
        slide.removeAttribute("inert");
        slide.setAttribute("aria-hidden", "false");
        slide.style.pointerEvents = "";
        slide.removeAttribute("aria-current");
      });
      slider.setAttribute("aria-label", "Projects");
      return;
    }

    const activeIndex = getActiveIndex();

    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;

      slide.toggleAttribute("inert", !isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.style.pointerEvents = isActive ? "" : "none";
      slide.toggleAttribute("aria-current", isActive);
    });

    slider.setAttribute(
      "aria-label",
      `Projects, slide ${activeIndex + 1} of ${slides.length}`,
    );

    restoreFocusIfTrapped(activeIndex);
  };

  slider.classList.add("js-initialized");

  radios.forEach((radio) => {
    radio.addEventListener("change", syncA11y);
  });
  gridMedia.addEventListener("change", syncA11y);

  syncA11y();
};
