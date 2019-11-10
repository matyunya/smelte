import { writable } from "svelte/store";
import { onDestroy } from "svelte";

export const right = writable(false);
export const persistent = writable(true);
export const elevation = writable(false);
export const showNav = writable(true);
export const showNavMobile = writable(false);

function calcBreakpoint(width) {
  if (width > 1279) {
    return "xl";
  }
  if (width > 1023) {
    return "lg";
  }
  if (width > 767) {
    return "md";
  }
  return "sm";
}

export function breakpoint() {
  if (typeof window === "undefined") return writable(false);

  const store = writable(calcBreakpoint(window.innerWidth));

  const onResize = ({ target }) => store.set(calcBreakpoint(target.innerWidth));

  window.addEventListener("resize", onResize);
  onDestroy(() => window.removeListener(onResize));

  return {
    subscribe: store.subscribe
  };
}
