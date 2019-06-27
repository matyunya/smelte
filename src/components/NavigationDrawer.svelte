<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { cubicIn } from 'svelte/easing';
  import Scrim from 'components/Scrim.svelte';

  export let right = false;
  export let persistent = false;
  export let elevation = true;

  $: left = !right;

  export let value = true;
</script>

<style>
.drawer {
  min-width: 216px;
}
.bordered {
  @apply border-gray-400 border-r border-l border-solid;
}
</style>

{#if value || persistent}
  <div
    class="fixed h-screen top-0 left-0 mt-16 z-10 drawer"
    class:pointer-events-none={persistent}
  >
    {#if !persistent}
      <Scrim on:click={() => value = false} />
    {/if}
    <nav
      role="navigation"
      class="h-screen bg-white absolute flex w-auto z-10 drawer pointer-events-auto overflow-y-auto"
      class:right-0={right}
      class:left-0={left}
      class:elevation-4={elevation}
      class:bordered={!elevation}
    >
      <div
        transition:fly={{duration: 200, x: right ? 200 : -200, opacity: 1, easing: cubicIn }}
        class="w-full"
      >
        <slot></slot>
      </div>
    </nav>
  </div>
{/if}


