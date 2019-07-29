<script>
  export let color = "primary";
  export let noHover = false;
  import createRipple from "../Ripple/ripple.js";

  $: ripple = createRipple(color, true);
  $: hoverClass = `hover:bg-${color}-transDark`;
</script>

<style>
  .ripple {
    position: absolute !important;
  }
</style>

<span
  use:ripple
  class="z-40 p-2 rounded-full flex items-center justify-center top-0 left-0 {noHover ? '' : hoverClass}">
  <slot />
</span>
