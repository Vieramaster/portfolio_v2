export const GRID_MEDIA = "(min-width: 112.5rem)" as const;

/**
 * Calcula el desplazamiento exacto (X) que debe realizar el carrusel.
 */
export const calculateTranslation = (
  currentIndex: number, 
  sliderWidth: number, 
  trackGap: string, 
  isGridView: boolean
): string => {
  if (isGridView) return "none";
  
  const gapPx = parseFloat(trackGap) || 0;
  const step = sliderWidth + gapPx;
  return `translateX(-${currentIndex * step}px)`;
};

/**
 * Helper puro para forzar que el índice se mantenga dentro de los límites válidos.
 */
export const clampIndex = (index: number, totalSlides: number): number => {
  return Math.max(0, Math.min(index, totalSlides - 1));
};

/**
 * Evalúa las pulsaciones de teclado y retorna el nuevo índice objetivo si corresponde.
 * Retorna null si la tecla no requiere ninguna acción del carrusel.
 */
export const getIndexFromKey = (
  key: string, 
  currentIndex: number, 
  totalSlides: number, 
  isGridView: boolean
): number | null => {
  if (isGridView) return null;

  switch (key) {
    case "ArrowLeft":
      return currentIndex > 0 ? currentIndex - 1 : null;
    case "ArrowRight":
      return currentIndex < totalSlides - 1 ? currentIndex + 1 : null;
    case "Home":
      return 0;
    case "End":
      return totalSlides - 1;
    default:
      return null;
  }
};