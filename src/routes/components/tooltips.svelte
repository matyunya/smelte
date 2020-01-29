<script>
  import Tooltip from "components/Tooltip";
  import Button from "components/Button";
  import Code from "docs/Code.svelte";
  import tooltip from "examples/tooltip.txt";
</script>

<Tooltip>
  <div slot="activator">
    <Button>Hover me</Button>
  </div>
  How are you doing?
</Tooltip>

<Code code={tooltip} />