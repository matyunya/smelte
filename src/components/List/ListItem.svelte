<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "../Icon";

  export let icon = "";
  export let id = "";
  export let value = "";
  export let text = "";
  export let subheading = "";
  export let disabled = false;
  export let dense = false;
  export let navigation = false;
  export let to = "";
  export let selected = false;
  export let tabindex = null;
  export let basicClasses = "transition p-4 cursor-pointer text-gray-700 flex items-center z-10";

  const dispatch = createEventDispatcher();

  function change() {
    if (disabled) return;
    value = id;
    dispatch('change', id);
  }
</script>

<style>
  li.selected {
    @apply bg-gray-200;
  }

  li:focus {
    @apply bg-gray-50;
  }

  .navigation {
    @apply mx-3 rounded text-sm;
  }

  .navigation.selected {
    @apply bg-primary-50 text-primary-500;
  }
</style>

<li
  class={basicClasses}
  class:navigation
  class:selected
  class:hover:bg-gray-300={!navigation}
  class:ripple-white={navigation}
  class:ripple-gray={!navigation}
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
    <div>
      <slot>{text}</slot>
    </div>
    {#if subheading}
      <div class="text-gray-600 p-0 text-sm">{subheading}</div>
    {/if}
  </div>
</li>
