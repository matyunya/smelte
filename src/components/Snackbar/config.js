export let config = {
  props: {
    top: false,
    bottom: true,
    right: false,
    left: false,
    noAction: true,
    hasAction: p => !p.noAction,
    text: "white"
  },
  nodes: {
    container: {
      root: "fixed w-full h-full top-0 left-0 z-30 pointer-events-none"
    },
    wrapper: {
      root: `
        text-$text-$normal fixed w-full h-full flex
        items-center justify-center pointer-events-none
      `
    },
    snackbar: {
      root: `
        pointer-events-auto flex absolute py-2 px-4 z-30 mb-4 bg-$color-800
        content-between mx-auto rounded items-center elevation-2 h-12
      `,
      right: "right-0 mr-2",
      top: "top-0 mr-2",
      left: "left-0 mr-2",
      bottom: "bottom-0",
      hasAction: "snackbar"
    }
  }
};

export default config;
