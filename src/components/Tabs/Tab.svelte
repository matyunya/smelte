<script>
  export let selected = undefined;
  export let id = null;
</script>

{#if selected === id}
  <slot />
{/if}
