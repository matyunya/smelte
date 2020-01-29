<script>
  import Slider from "components/Slider";
  import Checkbox from "components/Checkbox";
  import Code from "docs/Code.svelte";
  import sliders from "examples/sliders.txt";

  let value = 0;
  let value2 = 0;
  let value3 = 0;
  let disabled = false;
</script>

<div class="my-4">
  <Checkbox label="Disabled" bind:checked={disabled} />
</div>

<h6>Basic</h6>

<small>Value: {value}</small>

<Slider min="0" max="100" bind:value {disabled} />

<h6 class="mt-8">With color prop</h6>

<small>Value: {value3}</small>

<Slider color="secondary" min="0" max="100" bind:value={value3} {disabled} />

<h6 class="mt-8">With steps</h6>

<small>Value: {value2}</small>

<Slider min="0" step="20" max="100" bind:value={value2} {disabled} />

<Code code={sliders} />