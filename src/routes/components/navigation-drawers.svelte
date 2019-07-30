<script>
  import { Checkbox } from "smelte";
  import Code from "components/Code";

  import { right, elevation, persistent, showNav } from "stores.js";

  import drawers from "examples/navigation-drawers.txt";
</script>

<Checkbox
  bind:checked={$showNav}
  label="Show drawer"
  on:change={persistent.update} />
<Checkbox
  bind:checked={$elevation}
  label="With elevation"
  on:change={elevation.update} />
<Checkbox
  bind:checked={$right}
  label="Placed on the right"
  on:change={right.update} />
<Checkbox
  bind:checked={$persistent}
  label="Persistent"
  on:change={persistent.update} />

<Code code={drawers} />
