import { writable } from "svelte/store";

export default function dark(
  value = false,
  bodyClasses = "mode-dark bg-dark-500 transition-fast pointer-events-auto"
) {
  if (typeof window === "undefined") return writable(value);
  const store = writable(value);

  return {
    subscribe: store.subscribe,
    set: v => {
      bodyClasses.split(" ").forEach(c => {
        if (v) {
          document.body.classList.add(c);
        } else {
          document.body.classList.remove(c);
        }
      });

      store.set(v);
    }
  };
}
