<script>
  import Icon from "../Icon";
  import utils, { ClassBuilder } from "../../utils/classes.js";

  export let c = "";
  export let value = false;
  export let outlined = false;
  export let text = false;
  export let block = false;
  export let disabled = false;
  export let icon = null;
  export let small = false;
  export let light = false;
  export let dark = false;
  export let flat = false;
  export let color = "primary";

  export let remove = "";
  export let add = "";
  export let replace = {};

  let commonDefault = 'py-2 px-4 uppercase text-sm font-medium';
  let basicDefault = 'text-white transition ripple-white';
  let outlinedDefault = 'bg-transparent border border-solid';
  let textDefault = 'bg-transparent border-none px-3 hover:bg-transparent';
  let iconDefault = 'p-4 m-4 flex items-center';
  let fabDefault = 'px-4 hover:bg-transparent';
  let smallDefault = 'p-1 h-4 w-4';
  let disabledDefault = 'bg-gray-300 text-gray-500 elevation-none pointer-events-none hover:bg-gray-300 cursor-default';
  let elevationDefault = 'hover:elevation-5 elevation-3';

  const identity = i => i;

  export let commonClasses = identity;
  export let basicClasses = identity;
  export let outlinedClasses = identity;
  export let textClasses = identity;
  export let iconClasses = identity;
  export let fabClasses = identity;
  export let smallClasses = identity;
  export let disabledClasses = identity;
  export let elevationClasses = identity;

  const fab = text && icon;
  const basic = !outlined && !text && !fab;
  const elevation = (basic || icon) && !disabled && !flat && !text;
  
  let classes = "";
  let shade = 0;

  $: {
    shade = light ? 200 : 0;
    shade = dark ? -400 : shade;
  }
  $: normal = 500 - shade;
  $: lighter = 400 - shade;
  // normal - 500, 300, 900
  // lighter - 400, 100, 800

  const {
    bg,
    border,
    txt,
    ripple,
  } = utils(color);

  const cb = new ClassBuilder();

  $: {
      classes = cb
        .flush()
        .add(commonClasses(commonDefault))
        .add(`${bg(normal)} hover:${bg(lighter)} ${basicClasses(basicDefault)}`, basic)
        .add(elevationClasses(elevationDefault), elevation)
        .add(
          `${border(lighter)} ${txt(normal)} ${ripple()} hover:${bg(50)} ${outlinedClasses(outlinedDefault)}`,
          outlined)
        .add(`${ripple()} ${txt(lighter)} ${textClasses(textDefault)}`, text)
        .add(iconClasses(iconDefault), icon)
        .remove('py-2', icon)
        .add(`${ripple()} ${fabClasses(fabDefault)}`, fab)
        .remove(`${txt(lighter)}`, fab)
        .add(disabledClasses(disabledDefault), disabled)
        .add(smallClasses(smallDefault), small)
        .remove(remove)
        .replace(replace)
        .add(add)
        .get();
  }
</script>

<button
  class:border-solid={outlined}
  class:rounded-full={icon}
  class:w-full={block}
  class:rounded={basic || outlined || text}
  class="{classes} button"
  class:button={!icon}
  on:click
  {disabled}
  on:click={() => (value = !value)}>
  {#if icon}
    <Icon c={light ? txt() : 'white'} {small}>{icon}</Icon>
  {/if}
  <slot />
</button>
