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
  export const to = "";
  export let selected = false;
  export let tabindex = null;
  export const item = null;
  export const items = [];
  export const level = null;
  export let basicClasses = "hover:bg-gray-transDark relative overflow-hidden transition p-4 cursor-pointer text-gray-700 flex items-center z-10";
  export let itemClasses = "";
  export let selectedClasses = "bg-gray-200 hover:bg-primary-transDark";

  const ripple = createRipple();
  const dispatch = createEventDispatcher();

  function change() {
    if (disabled) return;
    value = id;
    dispatch('change', id);
  }
</script>

<style>
  li:focus {
    @apply bg-gray-50;
  }
</style>

<li
  use:ripple
  class="{basicClasses} {selected ? selectedClasses : ''}"
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
      color={selected && navigation ? 'text-primary-500' : ''}>
      {icon}
    </Icon>
  {/if}

  <div class="flex flex-col p-0">
    <div class={itemClasses}>
      <slot>{text}</slot>
    </div>
    {#if subheading}
      <div class="text-gray-600 p-0 text-sm">{subheading}</div>
    {/if}
  </div>
</li>
