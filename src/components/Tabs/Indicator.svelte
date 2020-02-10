<script>
  import { slide } from "svelte/transition";
  import utils from "../../utils/classes.js";

  export let width = 0;
  export let left = 0;
</script>

<div
  class={$$props.class}
  class:hidden={left < 0}
  style="width: {width}px; left: {left}px; height: 2px;"
  transition:slide />
