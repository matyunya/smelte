<script>
  import { scale, fade } from "svelte/transition";
  export let show = false;

  const defaultClasses = "tooltip whitespace-no-wrap text-xs absolute mt-2 bg-gray-600 text-gray-50 rounded md:px-2 md:py-2 py-4 px-3 z-30";

  export let classes = i => i;

  let timeout = null;

  function showTooltip() {
    show = true;

    timeout = setTimeout(() => {
      show = false;
    }, 1500);
  }

  function hideTooltip() {
    show = false;
    clearTimeout(timeout);
  }
</script>

<style>
.tooltip {
  left: 50%;
  transform: translateX(-50%);
}
</style>

<div class="relative inline-block">
  <div
    on:mouseover={showTooltip}
    on:mouseout={hideTooltip}
  >
    <slot name="activator" />
  </div>

  {#if show}
    <div
      in:scale={{ duration: 150 }}
      out:scale={{ duration: 75 }}
      class={classes(defaultClasses)}
    >
      <slot />
    </div>
  {/if}
</div>