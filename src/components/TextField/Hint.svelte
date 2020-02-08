<script>
  import filterProps from "../../utils/filter-props.js";
  import { fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";

  export let error = false;
  export let hint = "";

  export let transitionProps = { y: -10, duration: 100, easing: quadOut };

  const props = filterProps([
    'error',
    'hint',
  ], $$props);
</script>

<div
  class={$$props.class}
  transition:fly={transitionProps}>
  {hint || ''}
  {error || ''}
</div>