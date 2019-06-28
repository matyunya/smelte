<script>
	import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  export let app = false;
  export let progress = 0;

	let visible = false;
  let growing = true;

	onMount(() => {
    if (progress !== 0) return;

		function next() {
			visible = true;
			if (growing) {
        progress += 10;
      } else {
        progress -= 10;
      }

      if (progress < -150 && !growing) {
        growing = true;
      }

      if (progress > 150 && growing) {
        growing = false;
      }

      setTimeout(next, 100);
		}

		setTimeout(next, 100);
	});
</script>

<style>
  /* kudos https://codepen.io/shalimano/pen/wBmNGJ */
  .inc {
    animation: increase 2s ease-in-out infinite;
  }
  .dec {
    animation: decrease 2s 0.9s ease-in-out infinite;
  }

  @keyframes increase {
    from { left: -5%; width: 5%; }
    to { left: 130%; width: 150%;}
  }
  @keyframes decrease {
    from { left: -85%; width: 90%; }
    to { left: 110%; width: 10%;}
  }
</style>

{#if visible}
	<div
    class:fixed={app}
    class="top-0 left-0 w-full h-1 z-50 bg-primary-100"
    transition:fly
  >
		<div class="bg-primary-500 h-full transition absolute inc" />
		<div class="bg-primary-500 h-full transition absolute dec" />
	</div>
{/if}