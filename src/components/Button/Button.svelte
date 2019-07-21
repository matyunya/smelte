<script>
  import Icon from "../Icon";
  import utils, { ClassBuilder } from "../../utils/classes.js";

  let className = "";
  export {className as class};
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
  export let iconClass = "";
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

  export let commonClasses = commonDefault;
  export let basicClasses = basicDefault;
  export let outlinedClasses = outlinedDefault;
  export let textClasses = textDefault;
  export let iconClasses = iconDefault;
  export let fabClasses = fabDefault;
  export let smallClasses = smallDefault;
  export let disabledClasses = disabledDefault;
  export let elevationClasses = elevationDefault;

  const fab = text && icon;
  const basic = !outlined && !text && !fab;
  const elevation = (basic || icon) && !disabled && !flat && !text;
  
  let classes = "";
  let iClasses = "";
  let shade = 0;

  $: {
    shade = light ? 200 : 0;
    shade = dark ? -400 : shade;
  }
  $: normal = 500 - shade;
  $: lighter = 400 - shade;

  const {
    bg,
    border,
    txt,
    ripple,
  } = utils(color);

  const cb = new ClassBuilder(commonClasses, commonDefault);
  let iconCb;

  if (icon) {
    iconCb = new ClassBuilder(iconClass);
  }

  $: {
      classes = cb
        .flush()
        .add(basicClasses, basic, basicDefault)
        .add(`${bg(normal)} hover:${bg(lighter)}`, basic)
        .add(elevationClasses, elevation, elevationDefault)
        .add(outlinedClasses, outlined, outlinedDefault)
        .add(
          `${border(lighter)} ${txt(normal)} ${ripple()} hover:${bg(50)}`,
          outlined)
        .add(`${ripple()} ${txt(lighter)}`, text)
        .add(textClasses, text, textDefault)
        .add(iconClasses, icon, iconDefault)
        .remove('py-2', icon)
        .add(ripple(), fab)
        .add(fabClasses, fab, fabDefault)
        .remove(txt(lighter), fab)
        .add(disabledClasses, disabled, disabledDefault)
        .add(smallClasses, small, smallDefault)
        .add('flex items-center justify-center', small && icon)
        .remove(remove)
        .replace(replace)
        .add(add)
        .get();
  }

  $: {
    if (iconCb) {
      iClasses = iconCb.flush().add(txt(), fab && !iconClass).get();
    }
  }
</script>

<button
  class:border-solid={outlined}
  class:rounded-full={icon}
  class:w-full={block}
  class:rounded={basic || outlined || text}
  class="{classes} {className} button"
  class:button={!icon}
  on:click
  {disabled}
  on:click={() => (value = !value)}>
  {#if icon}
    <Icon class={iClasses} {small}>{icon}</Icon>
  {/if}
  <slot />
</button>
