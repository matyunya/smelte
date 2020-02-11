export let config = {
  props: {
    hover: true,
    elevation: 1,
    hoverElevation: 8
  },
  nodes: {
    root: {
      root: "rounded inline-flex flex-col overflow-hidden duration-200 ease-in",
      hover: "elevation-$elevation hover:elevation-$hoverElevation"
    }
  }
};

export default config;

export let title = {
  props: {
    hover: true,
    elevation: 1,
    hoverElevation: 8
  },
  nodes: {
    root: {
      root: "flex px-4 py-2 items-center",
      hover: "elevation-$elevation hover:elevation-$hoverElevation"
    }
  }
};
