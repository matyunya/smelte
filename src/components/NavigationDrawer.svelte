<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { cubicIn } from 'svelte/easing';
  import Scrim from './Scrim.svelte';

  export let right = false;
  export let persistent = false;
  export let elevation = true;

  $: left = !right;

  export let value;
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
    class="fixed w-full h-screen top-0 left-0"
    class:pointer-events-none={persistent}
  >
    {#if !persistent}
      <Scrim on:click={() => value = false} />
    {/if}
    <div
      class="h-screen absolute flex w-auto z-50 drawer pointer-events-auto"
      class:right-0={right}
      class:left-0={left}
    >
      <div
        transition:fly={{duration: 200, x: right ? 200 : -200, opacity: 1, easing: cubicIn }}
        class="bg-white w-full"
        class:elevation-4={elevation}
        class:bordered={!elevation}>
        <slot navigation></slot>
      </div>
    </div>
  </div>
{/if}


