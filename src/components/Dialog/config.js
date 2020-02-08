let config = {
  props: {
    color: "default",
    small: false,
    xs: false,
    reverse: false,
    tip: false
  },
  nodes: {
    wrapper: {
      root: "fixed w-full h-full top-0 left-0 z-30"
    },
    container: {
      root: "h-full w-full absolute flex items-center justify-center"
    },
    dialog: {
      isMain: true,
      root:
        "items-center z-50 rounded bg-white dark:bg-dark-400 p-4 elevation-4"
    },
    title: {
      root: "text-lg font-bold pb-4"
    },
    actions: {
      root: "flex w-full justify-end pt-4"
    }
  }
};

export default config;
