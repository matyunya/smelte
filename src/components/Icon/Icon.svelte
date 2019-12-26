<script>
  let className = "";
  export {className as class};
  export let small = false;
  export let xs = false;
  export let reverse = false;
  export let tip = false;
  export let color = "";
</script>

<style>
  .reverse {
    transform: rotate(180deg);
  }

  .tip {
    transform: rotate(90deg);
  }
</style>

<i
  aria-hidden="true"
  class="material-icons text-xl {className} transition"
  class:reverse
  class:tip
  class:text-base={small}
  class:text-xs={xs}
  style="color: {color}">
  <slot />
</i>
