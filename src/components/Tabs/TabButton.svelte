<script>
  import Icon from "../Icon";
  import createRipple from "../Ripple/ripple.js";
  import utils, { ClassBuilder } from "../../utils/classes.js";

  export let icon = "";
  export let id = "";
  export let text = "";
  export let to = "";
  export let selected = "";
  export let color = "primary";
  export let notSelectedColor = "white";

  let className = "";
  export {className as class};

  const ripple = createRipple(color);

  const defaultClasses =
    "relative overflow-hidden text-center w-40 p-4 cursor-pointer flex mx-auto items-center opacity-75 text-sm h-full";


  const { txt } = utils(color);

  $: textColor = selected === id ? txt() : "text-" + notSelectedColor;
</script>

{#if to}
  <a
    use:ripple
    href={to}
    class="{className} {defaultClasses} {textColor}"
    on:click
    class:uppercase={icon}>
    <div class="flex flex-col items-center content-center mx-auto">
      {#if icon}
        <Icon class="mb-1" color={textColor}>{icon}</Icon>
      {/if}

      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </a>
{:else}
  <li
    use:ripple
    class="{className} {defaultClasses} {textColor}"
    on:click={() => selected = id }
    on:click
    class:uppercase={icon}>
    <div class="flex flex-col items-center content-center mx-auto">
      {#if icon}
        <Icon class="mb-1" color={textColor}>{icon}</Icon>
      {/if}

      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </li>
{/if}
