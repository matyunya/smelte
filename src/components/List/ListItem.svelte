<script>
  import { createEventDispatcher } from 'svelte';
  import Icon from 'components/Icon';

  export let icon = '';
  export let id = '';
  export let value = '';
  export let text = '';
  export let subheading = '';
  export let dense = false;
  export let navigation = false;
  export let to = '';
  export let selected = false;

  const dispatch = createEventDispatcher();
</script>

<style>
  .list-item {
    transition: background-color .2s ease-out;
  }

  .basic {
    &:hover {
      @apply bg-gray-300;
      transition: background-color .2s ease-in;
    }

    &.selected {
      @apply bg-gray-200;
      transition: background-color .2s ease-in;
    }
  }
  .navigation {
    @apply mx-3 rounded text-sm;
    &:hover {
      @apply bg-local;
    }

    &.selected {
      @apply bg-primary-50 text-primary-500;
      transition: background-color .2s ease-in;
    }
  }
</style>

<li
  class="list-item p-4 cursor-pointer text-gray-700 flex items-center z-10"
  class:navigation
  class:selected
  class:basic={!navigation}
  class:ripple-white={navigation}
  class:ripple-gray={!navigation}
  class:py-2={dense}
  on:click={() => {
    value = id;
    console.log('called');
    dispatch('change', id);
  }}
  on:click
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