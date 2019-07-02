<script>
  import { slide } from 'svelte/transition'
  export let width = 0;
  export let left = 0;
  export let color = 'primary-700';
</script>

<div
  class="absolute bottom-0 left-0 transition bg-{color}"
  class:hidden={left < 0}
  style="width: {width}px; left: {left}px; height: 2px;"
  transition:slide />