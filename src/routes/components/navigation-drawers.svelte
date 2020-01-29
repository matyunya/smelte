<script>
  import Checkbox from "components/Checkbox";
  import Code from "docs/Code.svelte";

  import { right, elevation, persistent, showNav } from "stores.js";

  import drawers from "examples/navigation-drawers.txt";
</script>

<Checkbox
  bind:checked={$showNav}
  label="Show drawer"
 />
<Checkbox
  bind:checked={$elevation}
  label="With elevation"
 />
<Checkbox
  bind:checked={$right}
  label="Placed on the right"
 />
<Checkbox
  bind:checked={$persistent}
  label="Persistent"
 />

<Code code={drawers} />
