<script>
  import { createEventDispatcher } from 'svelte';
  import { scale } from 'svelte/transition';

  import Icon from 'components/Icon';

  export let removable;
  export let icon;
  export let outlined = false;
  export let selected = false;
  export let selectable = true;

  let value = true;

  $: hoverClass = selected ? 'hover:bg-primary-300' : 'hover:bg-gray-400';

  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
    value = false;
  }

  function select() {
    if (!selectable) return;

    selected = true;
  }

</script>

<style>
.p-1\/2 {
  padding: 0.125rem;
}

.outlined {
  @apply bg-transparent border border-gray-400 border-solid;

  &:hover {
    @apply bg-gray-50;
  }
}

.selected {
  @apply border-primary-500 text-primary-500 bg-primary-100;

  &:hover {
    @apply bg-primary-50;
  }
}
</style>

{#if value}
  <span
    class="mx-1 inline-block"
    out:scale={{ duration: 100 }}>
    <button
      class="flex items-center rounded-full bg-gray-300 px-2 py-1"
      on:click
      class:outlined
      class:selected
      class:ripple-primary={selectable}
      on:click={select}
    >
      {#if icon}
        <Icon
          small
          color={selected ? 'text-primary-400' : 'text-gray-600'}
          >{icon}</Icon>
      {/if}
      <span class="px-2 text-sm">
        <slot />
      </span>
      {#if removable}
        <span
          class="rounded-full p-1/2 inline-flex items-center cursor-pointer {hoverClass}"
          class:bg-gray-500={!selected}
          class:bg-primary-400={selected}
          on:click|stopPropagation={close}>
          <Icon
            color="text-white"
            xs
          >clear</Icon>
        </span>
      {/if}
    </button>
  </span>
{/if}