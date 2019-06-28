<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { quadOut, quadIn } from 'svelte/easing';
  import List from 'components/List';
  import { Spacer } from 'components/Util';

  export let value = false;
  export let timeout = 4000;

	onMount(() => {
		if (!process.browser || !timeout) return;

		setTimeout(() => {
      value = false;
    }, timeout);
	});

  const inProps = { duration: 100, easing: quadIn };
  const outProps = { duration: 200, easing: quadOut, delay: 200 };
</script>

<style>
  .snackbar {
    min-width: 344px;
  }
</style>

{#if value}
  <div class="fixed bottom-0 left-0 w-full flex items-center justify-center">
    <div
      in:fade={inProps}
      out:fade={outProps}
      class={`
        flex absolute bottom-0 py-2 px-4 z-30 mb-4
        content-between mx-auto rounded
        items-center
        bg-gray-800 text-white snackbar elevation-2
      `}>
      <slot></slot>
      <Spacer />
      <slot name="action"></slot>
    </div>
  </div>
{/if}


