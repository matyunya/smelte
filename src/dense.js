import { writable } from "svelte/store";

export let denseMode;

export default function dark(value = false, bodyClasses = "mode-dense") {
  if (typeof window === "undefined") return writable(value);

  if (!denseMode) {
    denseMode = writable(value);
  }

  return {
    subscribe: denseMode.subscribe,
    set: v => {
      bodyClasses.split(" ").forEach(c => {
        if (v) {
          document.body.classList.add(c);
        } else {
          document.body.classList.remove(c);
        }
      });

      denseMode.set(v);
    }
  };
}
