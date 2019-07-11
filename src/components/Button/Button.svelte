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

  // array of [{from: String|Regex, to: string}]
  export let replace = [];

  export let commonClasses = 'py-2 px-4 uppercase text-sm font-medium';
  export let basicClasses = 'text-white transition ripple-white';
  export let outlinedClasses = 'bg-transparent border border-solid';
  export let textClasses = 'bg-transparent border-none px-3 hover:bg-transparent';
  export let iconClasses = 'p-4 m-4 flex items-center';
  export let fabClasses = 'text-white px-4 hover:bg-transparent';
  export let smallClasses = 'p-1 h-4 w-4';
  export let disabledClasses = 'bg-gray-300 text-gray-500 elevation-none pointer-events-none hover:bg-gray-300 cursor-default';
  export let elevationClasses = 'hover:elevation-5 elevation-3';

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
        .add(commonClasses)
        .add(`${bg(normal)} hover:${bg(lighter)} ${basicClasses}`, basic)
        .add(elevationClasses, elevation)
        .add(`${border(lighter)} ${txt(normal)} ${ripple()} hover:${bg(50)} ${outlinedClasses}`, outlined)
        .add(`${ripple()} ${txt(lighter)} ${textClasses}`, text)
        .add(iconClasses, icon)
        .remove('py-2', icon)
        .add(`${ripple()} ${fabClasses}`, fab)
        .remove(`${txt(lighter)} ${ripple()}`, fab)
        .add(disabledClasses, disabled)
        .add(smallClasses, small)
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
  on:click={() => (value = !value)}>
  {#if icon}
    <Icon c={light ? txt() : 'white'} {small}>{icon}</Icon>
  {/if}
  <slot />
</button>
