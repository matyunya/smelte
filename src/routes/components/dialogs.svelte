<script>
  import Button from "components/Button";
  import Dialog from "components/Dialog";
  import Code from "docs/Code.svelte";
  import dialog from "examples/dialog.txt";

  let showDialog = false;
  let showDialog2 = false;
</script>

<Dialog bind:value={showDialog}>
  <h5 slot="title">What do you think?</h5>
  <div class="text-gray-700 dark:text-gray-100">I'm not sure about today's weather.</div>
  <div slot="actions">
    <Button text on:click={() => (showDialog = false)}>Disagree</Button>
    <Button text on:click={() => (showDialog = false)}>Agree</Button>
  </div>
</Dialog>

<Dialog persistent bind:value={showDialog2}>
  <h5 slot="title">Do you think you can close me by clicking outside?</h5>
  <div class="text-gray-700 dark:text-gray-100">Doubt it.</div>
  <div slot="actions">
    <Button text on:click={() => (showDialog2 = false)}>Yes</Button>
    <Button text on:click={() => (showDialog2 = false)}>No</Button>
  </div>
</Dialog>

<div class="py-2">
  <Button on:click={() => (showDialog = true)}>Show dialog</Button>
</div>

<div class="py-2">
  <Button color="secondary" on:click={() => (showDialog2 = true)}>Show persistent dialog</Button>
</div>

<Code code={dialog} />
