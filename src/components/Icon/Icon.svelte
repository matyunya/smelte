<script>
  export let c = "";
  export let color = "text-gray-700";
  export let small = false;
  export let xs = false;
  export let reverse = false;

  let colorClass;
</script>

<style>
  .reverse {
    transform: rotate(180deg);
  }
</style>

<i
  aria-hidden="true"
  class="material-icons {c} transition"
  class:reverse
  class:text-base={small}
  class:text-xs={xs}>
  <slot />
</i>
