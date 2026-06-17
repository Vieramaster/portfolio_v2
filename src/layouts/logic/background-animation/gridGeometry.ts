
export const POLYGON_SCALE = 2;
const DEG_TO_RAD = Math.PI / 180;
const ANGLE_OFFSET = -30;

interface GridDimensions {
  hexRadius: number;
  horizontalSpacing: number;
  verticalSpacing: number;
  cols: number;
  rows: number;
}

interface LocalOffsets {
  localOffsetX: number;
  localOffsetY: number;
}

interface Point {
  x: number;
  y: number;
}

/**
 * Calcula las dimensiones base del grid hexagonal basándose en el ancho y alto del contenedor.
 */
export const calculateGridDimensions = (w: number, h: number, grid: number): GridDimensions => {
  const hexRadius = (grid / 2) * POLYGON_SCALE;
  const horizontalSpacing = Math.sqrt(3) * hexRadius;
  const verticalSpacing = hexRadius * 1.5;

  // El fallback de +4 previene glitches visuales en los bordes durante la animación
  const cols = Math.ceil(w / horizontalSpacing) + 4;
  const rows = Math.ceil(h / verticalSpacing) + 4;

  return { hexRadius, horizontalSpacing, verticalSpacing, cols, rows };
};

/**
 * Normaliza los offsets globales para que el bucle de renderizado se mantenga infinito de forma fluida.
 */
export const calculateLocalOffsets = (offsetX: number, offsetY: number, hSpacing: number, vSpacing: number): LocalOffsets => {
  return {
    localOffsetX: offsetX - Math.floor(offsetX / hSpacing) * hSpacing,
    localOffsetY: offsetY - Math.floor(offsetY / vSpacing) * vSpacing,
  };
};

/**
 * Helper para calcular un vértice específico de un hexágono.
 */
export const getHexVertex = (centerX: number, centerY: number, radius: number, side: number): Point => {
  const angle = (side * 60 + ANGLE_OFFSET) * DEG_TO_RAD;
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
};