import { writable } from "svelte/store";

export let defaults = {
  value: false,
  outlined: false,
  text: false,
  block: false,
  disabled: false,
  icon: null,
  small: false,
  light: false,
  dark: false,
  flat: false,
  color: "primary",
  href: null,
  fab: false
};

const block = (i, p) => i.set("w-full", p.block);

const smallAndIcon = (i, p) =>
  i.set("flex items-center justify-center", p.small && p.icon);

const rounded = (i, p) => i.set("rounded", p.basic || p.outlined || p.text);

const notIcon = (i, p) => i.set("button", !p.icon);

function useRule(name) {
  // TODO: validate
  return (i, props, store) => i.set(store.classes[name], props[name]);
}

export let classes = {
  root: "py-2 px-4 uppercase text-sm font-medium relative overflow-hidden",
  basic: "text-white transition",
  outlined: "bg-transparent border border-solid",
  text: "bg-transparent border-none px-4 hover:bg-transparent",
  icon: "p-4 flex items-center rounded-full",
  fab: "hover:bg-transparent",
  small: "p-1 h-4 w-4",
  disabled:
    "bg-gray-300 text-gray-500 dark:bg-dark-400 elevation-none pointer-events-none hover:bg-gray-300 cursor-default",
  elevation: "hover:elevation-5 elevation-3"
};

export let rules = {
  root: {
    basic: useRule("basic"),
    elevation: useRule("elevation"),
    disabled: useRule("disabled"),
    outlined: useRule("outlined"),
    text: useRule("text"),
    icon: useRule("icon"),
    small: useRule("small"),
    fab: useRule("fab"),
    fabUnsetColor: (i, p) => i.setTextColor(500, p.fab),
    block,
    smallAndIcon,
    rounded,
    notIcon
  },
  icon: {
    iconClass: useRule("iconClass"),
    notFab: (i, p) => i.setTextColor(500, p.fab && !p.iconClass)
  }
};

export default props =>
  writable({
    defaults: { ...defaults, ...props.defaults },
    classes: { ...classes, ...props.classes },
    rules: { ...rules, ...props.rules }
  });
