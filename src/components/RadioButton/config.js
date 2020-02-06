const config = {
  props: {
    value: "",
    label: "",
    selected: false,
    disabled: false,
    notSelected: p => p.selected !== p.value
  },
  nodes: {
    wrapper: {
      isMain: true,
      classes: {
        root: "inline-flex items-center mb-2 cursor-pointer z-10"
      }
    },
    radioButton: {
      classes: {
        root: "relative w-auto h-auto z-0"
      }
    },
    icon: {
      classes: {
        root: "text-$color-500 dark:text-$color-100",
        disabled: "text-gray-500 dark:text-gray-600",
        notSelected: "text-gray-500 dark:text-gray-100"
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

export const radioButtonGroup = {
  props: {
    items: [],
    selected: "",
    name: "",
    disabled: false,
    color: "primary"
  },
  nodes: {
    wrapper: {
      isMain: true,
      classes: {
        root: "flex flex-col mb-4 cursor-pointer"
      }
    }
  }
};
