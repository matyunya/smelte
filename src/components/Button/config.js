import { block } from "../../utils/smelter";

const basic = p => !p.outlined && !p.text && !p.fab;

const elevation = p =>
  (basic(p) || p.icon) && !p.disabled && !p.flat && !p.text;

const rounded = p => p.rounded || basic(p) || p.outlined || p.text;

export const config = {
  props: {
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
    fab: false,
    basic,
    elevation,
    rounded,
    smallAndIcon: p => p.small && p.icon
  },
  computed: {},
  nodes: {
    button: {
      isMain: true,
      root: "py-2 px-4 uppercase text-sm font-medium relative overflow-hidden",
      outlined:
        "bg-transparent border border-solid border-$color-$normal text-$color-$normal hover:bg-$color-trans dark-hover:bg-$color-transDark",
      text:
        "bg-transparent border-none px-4 hover:bg-transparent text-$color-$lighter",
      icon: "p-4 flex items-center rounded-full remove:py-2",
      fab:
        "hover:bg-$color-transLight text-$color-$normal remove:text-$color-$lighter",
      small: "p-1 h-4 w-4",
      disabled:
        "bg-gray-300 text-gray-500 dark:bg-dark-400 elevation-none pointer-events-none hover:bg-gray-300 cursor-default",
      basic: "text-white transition bg-$color-$normal hover:bg-$color-$lighter",
      elevation: "hover:elevation-5 elevation-3",
      rounded: "rounded",
      smallAndIcon: "flex items-center justify-center",
      notIcon: (i, p) => i.set("button", !p.icon),
      dark: (i, p) => i.setShade(-400, p.dark),
      light: (i, p) => i.setShade(300, p.light),
      block
    },
    icon: {
      iconClass: "",
      fab: "text-$color-500"
    }
  }
};

export default config;
