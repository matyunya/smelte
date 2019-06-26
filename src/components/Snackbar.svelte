<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { quadOut, quadIn } from 'svelte/easing';
  import List from './List/List.svelte';
  import Spacer from './Spacer.svelte';

  export let value = false;
  export let timeout = 4000;

	onMount(() => {
		if (!process.browser || timeout > 0) return;

		setTimeout(() => {
      value = false;
    }, timeout);
	});
</script>

<style>
  .snackbar {
    min-width: 344px;
  }
</style>

{#if value}
  <div
    in:fade={{duration: 100, easing: quadIn }}
    out:fade={{duration: 400, easing: quadOut }}
    class={`
      flex fixed bottom-0 py-2 px-4 z-30 mb-4
      content-between mx-auto rounded
      items-center
      bg-gray-800 text-white snackbar elevation-2
    `}>
    <slot></slot>
    <Spacer />
    <slot name="action"></slot>
  </div>
{/if}


