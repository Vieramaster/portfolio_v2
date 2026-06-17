interface SliderElements {
  slider: HTMLElement;
  track: HTMLElement;
  prevBtn: HTMLButtonElement;
  nextBtn: HTMLButtonElement;
  statusEl: HTMLElement | null;
  slides: NodeListOf<HTMLElement>;
}

/**
 * Actualiza la accesibilidad semántica y visibilidad de los slides.
 */
export const updateA11yVisibility = (
  elements: SliderElements,
  currentIndex: number,
  isGridView: boolean,
): void => {
  const { slides } = elements;

  if (isGridView) {
    slides.forEach((slide) => {
      slide.removeAttribute("inert");
      slide.setAttribute("aria-hidden", "false");
      slide.removeAttribute("aria-current");
    });
    return;
  }

  slides.forEach((slide, index) => {
    const isActive = index === currentIndex;
    slide.setAttribute("aria-hidden", isActive ? "false" : "true");
    slide.toggleAttribute("inert", !isActive);
    if (isActive) {
      slide.setAttribute("aria-current", "true");
    } else {
      slide.removeAttribute("aria-current");
    }
  });
};

/**
 * Actualiza las etiquetas informativas ARIA y los contadores numéricos (ej: 1 / 4).
 */
export const updateLabelsAndStatus = (
  elements: SliderElements,
  currentIndex: number,
  isGridView: boolean,
): void => {
  const { slider, statusEl, slides } = elements;

  if (isGridView) {
    slider.setAttribute("aria-label", "Projects");
    return;
  }

  slider.setAttribute(
    "aria-label",
    `Projects, slide ${currentIndex + 1} of ${slides.length}`,
  );

  if (statusEl) {
    statusEl.textContent = `${currentIndex + 1} / ${slides.length}`;
    statusEl.setAttribute(
      "aria-label",
      `Project ${currentIndex + 1} of ${slides.length}`,
    );
  }
};

/**
 * Controla la deshabilitación nativa de los botones previo y siguiente.
 */
export const updateButtonStates = (
  prevBtn: HTMLButtonElement,
  nextBtn: HTMLButtonElement,
  currentIndex: number,
  totalSlides: number,
  isGridView: boolean,
): void => {
  if (isGridView || totalSlides === 0) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  prevBtn.disabled = currentIndex <= 0;
  nextBtn.disabled = currentIndex >= totalSlides - 1;
};

/**
 * Devuelve el foco al carrusel si quedó atrapado en un slide inert.
 */
export const restoreFocusIfTrapped = (
  slider: HTMLElement,
  slides: NodeListOf<HTMLElement>,
): void => {
  const active = document.activeElement;
  if (!(active instanceof HTMLElement)) return;

  for (const slide of slides) {
    if (slide.hasAttribute("inert") && slide.contains(active)) {
      slider.focus();
      return;
    }
  }
};
