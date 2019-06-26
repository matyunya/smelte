<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { quadOut, quadIn } from 'svelte/easing';
  import List from './List/List.svelte';
  import TextField from './TextField.svelte';

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
    width: 344px;
  }
</style>

{#if value}
  <div
    transition:fade={{duration: 400, easing: quadIn }}
    class={`
      flex fixed bottom-0 py-2 px-4 z-30 mb-4
      content-between mx-auto rounded
      items-center
      bg-gray-700 text-white snackbar elevation-2
    `}>
    <slot></slot>
  </div>
{/if}


