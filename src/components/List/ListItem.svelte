<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "../Icon";
  import createRipple from "../Ripple/ripple.js";

  export let icon = "";
  export let id = "";
  export let value = "";
  export let text = "";
  export let subheading = "";
  export let disabled = false;
  export let dense = false;
  export let navigation = false;
  export let selected = false;
  export let tabindex = null;
  export let wrapperClasses = "hover:bg-gray-transDark relative overflow-hidden transition p-4 cursor-pointer text-gray-700 dark:text-gray-100 flex items-center z-10";
  export let selectedClasses = "bg-gray-200 dark:bg-gray-700";

  let className = "";
  export {className as class};

  export let to = "";
  export const item = null;
  export const items = [];
  export const level = null;

  const ripple = createRipple();
  const dispatch = createEventDispatcher();

  function change() {
    if (disabled) return;
    value = id;
    dispatch('change', id, to);
  }
</script>

<style>
  li:focus {
    @apply bg-gray-50;
  }

  :global(.mode-dark) li:focus {
    @apply bg-gray-700;
  }
</style>

<li
  use:ripple
  class="{wrapperClasses} {selected ? selectedClasses : ""}"
  class:text-sm={navigation}
  class:py-2={dense}
  class:text-gray-600={disabled}
  {tabindex}
  on:keypress={change}
  on:click={change}
  on:click>
  {#if icon}
    <Icon
      class="pr-6"
      small={dense}
    >
      {icon}
    </Icon>
  {/if}

  <div class="flex flex-col p-0">
    <div class={className}>
      <slot>{text}</slot>
    </div>
    {#if subheading}
      <div class="text-gray-600 p-0 text-sm">{subheading}</div>
    {/if}
  </div>
</li>
