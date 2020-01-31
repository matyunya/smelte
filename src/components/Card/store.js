import { writable } from "svelte/store";

export let defaults = {
  hover: true,
  elevation: 1,
  hoverElevation: 8
};

export const elevationOnHover = (i, p) =>
  i.set(
    `elevation-${p.elevation} hover:elevation-${p.hoverElevation}`,
    p.hover
  );

export let classes = {
  root: "rounded inline-flex flex-col overflow-hidden transition"
};

export let rules = {
  root: {
    hover: elevationOnHover
  }
};

export default props =>
  writable({
    defaults: { ...defaults, ...props.defaults },
    classes: { ...classes, ...props.classes },
    rules: { ...rules, ...props.rules }
  });
