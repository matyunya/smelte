export default {
  props: {
    navigation: false
  },
  nodes: {
    root: {
      root: "y-0 h-full items-center relative mx-auto z-20 flex",
      navigation: "hidden md:flex w-full max-w-2xl remove:flex"
    },
    indicator: {
      root: "absolute bottom-0 left-0 duration-200 ease-in bg-$color-700"
    }
  }
};

export let tabButton = {
  props: {
    icon: false,
    id: "",
    selected: "",
    notSelectedColor: "white",
    notSelected: p => p.selected !== p.id
  },
  nodes: {
    root: {
      root: `duration-100 relative overflow-hidden text-center w-full
        h-full p-4 cursor-pointer flex mx-auto items-center text-sm
        hover:bg-$color-transLight hover:text-$color-900
      `,
      icon: "uppercase"
    },
    tab: {
      root: "flex flex-col items-center content-center mx-auto text-$color-$normal",
      notSelected: "text-$notSelectedColor-$normal"
    },
    icon: {
      root: "mb-1 text-$color-$normal",
      notSelected: "text-$notSelectedColor-$normal"
    }
  }
};
