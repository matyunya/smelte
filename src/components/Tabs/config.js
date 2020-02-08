let config = {
  props: {
    icon: false,
    id: "",
    selected: "",
    notSelectedColor: "white",
    notSelected: p => p.selected !== p.id
  },
  nodes: {
    root: {
      isMain: true,
      root: `
        transition-fast relative overflow-hidden text-center w-full
        h-full p-4 cursor-pointer flex mx-auto items-center text-sm
        hover:bg-$color-transLight hover:text-$color-900
      `,
      icon: "uppercase"
    },
    tab: {
      root:
        "flex flex-col items-center content-center mx-auto text-$color-$normal",
      notSelected: "text-$notSelectedColor-$normal remove:text-$color-$normal"
    }
  }
};

export default config;
