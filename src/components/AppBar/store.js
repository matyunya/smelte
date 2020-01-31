import { writable } from "svelte/store";

export let defaults = {};

export let classes = {
  root:
    "fixed top-0 w-screen items-center flex-wrap flex left-0 z-30 p-0 h-16 elevation-3 bg-primary-300 dark:bg-dark-600"
};

export let rules = {};

export default props =>
  writable({
    defaults: { ...defaults, ...props.defaults },
    classes: { ...classes, ...props.classes },
    rules: { ...rules, ...props.rules }
  });
