const config = {
  props: {
    value: "",
    label: "",
    selected: false,
    disabled: false
  },
  nodes: {
    wrapper: {
      isMain: true,
      root: "flex items-center mb-2 cursor-pointer z-10"
    },
    track: {
      root:
        "relative w-10 h-auto z-0 rounded-full overflow-visible flex items-center justify-center bg-gray-700",
      value: "bg-$color-200"
    },
    thumb: {
      root:
        "rounded-full p-2 w-5 h-5 absolute elevation-3 duration-100 bg-white left-0",
      value: "remove:left-0 bg-$color-400"
    }
  }
};

export default config;
