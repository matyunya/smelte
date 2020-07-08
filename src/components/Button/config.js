import { block } from "../../utils/smelter";

const basic = p => !p.outlined && !p.text && !p.fab;

const elevation = p =>
  (basic(p) || p.icon) &&
  !p.disabled &&
  !p.flat &&
  !p.text &&
  (p.elevation || 3);

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
    rounded,
    smallAndIcon: p => p.small && p.icon,
    elevationHover: 5,
    elevation
  },
  nodes: {
    button: {
      isMain: true,
      root: "py-2 dense:py-2 dense:px-2 px-4 uppercase text-sm font-medium relative overflow-hidden",
      outlined:
        "bg-transparent border border-solid border-$color-$normal text-$color-$normal hover:bg-$color-trans dark-hover:bg-$color-transDark",
      text:
        "bg-transparent border-none dense:px-2 px-4 hover:bg-transparent text-$color-$lighter",
      icon: "p-4 dense:p-2 flex items-center rounded-full",
      fab:
        "hover:bg-$color-transLight text-$color-$normal",
      small: "p-1 h-4 w-4",
      basic:
        "text-white duration-200 ease-in  bg-$color-$normal hover:bg-$color-$lighter",
      disabled: `
        bg-gray-300 text-gray-500 dark:bg-dark-400 elevation-none pointer-events-none
        hover:bg-gray-300 cursor-default
      `,
      elevation: "hover:elevation-$elevationHover elevation-$elevation",
      rounded: "rounded",
      smallAndIcon: "flex items-center justify-center",
      notIcon: (i, p) => i.set("button", !p.icon),
      block
    },
    icon: {
      iconClass: "",
      fab: "text-$color-500"
    }
  }
};

export default config;
