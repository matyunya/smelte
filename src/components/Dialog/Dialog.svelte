<script>
  import { scale } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { quadOut, quadIn } from 'svelte/easing';
  import { Scrim } from 'components/Util';

  export let value;

  const transitionProps = { duration: 300, easing: quadIn, delay: 150 };
</script>

{#if value}
  <div class="fixed w-full h-screen top-0 left-0 z-30">
    <Scrim on:click={() => value = false} />
    <div class="h-screen w-full absolute flex items-center justify-center">
      <div
        transition:scale={transitionProps}
        class="items-center z-50 rounded bg-white p-4 elevation-4">
        <div class="text-lg font-bold pb-4">
          <slot name="title"></slot>
        </div>
        <slot></slot>
        <div class="flex w-full justify-end pt-4">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
{/if}


