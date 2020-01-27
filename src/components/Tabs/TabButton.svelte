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

  const defaultClasses = "transition-fast relative overflow-hidden text-center w-full h-full p-4 cursor-pointer flex mx-auto items-center text-sm h-full";

  const { txt, bg } = utils(color);
  const notSelected = utils(notSelectedColor);

  $: textColor = selected === id ? txt() : notSelected.txt();
</script>

{#if to}
  <a
    use:ripple
    href={to}
    class="{className} {defaultClasses} {textColor} dark:text-gray-600 hover:bg-{color}-transLight hover:{txt(900)}"
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
    class="{className} {defaultClasses} {textColor} focused && error hover:bg-{color}-transLight hover:{txt()}"
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
