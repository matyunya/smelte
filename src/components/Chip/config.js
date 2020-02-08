export const config = {
  props: {
    value: "",
    label: "",
    checked: false,
    disabled: false,
    notSelected: p => !p.selected
  },
  nodes: {
    wrapper: {
      isMain: true,
      root:
        "relative overflow-hidden flex items-center rounded-full px-2 py-1 mx-1 inline-block",
      outlined: "bg-transparent border",
      notSelected:
        "border-gray-400 border-solid hover:bg-gray-50 dark-hover:bg-dark-400 bg-gray-300 dark:bg-dark-600",
      selected:
        "border-$color-$normal dark:border-$color-800 text-$color-$normal bg-$color-100 hover:bg-$color-50"
    },
    content: {
      root: "px-2 text-sm"
    },
    icon: {
      selected: "text-$color-400",
      notSelected: "text-gray-600"
    },
    removable: {
      root: "rounded-full p-1/2 inline-flex items-center cursor-pointer",
      selected: "hover:bg-$color-300 bg-$color-400",
      notSelected: "hover:bg-gray-400 bg-gray-500 dark:bg-gray-800"
    },
    removableIcon: {
      root: "text-white dark:text-white"
    }
  }
};

export default config;
