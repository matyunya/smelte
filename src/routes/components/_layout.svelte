<script>
  export let segment;
</script>

{#if segment}
  <h4 class="capitalize pb-8">{segment.replace('-', ' ')}</h4>
{/if}

<slot/>