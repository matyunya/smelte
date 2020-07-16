let config = {
  props: {},
  nodes: {
    root: {
      root: "elevation-3 relative text-sm overflow-x-auto dark:bg-dark-500"
    },
    header: {
      root: `
        capitalize transition-fast text-gray-600 text-xs hover:text-black
        dark-hover:text-white p-3 font-normal text-right
      `
    }
  }
};

export default config;

export let editable = {
  nodes: {
    root: {
      root: 'absolute left-0 top-0 z-10 bg-white dark:bg-dark-400 p-2 elevation-3 rounded'
    }
  }
};

export let pagination = {
  nodes: {
    root: {
      root: 'flex justify-between items-center text-gray-700 text-sm w-full h-16'
    },
    rowsSelect: {
      root: 'w-16 h-8 mb-0'
    },
    buttonDisabled: {
      root: 'text-gray-100 dark:text-gray-600 dark:bg-dark-700'
    },
    buttonIcon: {
      root: 'px-0 py-0 dense:px-0 dense:py-0'
    },
  }
};

export let header = {
  nodes: {
    root: {
      root: 'capitalize duration-100 text-gray-600 text-xs hover:text-black dark-hover:text-white p-3 font-normal text-right'
    },
    wrapper: {
      root: 'sort-wrapper flex items-center justify-end'
    },
    icon: {
      root: 'text-gray-400 dark:text-gray-100'
    }
  }
};
