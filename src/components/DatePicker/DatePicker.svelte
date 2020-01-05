<script>
  import Card from "../Card/Card.svelte";
  import TextField from "../TextField";
  import Menu from "../Menu";
  import Button from "../Button";

  export let label = "Pick a date";
  export let open = false;
  export let defaultIcon = "date_range";

  function togglePicker() {
    console.log('clicked');
    open = !open;
  }

  $: console.log(open);

</script>

<Menu bind:open>
  <div slot="activator">
    <TextField
      {label}
      append={defaultIcon}
      on:click-append={togglePicker}
    />
  </div>
  <div slot="menu" class="absolute bottom-0 bg-white">
    {#if open}
      <Card class="p-6 w-full">test</Card>
    {/if}
  </div>
</Menu>