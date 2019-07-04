import { writable } from "svelte/store";

export const right = writable(false);
export const persistent = writable(true);
export const elevation = writable(false);
export const showNav = writable(true);
export const showNavMobile = writable(false);
export const breakpoint = writable("");
