<script>
  import Icon from "components/Icon";
  import utils from "utils/classes.js";

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

  export let basicClasses = 'text-white transition';
  export let outlinedClasses = 'bg-transparent border border-solid';
  export let textClasses = 'bg-transparent border-none ripple-primary px-3 hover:bg-transparent';
  export let iconClasses = 'p-4 m-4 flex items-center';
  export let fabClasses = 'text-white px-4 hover:bg-transparent';
  export let smallClasses = 'p-2';
  export let disabledClasses = `
    bg-gray-300 text-gray-500 elevation-none pointer-events-none hover:bg-gray-300 cursor-default
  `;
  let elevationClasses = 'hover:elevation-5 elevation-3';

  const fab = text && icon;
  const basic = !outlined && !text && !fab;
  const elevation = (basic || icon) && !disabled && !flat;
  
  let classes = "";
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

  $: {
    if (basic) {
      classes += `${bg(normal)} hover:${bg(lighter)} ${basicClasses}`;
    }

    if (elevation) {
      classes += ` ${elevationClasses}`;
    }

    if (outlined) {
      classes += ` ${border(lighter)} ${txt(normal)} ${ripple(normal)} hover:${bg(50)} ${outlinedClasses}`;
    }

    if (text) {
      classes += ` ${ripple(normal)} ${txt(lighter)} ${textClasses}`;
    }

    if (icon) {
      classes += ` ${iconClasses}`;
    }

    if (fab) {
      classes += ` ${fabClasses}`;
    }

    if (small) {
      classes += ` ${smallClasses}`;
    }

    if (disabled) {
      classes += ` ${disabledClasses}`;
    }
  }
</script>

<button
  class:border-solid={outlined}
  class:rounded-full={icon}
  class:w-full={block}
  class:rounded={basic || outlined || text}
  class:ripple-white={basic || fab}
  class="{classes} button"
  class:button={!icon}
  on:click
  on:click={() => (value = !value)}>
  {#if icon}
    <Icon color={light ? `text-${color}-500` : 'white'} {small}>{icon}</Icon>
  {/if}
  <slot />
</button>
