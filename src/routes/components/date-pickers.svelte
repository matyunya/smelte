<script>
  import DatePicker from "components/DatePicker";
  import Code from "docs/Code.svelte";
  import datepickers from "examples/date-pickers.txt";

  let selected;
</script>

<div>
<small>I selected {selected ? selected.toLocaleDateString() : "nothing"}</small>
</div>
<DatePicker on:change={i => selected = i.detail } />

<Code code={datepickers} />