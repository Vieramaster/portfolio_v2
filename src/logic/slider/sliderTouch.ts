const SWIPE_THRESHOLD_PX = 50;

export interface TouchSwipeHandlers {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

/**
 * Navegación por deslizamiento horizontal para carruseles en pantallas táctiles.
 */
export const bindTouchSwipe = (
  element: HTMLElement,
  { onSwipeLeft, onSwipeRight }: TouchSwipeHandlers,
  isEnabled: () => boolean,
): (() => void) => {
  let startX = 0;
  let startY = 0;

  const handleTouchStart = (event: TouchEvent) => {
    if (!isEnabled() || event.changedTouches.length === 0) return;

    const touch = event.changedTouches[0];
    startX = touch.screenX;
    startY = touch.screenY;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (!isEnabled() || event.changedTouches.length === 0) return;

    const touch = event.changedTouches[0];
    const diffX = startX - touch.screenX;
    const diffY = startY - touch.screenY;

    if (
      Math.abs(diffX) < SWIPE_THRESHOLD_PX ||
      Math.abs(diffX) < Math.abs(diffY)
    ) {
      return;
    }

    if (diffX > 0) onSwipeLeft();
    else onSwipeRight();
  };

  element.addEventListener("touchstart", handleTouchStart, { passive: true });
  element.addEventListener("touchend", handleTouchEnd, { passive: true });

  return () => {
    element.removeEventListener("touchstart", handleTouchStart);
    element.removeEventListener("touchend", handleTouchEnd);
  };
};
