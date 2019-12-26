<script>
  import { Button, Icon } from "smelte";
  import Code from "docs/Code.svelte";

  import buttons from "examples/buttons.txt";
</script>

<h6 class="mb-3 mt-6">Basic</h6>
<div class="py-2">
  <Button>Button</Button>
</div>

<h6 class="mb-3 mt-6">Light</h6>
<div class="py-2">
  <Button
    light
  >Button</Button>
</div>

<h6 class="mb-3 mt-6">Dark</h6>
<div class="py-2">
  <Button dark>Button</Button>
</div>

<h6 class="mb-3 mt-6">Block</h6>
<div class="py-2">
  <Button color="alert" dark block>Button</Button>
</div>

<h6 class="mb-3 mt-6">Outlined</h6>
<div class="py-2">
  <Button color="secondary" light block outlined>Button</Button>
</div>

<h6 class="mb-3 mt-6">As anchor</h6>
<div class="py-2">
  <Button
    color="secondary"
    light
    block
    outlined
  >Button</Button>
</div>

<h6 class="mb-3 mt-6">Text</h6>
<div class="py-2">
  <Button text>Button</Button>
</div>

<h6 class="mb-3 mt-6">Disabled</h6>
<div class="py-2">
  <Button block disabled>Button</Button>
</div>

<h6 class="mb-3 mt-6">Fab</h6>
<div class="py-2">
  <Button color="alert" icon="change_history" />
</div>

<h6 class="mb-3 mt-6">Fab flat</h6>
<div class="py-2">
  <Button color="error" icon="change_history" text light flat />
</div>

<Code code={buttons} />