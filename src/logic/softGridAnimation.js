const backgroundColor = "#111011";
const strokeColor = "rgba(34, 32, 34, 0.3)";

const polygonScale = 2;

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

const drawGrid = (
  ctx,
  w,
  h,
  grid,
  offsetX,
  offsetY,
) => {
  const hexRadius = (grid / 2) * polygonScale;

  const horizontalSpacing = Math.sqrt(3) * hexRadius;
  const verticalSpacing = hexRadius * 1.5;

  const cols = Math.ceil(w / horizontalSpacing) + 4;
  const rows = Math.ceil(h / verticalSpacing) + 4;

  const DEG_TO_RAD = Math.PI / 180;
  const ANGLE_OFFSET = -30;

  const localOffsetX =
    offsetX -
    Math.floor(offsetX / horizontalSpacing) *
      horizontalSpacing;

  const localOffsetY =
    offsetY -
    Math.floor(offsetY / verticalSpacing) *
      verticalSpacing;

  ctx.clearRect(0, 0, w, h);

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 1;

  for (let row = -2; row < rows; row++) {
    const rowOffset =
      (
        row +
        Math.floor(offsetY / verticalSpacing)
      ) & 1
        ? horizontalSpacing / 2
        : 0;

    for (let col = -2; col < cols; col++) {
      const centerX =
        col * horizontalSpacing +
        rowOffset -
        localOffsetX;

      const centerY =
        row * verticalSpacing -
        localOffsetY;

      for (let side = 0; side < 6; side++) {
        const angle =
          (side * 60 + ANGLE_OFFSET) *
          DEG_TO_RAD;

        const x =
          centerX +
          hexRadius * Math.cos(angle);

        const y =
          centerY +
          hexRadius * Math.sin(angle);

        if (side === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
    }
  }

  ctx.stroke();
};

const createGridAnimation = (
  container,
  config,
) => {
  const canvas =
    container.querySelector("canvas");

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

    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0,
    );
  };

  const draw = () => {
    drawGrid(
      ctx,
      w,
      h,
      config.grid,
      offsetX,
      offsetY,
    );

    offsetX += config.speedX;
    offsetY += config.speedY;

    raf = requestAnimationFrame(draw);
  };

  new ResizeObserver(resize).observe(
    container,
  );

  resize();
  raf = requestAnimationFrame(draw);

  return {
    destroy: () => {
      cancelAnimationFrame(raf);
    },
  };
};