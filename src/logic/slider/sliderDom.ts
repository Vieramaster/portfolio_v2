interface SliderElements {
  slider: HTMLElement;
  track: HTMLElement;
  prevBtn: HTMLButtonElement;
  nextBtn: HTMLButtonElement;
  statusEl: HTMLElement | null;
  slides: NodeListOf<HTMLElement>;
  techLists: NodeListOf<HTMLElement>;
}

/**
 * Actualiza la accesibilidad semántica y visibilidad de los slides y listas tecnológicas.
 */
export const updateA11yVisibility = (elements: SliderElements, currentIndex: number, isGridView: boolean): void => {
  const { slides, techLists } = elements;

  if (isGridView) {
    slides.forEach(slide => {
      slide.removeAttribute("inert");
      slide.setAttribute("aria-hidden", "false");
    });
    techLists.forEach(list => {
      list.removeAttribute("hidden");
      list.setAttribute("aria-hidden", "false");
    });
    return;
  }

  slides.forEach((slide, index) => {
    const isActive = index === currentIndex;
    slide.setAttribute("aria-hidden", isActive ? "false" : "true");
    slide.toggleAttribute("inert", !isActive);
  });

  techLists.forEach((list, index) => {
    const isActive = index === currentIndex;
    list.toggleAttribute("hidden", !isActive);
    list.setAttribute("aria-hidden", isActive ? "false" : "true");
  });
};

/**
 * Actualiza las etiquetas informativas ARIA y los contadores numéricos (ej: 1 / 4).
 */
export const updateLabelsAndStatus = (elements: SliderElements, currentIndex: number, isGridView: boolean): void => {
  const { slider, statusEl, slides } = elements;

  if (isGridView) {
    slider.setAttribute("aria-label", "Projects");
    return;
  }

  slider.setAttribute("aria-label", `Projects, slide ${currentIndex + 1} of ${slides.length}`);
  
  if (statusEl) {
    statusEl.textContent = `${currentIndex + 1} / ${slides.length}`;
  }
};

/**
 * Controla la deshabilitación nativa de los botones previo y siguiente.
 */
export const updateButtonStates = (prevBtn: HTMLButtonElement, nextBtn: HTMLButtonElement, currentIndex: number, totalSlides: number, isGridView: boolean): void => {
  if (isGridView || totalSlides === 0) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  prevBtn.disabled = currentIndex <= 0;
  nextBtn.disabled = currentIndex >= totalSlides - 1;
};