let config = {
  props: {},
  nodes: {
    root: {
      root: "py-2 rounded"
    },
    listItem: {
      root: ""
    }
  }
};

export default config;

export let listItem = {
  props: {
    selected: false,
    dense: false,
    disabled: false
  },
  nodes: {
    root: {
      root: `
        focus:bg-gray-50 dark-focus:bg-gray-700 hover:bg-gray-transDark relative
        overflow-hidden transition-fast p-4 dense:p-1 dense:px-3 cursor-pointer text-gray-700
        dark:text-gray-100 flex items-center z-10
      `,
      selected: "bg-gray-200 dark:bg-primary-transLight",
      dense: "py-2",
      disabled: "text-gray-600"
    },
    item: {
      isMain: true,
      root: ""
    },
    icon: {
      root: 'pr-6 dense:pr-3'
    },
    subheading: {
      root: "text-gray-600 p-0 text-sm"
    }
  }
};
