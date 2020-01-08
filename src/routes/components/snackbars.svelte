<script>
  import { Snackbar, Button } from "smelte";
  import Code from "docs/Code.svelte";
  import snackbars from "examples/snackbars.txt";

  let showSnackbar = false;
  let showSnackbarTop = false;
  let showSnackbarBottomLeft = false;
</script>

<Snackbar bind:value={showSnackbar}>
  <div>Have a nice day.</div>
  <div slot="action">
    <Button text on:click={() => (showSnackbar = false)}>Dismiss</Button>
  </div>
</Snackbar>

<Snackbar color="alert" timeout={0} top bind:value={showSnackbarTop}>
  <div>Have a nice day.</div>
</Snackbar>
<Snackbar
  noAction
  color="error"
  timeout={2000}
  left
  bind:value={showSnackbarBottomLeft}>
  <div>Something happened!</div>
  <div slot="action" />
</Snackbar>

<div class="py-2">
  <Button
    on:click={() => (showSnackbar = true)}
  >Show snackbar</Button>
</div>
<div class="py-2">
  <Button
    color="secondary"
    on:click={() => (showSnackbarTop = true)}
  >Show snackbar on top</Button>
</div>
<div class="py-2">
  <Button
    color="alert"
    on:click={() => (showSnackbarBottomLeft = true)}>Show snackbar on the bottom left</Button>
</div>

<Code code={snackbars} />
