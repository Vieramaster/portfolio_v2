let colorProbe: HTMLDivElement | null = null;

const getColorProbe = (): HTMLDivElement => {
  if (!colorProbe) {
    colorProbe = document.createElement("div");
    colorProbe.style.display = "none";
    document.documentElement.appendChild(colorProbe);
  }
  return colorProbe;
};

/**
 * Lee una variable CSS del tema y la resuelve a un valor usable en canvas
 * (p. ej. rgb/rgba), incluso cuando la variable apunta a otra con var().
 */
export const getCSSVariable = (
  variableName: string,
  fallback: string,
): string => {
  if (typeof window === "undefined") return fallback;

  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();

  if (!raw) return fallback;

  const probe = getColorProbe();
  probe.style.backgroundColor = `var(${variableName})`;

  return getComputedStyle(probe).backgroundColor.trim() || fallback;
};
