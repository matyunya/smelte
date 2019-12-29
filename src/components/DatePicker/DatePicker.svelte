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
</script>

<svelte:window on:click={() => open = false} />

<Menu bind:open>
  <div slot="activator">
    <TextField
      {label}
      append={defaultIcon}
      on:click={togglePicker}
     />
  </div>
  <div slot="menu">
    <Card>
      <slot name="header">
        <div class="bg-primary-700 text-white">
          current date
        </div>
      </slot>
      <slot>
        test
      </slot>
    </Card>
  </div>
</Menu>