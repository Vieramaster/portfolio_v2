import { drawGrid, refreshGridTheme } from "./grid-rendered";
import { SOFT_GRID_DEFAULTS } from "../../soft-grid-defaults";

interface GridConfig {
  grid: number;
  speedX: number;
  speedY: number;
}

const INSTANCES = new Map<string, { destroy: () => void }>();

/**
 * Función exportada principal para inicializar las animaciones vía data-attributes
 */
export const bodyGridAnimation = (): void => {
  document.querySelectorAll<HTMLElement>("[data-soft-grid]").forEach((el) => {
    const id = el.dataset.softGrid;
    if (!id || INSTANCES.has(id)) return;

    const config: GridConfig = {
      grid: Number(el.dataset.grid) || SOFT_GRID_DEFAULTS.grid,
      speedX: Number(el.dataset.speedX) || SOFT_GRID_DEFAULTS.speedX,
      speedY: Number(el.dataset.speedY) || SOFT_GRID_DEFAULTS.speedY,
    };

    const instance = createGridAnimation(el, config);
    if (instance) {
      INSTANCES.set(id, instance);
    }
  });
};

const prefersReducedMotion = (): boolean =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const createGridAnimation = (container: HTMLElement, config: GridConfig) => {
  const canvas = container.querySelector("canvas");
  if (!canvas) throw new Error("Canvas element not found in container");

  const ctx = canvas.getContext("2d", {
    alpha: false,
    desynchronized: true, // Excelente optimización heredada
  });

  if (!ctx) return null;

  let raf = 0;
  let dpr = 1;
  let w = 0;
  let h = 0;
  let offsetX = 0;
  let offsetY = 0;

  const drawStatic = () => {
    drawGrid(ctx, w, h, config.grid, 0, 0);
  };

  const stopAnimation = () => {
    cancelAnimationFrame(raf);
    raf = 0;
    offsetX = 0;
    offsetY = 0;
    drawStatic();
  };

  const draw = () => {
    drawGrid(ctx, w, h, config.grid, offsetX, offsetY);

    offsetX += config.speedX;
    offsetY += config.speedY;

    raf = requestAnimationFrame(draw);
  };

  const startAnimation = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(draw);
  };

  const handleReducedMotionChange = () => {
    if (prefersReducedMotion()) {
      stopAnimation();
    } else {
      startAnimation();
    }
  };

  const reducedMotionMedia = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  reducedMotionMedia.addEventListener("change", handleReducedMotionChange);

  const resize = () => {
    dpr = window.devicePixelRatio || 1;
    w = container.clientWidth;
    h = container.clientHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    refreshGridTheme();

    if (prefersReducedMotion()) {
      drawStatic();
    }
  };

  const observer = new ResizeObserver(resize);
  observer.observe(container);

  resize();

  if (!prefersReducedMotion()) {
    raf = requestAnimationFrame(draw);
  }

  return {
    destroy: () => {
      cancelAnimationFrame(raf);
      reducedMotionMedia.removeEventListener("change", handleReducedMotionChange);
      observer.disconnect(); // ¡Buenas prácticas! Evitamos memory leaks del observer
    },
  };
};
