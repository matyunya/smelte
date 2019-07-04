<script>
  import Chip from "components/Chip";
  import Snackbar from "components/Snackbar";
  import Button from "components/Button";
  import Code from "components/Code";

  import chip from "examples/chip.txt";
  import chipOutlined from "examples/chip-outlined.txt";

  let closed = false;
  let clicked = false;
</script>

<h5 class="mt-6 mb-2">Basic</h5>
<Chip
  icon="face"
  removable
  selectable
  on:close={() => (closed = true)}
  on:click={() => (clicked = true)}>
  test
</Chip>

<div class="my-4">
  <Code code={chip} />
</div>

<h5 class="mt-6 mb-2">Outlined</h5>
<Chip
  icon="pan_tool"
  outlined
  removable
  selectable
  on:close={() => (closed = true)}
  on:click={() => (clicked = true)}>
  Cats
</Chip>
<Chip
  icon="print"
  outlined
  removable
  selectable
  on:close={() => (closed = true)}
  on:click={() => (clicked = true)}>
  Dogs
</Chip>
<Chip
  icon="pageview"
  outlined
  removable
  selectable
  on:close={() => (closed = true)}
  on:click={() => (clicked = true)}>
  Plants
</Chip>
<Chip
  icon="pets"
  outlined
  removable
  selectable
  on:close={() => (closed = true)}
  on:click={() => (clicked = true)}>
  Parents
</Chip>

<div class="my-4">
  <Code lang="javascript" code={chipOutlined} />
</div>

<Snackbar bind:value={closed}>
  Chip was removed successfully.
  <div slot="action">
    <Button text on:click={() => (closed = false)}>Dismiss</Button>
  </div>
</Snackbar>

<Snackbar bind:value={clicked}>
  Chip was clicked successfully.
  <div slot="action">
    <Button text on:click={() => (clicked = false)}>Dismiss</Button>
  </div>
</Snackbar>
