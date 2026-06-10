const INSTANCES = new Map();

export const softGridAnimation = () => {
  document.querySelectorAll("[data-soft-grid]").forEach((el) => {
    const id = el.dataset.softGrid;

    if (INSTANCES.has(id)) return;

    INSTANCES.set(
      id,
      createGridAnimation(el, {
        grid: Number(el.dataset.grid),
        speedX: Number(el.dataset.speedX),
        speedY: Number(el.dataset.speedY),
      }),
    );
  });
};

const drawGrid = (ctx, w, h, grid, offsetX, offsetY) => {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#222022";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(219, 232, 75, 0.1)";
  ctx.lineWidth = 1;

  const shiftX = offsetX % grid;
  const shiftY = offsetY % grid;
  const cols = Math.ceil(w / grid) + 2;
  const rows = Math.ceil(h / grid) + 2;

  ctx.beginPath();

  for (let i = -1; i < cols; i++) {
    const x = i * grid + shiftX;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
  }

  for (let j = -1; j < rows; j++) {
    const y = j * grid + shiftY;
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
  }

  ctx.stroke();
};

const createGridAnimation = (container, config) => {
  const canvas = container.querySelector("canvas");
  const ctx = canvas.getContext("2d", {
    alpha: false,
    desynchronized: true,
  });

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

  new ResizeObserver(resize).observe(container);
  resize();
  raf = requestAnimationFrame(draw);

  return {
    destroy: () => {
      cancelAnimationFrame(raf);
    },
  };
};
