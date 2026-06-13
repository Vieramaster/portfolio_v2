/**
 * Helper dinámico para leer variables CSS del DOM.
 * Si la variable no existe, cae en un fallback seguro.
 */
export const getCSSVariable = (variableName: string, fallback: string): string => {
  // Nos aseguramos de estar en el entorno del navegador
  if (typeof window === 'undefined') return fallback;
  
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim() || fallback;
};