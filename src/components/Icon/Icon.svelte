<script>
  let className = "";
  export {className as class};
  export let small = false;
  export let xs = false;
  export let reverse = false;
</script>

<style>
  .reverse {
    transform: rotate(180deg);
  }
</style>

<i
  aria-hidden="true"
  class="material-icons {className} transition"
  class:reverse
  class:text-base={small}
  class:absolute={small}
  class:text-xs={xs}>
  <slot />
</i>
