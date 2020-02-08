export let config = {
  props: {
    hover: true,
    elevation: 1,
    hoverElevation: 8
  },
  nodes: {
    root: {
      isMain: true,
      root: "rounded inline-flex flex-col overflow-hidden transition",
      hover: "elevation-$elevation hover:elevation-$hoverElevation"
    }
  }
};

export default config;
