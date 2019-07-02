<script>
  import Waypoint from 'svelte-waypoint';
  import { fade } from 'svelte/transition';

  export let alt = '';
  export let width = '';
  export let height = '';
  export let src = '';
  export let thumbnail = '';

  let loaded = false;
  let loading = false;

  function load() {
    const img = new Image();
    img.src= src;
    loading = true;

    img.onload = () => {
      loading = false;
      loaded = true;
    }
  }
</script>

<Waypoint once on:enter={load} style="height: {height}" offset="200">
  {#if loaded}
    <img in:fade {src} {alt} {width} {height}>
  {:else if thumbnail}
    <img src={thumbnail} {alt} {width} {height}>
  {:else if loading}
    <slot name="loading" />
  {/if}
</Waypoint>