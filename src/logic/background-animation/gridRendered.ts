import {
  calculateGridDimensions,
  calculateLocalOffsets,
  getHexVertex,
} from "./gridGeometry";
import { getCSSVariable } from "./getCSSVariable";

interface GridTheme {
  backgroundColor: string;
  strokeColor: string;
  lineWidth: number;
}

let themeCache: GridTheme | null = null;

export const refreshGridTheme = (): void => {
  themeCache = {
    backgroundColor: getCSSVariable("--color-background", "#111011"),
    strokeColor: getCSSVariable("--color-grid-stroke", "#aaa"),
    lineWidth: 1,
  };
};

const getGridTheme = (): GridTheme => {
  if (!themeCache) refreshGridTheme();
  return themeCache!;
};

export const drawGrid = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  grid: number,
  offsetX: number,
  offsetY: number,
): void => {
  const theme = getGridTheme();
  const { hexRadius, horizontalSpacing, verticalSpacing, cols, rows } =
    calculateGridDimensions(w, h, grid);
  const { localOffsetX, localOffsetY } = calculateLocalOffsets(
    offsetX,
    offsetY,
    horizontalSpacing,
    verticalSpacing,
  );

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = theme.backgroundColor;
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.strokeStyle = theme.strokeColor;
  ctx.lineWidth = theme.lineWidth;

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
