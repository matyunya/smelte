export const config = {
  props: {
    value: "",
    label: "",
    checked: false,
    disabled: false
  },
  nodes: {
    wrapper: {
      isMain: true
    },
    checkbox: {
      root: "inline-flex items-center mb-2 dense:mb-0 cursor-pointer z-10"
    },
    checkboxWrapper: {
      root: "relative w-auto h-auto z-0"
    },
    icon: {
      root: "text-gray-500 dark:text-gray-100",
      checked:
        "text-$color-500 dark:text-$color-500",
      value:
        "text-$color-500 dark:text-$color-500",
      disabled: "text-gray-500 dark:text-gray-600"
    },
    label: {
      root: "pl-2 cursor-pointer text-gray-700 dark:text-gray-300",
      disabled: "text-gray-400 dark:text-gray-600"
    }
  }
};

export default config;
