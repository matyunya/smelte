<script>
  import Icon from '../Icon.svelte';

  export let icon = '';
  export let name = '';
  export let value = '';
  export let text = '';
  export let subheading = '';
  export let dense = false;
  export let navigation = false;
  export let to = '';

  $: selected = name === value;
</script>

<style>
  .list-item {
    @apply text-gray-700 cursor-pointer flex items-center;
  }

  .basic {
    &:hover {
      @apply bg-gray-300;
    }

    &.selected {
      @apply bg-gray-200;
    }
  }
  .navigation {
    @apply mx-3 rounded text-sm;
    &:hover {
      @apply bg-local;
    }

    &.selected {
      @apply bg-primary-50 text-primary-500;
    }
  }
</style>

<li
  class="list-item p-4"
  class:navigation
  class:selected
  class:basic={!navigation}
  class:ripple-white={navigation}
  class:ripple-gray={!navigation}
  class:py-2={dense}
  on:click={() => value = name}
>
  {#if icon}
    <Icon
      c="pr-6"
      small={dense}
      color={selected && navigation ? 'text-primary-500' : ''}
    >{icon}</Icon>
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