<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  export let app = false;
  export let progress = 0;
  export let initialized = false;

  onMount(() => {
    if (!app) return;

    setTimeout(() => {
      initialized = true;
    }, 200);
  });

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

<style>
  /* kudos https://codepen.io/shalimano/pen/wBmNGJ */
  :global(.inc) {
    animation: increase 2s ease-in-out infinite;
  }
  :global(.dec) {
    animation: decrease 2s 0.9s ease-in-out infinite;
  }

  @keyframes increase {
    from {
      left: -5%;
      width: 5%;
    }
    to {
      left: 130%;
      width: 150%;
    }
  }

  @keyframes decrease {
    from {
      left: -90%;
      width: 90%;
    }
    to {
      left: 110%;
      width: 10%;
    }
  }
</style>

<div
  class={smelte.root.class}
  transition:slide={{ duration: 300 }}
>
  <div
    class={smelte.trackInc.class}
    style={progress ? `width: ${progress}%` : ""} />
  <div class={smelte.trackDec.class} />
</div>
