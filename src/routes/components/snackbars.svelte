<script>
	import Snackbar from 'components/Snackbar';
	import Button from 'components/Button';
  
  let showSnackbar = false;
</script>

<h4 class="pb-8">Snackbars</h4>

<Snackbar bind:value={showSnackbar}>
  <div>Have a nice day.</div>
  <div slot="action">
    <Button text on:click={() => showSnackbar = false}>Dismiss</Button>
  </div>
</Snackbar>

<div class="py-2">
  <Button on:click={() => showSnackbar = true}>Show snackbar</Button>
</div>