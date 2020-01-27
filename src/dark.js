import { writable } from "svelte/store";

function isDarkTheme() {
  if (!window.matchMedia) {
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return true;
  }
}

export default function dark(value = false, bodyClasses = "mode-dark") {
  if (typeof window === "undefined") return writable(value);
  const store = writable(value || isDarkTheme());

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
