<script>
  import DatePicker from "smelte/src/components/DatePicker";
  let selected;
</script>

<small>I selected {selected ? selected.toLocaleDateString() : "nothing"}</small>
<DatePicker on:change={i => selected = i } />