<script>
  export let segment = "";

  $: n = (segment || "").replace(new RegExp('-', 'g'), ' ');
  $: name = n.length ? n.charAt(0).toUpperCase() + n.slice(1) : "";

</script>

<svelte:head>
  <title>
    {name} | Smelte the UI framework. Svelte, Tailwind and Material Design rocking together.
  </title>
   <meta name="description" content="Smelte documentation. {name}">
</svelte:head>

{#if segment}
  <h4 class="capitalize pb-8">{name}</h4>
{/if}
<slot />