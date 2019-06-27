<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { cubicIn } from 'svelte/easing';
  import Scrim from 'components/Scrim.svelte';

  export let right = false;
  export let persistent = false;
  export let elevation = true;
  export let value = true;

  $: left = !right;
</script>

<style>
.drawer {
  min-width: 216px;
}
.bordered {
  @apply border-gray-400 border-r border-l;
}
</style>

<div
  class="fixed h-screen top-0 mt-16 drawer"
  class:right-0={right}
  class:left-0={left}
  class:pointer-events-none={persistent}
  class:z-50={!persistent}
  class:z-20={persistent}
  class:md:visible={value || persistent}
  class:hidden={!value || !persistent}
>
  {#if !persistent}
    <Scrim on:click={() => value = false} />
  {/if}
  <nav
    role="navigation"
    class="h-screen bg-white absolute flex w-auto z-20 drawer pointer-events-auto overflow-y-auto"
    class:elevation-4={elevation}
    class:bordered={!elevation}
    transition:fly={{duration: 200, x: right ? 200 : -200, opacity: 1, easing: cubicIn }}
  >
    <div
      class="w-full"
    >
      <slot></slot>
    </div>
  </nav>
</div>


