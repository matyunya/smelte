let config = {
  props: {
    outlined: false,
    notOutlined: p => !p.outlined
  },
  nodes: {
    root: {
      root: "cursor-pointer relative pb-4"
    },
    options: {
      root:
        "absolute left-0 bg-white rounded elevation-3 w-full z-20 dark:bg-dark-500",
      notOutlined: "rounded-t-none"
    }
  }
};

export default config;
