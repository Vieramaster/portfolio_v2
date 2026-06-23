import {
  GRID_MEDIA,
  calculateTranslation,
  clampIndex,
  getIndexFromKey,
} from "./slider-helpers";
import {
  updateA11yVisibility,
  updateLabelsAndStatus,
  updateButtonStates,
  restoreFocusIfTrapped,
} from "./slider-dom";
import { bindTouchSwipe } from "./slider-touch";

const INSTANCES = new Map<HTMLElement, { destroy: () => void }>();

/**
 * Inicializador global de carruseles de proyectos
 */
export const projectsSlider = (): void => {
  document.querySelectorAll<HTMLElement>("[data-slider]").forEach((slider) => {
    if (INSTANCES.has(slider)) return;

    const instance = createSliderInstance(slider);
    if (instance) {
      INSTANCES.set(slider, instance);
    }
  });
};

const createSliderInstance = (slider: HTMLElement) => {
  const track = slider.querySelector<HTMLElement>("[data-slider-track]");
  const prevBtn = slider.querySelector<HTMLButtonElement>("[data-slider-prev]");
  const nextBtn = slider.querySelector<HTMLButtonElement>("[data-slider-next]");
  const statusEl =
    slider
      .closest("section")
      ?.querySelector<HTMLElement>("[data-slider-status]") || null;
  const gridMedia = window.matchMedia(GRID_MEDIA);

  if (!track || !prevBtn || !nextBtn) return null;

  const slides = track.querySelectorAll<HTMLElement>("[data-slider-slide]");

  if (!slides.length) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return null;
  }

  // Agrupamos referencias para pasarlas de forma limpia a los helpers
  const elements = {
    slider,
    track,
    prevBtn,
    nextBtn,
    statusEl,
    slides,
  };
  let currentIndex = 0;

  const isGridView = () => gridMedia.matches;

  const render = () => {
    // 1. Posición física
    const { columnGap, gap } = getComputedStyle(track);
    track.style.transform = calculateTranslation(
      currentIndex,
      slider.clientWidth,
      columnGap || gap,
      isGridView(),
    );

    // 2. Estados visuales y accesibilidad
    updateButtonStates(
      prevBtn,
      nextBtn,
      currentIndex,
      slides.length,
      isGridView(),
    );
    updateA11yVisibility(elements, currentIndex, isGridView());
    updateLabelsAndStatus(elements, currentIndex, isGridView());
  };

  const goTo = (index: number) => {
    if (isGridView()) return;
    currentIndex = clampIndex(index, slides.length);
    render();
    restoreFocusIfTrapped(slider, slides);
  };

  // Inicialización de UI
  slider.classList.add("js-initialized");
  slides.forEach((slide) => slide.removeAttribute("hidden"));

  // Manejadores de Eventos
  const handleKeydown = (event: KeyboardEvent) => {
    const targetIndex = getIndexFromKey(
      event.key,
      currentIndex,
      slides.length,
      isGridView(),
    );
    if (targetIndex !== null) {
      event.preventDefault();
      goTo(targetIndex);
    }
  };

  const handlePrev = () => goTo(currentIndex - 1);
  const handleNext = () => goTo(currentIndex + 1);
  const handleGridChange = () => render();

  // Asignación de Listeners
  prevBtn.addEventListener("click", handlePrev);
  nextBtn.addEventListener("click", handleNext);
  slider.addEventListener("keydown", handleKeydown);
  gridMedia.addEventListener("change", handleGridChange);

  const unbindTouchSwipe = bindTouchSwipe(
    slider,
    { onSwipeLeft: handleNext, onSwipeRight: handlePrev },
    () => !isGridView(),
  );

  // Buenas prácticas 2026: Guardar referencia del observador para desconectarlo
  const resizeObserver = new ResizeObserver(() => {
    const { columnGap, gap } = getComputedStyle(track);
    track.style.transform = calculateTranslation(
      currentIndex,
      slider.clientWidth,
      columnGap || gap,
      isGridView(),
    );
  });
  resizeObserver.observe(slider);

  render();

  return {
    destroy: () => {
      prevBtn.removeEventListener("click", handlePrev);
      nextBtn.removeEventListener("click", handleNext);
      slider.removeEventListener("keydown", handleKeydown);
      gridMedia.removeEventListener("change", handleGridChange);
      unbindTouchSwipe();
      resizeObserver.disconnect(); // Previene memory leaks
      slider.classList.remove("js-initialized");
    },
  };
};
