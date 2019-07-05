export default function utils(color, defaultDepth = 500) {
  return {
    bg: depth => `bg-${color}-${depth || defaultDepth}`,
    border: depth => `border-${color}-${depth || defaultDepth}`,
    txt: depth => `text-${color}-${depth || defaultDepth}`,
    ripple: depth => `ripple-${color}-${depth || defaultDepth}`
  };
}
