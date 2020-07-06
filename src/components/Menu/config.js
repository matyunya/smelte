let config = {
  props: {
    color: "default",
    small: false,
    xs: false,
    reverse: false,
    tip: false
  },
  nodes: {
    root: {
      root: "cursor-pointer relative"
    },
    list: {
      root: ""
    },
    listWrapper: {
      root:
        "absolute w-auto top-16 bg-white left-0 bg-white rounded elevation-3 z-20 dark:bg-dark-500"
    }
  }
};

export default config;
