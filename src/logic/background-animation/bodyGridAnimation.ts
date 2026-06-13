import { drawGrid } from "./gridRendered";

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
      grid: Number(el.dataset.grid) || 40,
      speedX: Number(el.dataset.speedX) || 0.5,
      speedY: Number(el.dataset.speedY) || 0.5,
    };

    const instance = createGridAnimation(el, config);
    if (instance) {
      INSTANCES.set(id, instance);
    }
  });
};

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

  const resize = () => {
    dpr = window.devicePixelRatio || 1;
    w = container.clientWidth;
    h = container.clientHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = () => {
    drawGrid(ctx, w, h, config.grid, offsetX, offsetY);

    offsetX += config.speedX;
    offsetY += config.speedY;

    raf = requestAnimationFrame(draw);
  };

  const observer = new ResizeObserver(resize);
  observer.observe(container);

  resize();
  raf = requestAnimationFrame(draw);

  return {
    destroy: () => {
      cancelAnimationFrame(raf);
      observer.disconnect(); // ¡Buenas prácticas! Evitamos memory leaks del observer
    },
  };
};
