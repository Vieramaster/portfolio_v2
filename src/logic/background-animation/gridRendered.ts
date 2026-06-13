import {
  calculateGridDimensions,
  calculateLocalOffsets,
  getHexVertex,
} from "./gridGeometry";
import { getCSSVariable } from "./getCSSVariable";

// Constantes estéticas extraídas de la lógica
export const THEME = {
  backgroundColor: getCSSVariable("--background-color", "#111011"),
  strokeColor: getCSSVariable("--stroke-color", "rgba(34, 32, 34, 0.7)"),
  lineWidth: 1,
} as const;

export const drawGrid = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  grid: number,
  offsetX: number,
  offsetY: number,
): void => {
  const { hexRadius, horizontalSpacing, verticalSpacing, cols, rows } =
    calculateGridDimensions(w, h, grid);
  const { localOffsetX, localOffsetY } = calculateLocalOffsets(
    offsetX,
    offsetY,
    horizontalSpacing,
    verticalSpacing,
  );

  // Limpieza y fondo
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = THEME.backgroundColor;
  ctx.fillRect(0, 0, w, h);

  // Configuración de trazo único (Clave para performance)
  ctx.beginPath();
  ctx.strokeStyle = THEME.strokeColor;
  ctx.lineWidth = THEME.lineWidth;

  for (let row = -2; row < rows; row++) {
    const isOddRow = ((row + Math.floor(offsetY / verticalSpacing)) & 1) !== 0;
    const rowOffset = isOddRow ? horizontalSpacing / 2 : 0;

    for (let col = -2; col < cols; col++) {
      const centerX = col * horizontalSpacing + rowOffset - localOffsetX;
      const centerY = row * verticalSpacing - localOffsetY;

      for (let side = 0; side < 6; side++) {
        const { x, y } = getHexVertex(centerX, centerY, hexRadius, side);

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
