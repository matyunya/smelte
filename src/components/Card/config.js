export let config = {
  props: {
    hover: true,
    elevation: 1,
    hoverElevation: 8
  },
  nodes: {
    root: {
      isMain: true,
      root: "rounded inline-flex flex-col overflow-hidden duration-200 ease-in",
      hover: "elevation-$elevation hover:elevation-$hoverElevation"
    }
  }
};

export default config;
