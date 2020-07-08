export let config = {
  props: {
    hover: true,
    elevation: false,
    right: false,
    borderLeft: p => !p.elevation && p.persistent && p.right,
    borderRight: p => !p.elevation && p.persistent && !p.right,
    persistent: false
  },
  nodes: {
    root: {
      root: "fixed top-0 left-0 w-full overflow-hidden h-full z-10 py-12",
      borderLeft: "border-gray-600 border-l",
      borderRight: "border-gray-600 border-r",
      elevation: "elevation-4",
      right: "right-0 remove:left-0",
      persistent: "pointer-events-none z-20 mt-0"
    },
    nav: {
      root:
        "h-full w-full py-10 bg-white dark:bg-gray-900 dark:text-gray-200 absolute flex w-full z-20 pointer-events-auto overflow-y-auto"
    }
  }
};

export default config;
