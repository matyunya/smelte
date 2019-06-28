<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  import Icon from 'components/Icon';

  export let removable;
  export let icon;

  let value = true;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
    value = false;
  }

</script>

<style>
.p-1\/2 {
  padding: 0.125rem;
}
</style>

{#if value}
  <div
    out:fade={{ duration: 100 }}>
    <button class="rounded-full bg-gray-300 px-2 py-1" on:click>
      {#if icon}
        <Icon small>{icon}</Icon>
      {/if}
      <span class="px-2">
        <slot></slot>
      </span>
      {#if removable}
        <span
          class="rounded-full bg-gray-700 p-1/2 hover:bg-gray-500 inline-flex items-center cursor-pointer"
          on:click|stopPropagation={close}>
          <Icon color="text-gray-300" xs>close</Icon>
        </span>
      {/if}
    </button>
  </div>
{/if}