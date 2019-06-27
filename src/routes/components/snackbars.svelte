<script>
	import Snackbar from 'components/Snackbar';
	import Button from 'components/Button';
  
  let showSnackbar = false;
</script>

<h5 class="mt-4 mb-2" id="snackbars">Snackbars</h5>

<Snackbar bind:value={showSnackbar}>
  <div>Have a nice day.</div>
  <div slot="action">
    <Button text on:click={() => showSnackbar = false}>Dismiss</Button>
  </div>
</Snackbar>

<div class="py-2">
  <Button on:click={() => showSnackbar = true}>Show snackbar</Button>
</div>