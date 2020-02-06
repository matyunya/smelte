export const config = {
  props: {
    value: "",
    label: "",
    checked: false,
    disabled: false,
    notChecked: p => !p.checked && !p.value
  },
  nodes: {
    wrapper: {
      isMain: true
    },
    checkbox: {
      classes: {
        root: "inline-flex items-center mb-2 cursor-pointer z-10"
      }
    },
    checkboxWrapper: {
      classes: {
        root: "relative w-auto h-auto z-0"
      }
    },
    icon: {
      classes: {
        root: "text-$color-500 dark:text-$color-100",
        disabled: "text-gray-500 dark:text-gray-600",
        notChecked: "text-gray-500 dark:text-gray-100"
      }
    },
    label: {
      classes: {
        root: "pl-2 cursor-pointer text-gray-700 dark:text-gray-300",
        disabled: "text-gray-500 dark:text-gray-600"
      }
    }
  }
};

export default config;
