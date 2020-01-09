import { writable } from "svelte/store";

export default function notificationQueue() {
  const store = writable([]);

  let toggle = () => {};

  return {
    subscribe: store.subscribe,

    notify: message => {
      store.update(u => [...u, message]);
    },

    error: message => store.update(u => [...u, { message, color: "error" }]),
    alert: message => store.update(u => [...u, { message, color: "alert" }]),

    next: () => {
      store.update(u => (u.length === 1 ? [] : u.splice(-1, 1)));
      toggle();
    },

    setToggle: s => {
      toggle = s;
    }
  };
}
