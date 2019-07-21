<script>
  import Select from "components/Select";
  import Code from "components/Code";
  import Checkbox from "components/Checkbox";
  import Card from "components/Card";
  import selects from "examples/selects.txt";

  let value1 = "";
  let value2 = "";
  let value3 = "";
  let value4 = "";

  let showList = false;

  const items = [
    { value: 1, text: "One" },
    { value: 2, text: "Two" },
    { value: 3, text: "Three" },
    { value: 4, text: "Four" },
  ];

  let selectedItems = [];

  function toggle(i) {
    return v => v.detail
      ? selectedItems.push(i)
      : selectedItems = selectedItems.filter(si => si !== i);
  }

  $: selectedLabel = selectedItems.map(i => i.text).join(", ");

  const label = "A select";
</script>

<p>
  One may bind to a select via
  <span class="code-inline">on:change</span>
  event.
</p>
<caption>Selected: {value1 || 'nothing'}</caption>
<Select {label} {items} on:change={v => (value1 = v.detail)} />

<Code code={selects} />

<p>
  Or through binding
  <span class="code-inline">on:value</span>
  .
</p>
<caption>Selected: {value2 || 'nothing'}</caption>
<Select color="success" bind:value={value2} {label} {items} />

<p>Select may be outlined.</p>
<Select bind:value={value2} outlined {label} {items} />

<p>Select may even be an autocomplete search component.</p>
<caption>Selected: {value3 || 'nothing'}</caption>
<Select bind:value={value3} outlined autocomplete {label} {items} />

<p>Custom options slot</p>

<Select
  {selectedLabel}
  outlined
  inputWrapperClasses={i => `${i} rounded-full`}
  label="Categories"
  {items}
>
  <div slot="options" class="elevation-3 rounded px-2 py-4 mt-0" on:click|stopPropagation>
      {#each items as item}
        <Checkbox
          value={selectedItems.includes(item)}
          class="block my-2"
          label={item.text}
          on:change={toggle(item)}
        />
      {/each}
  </div>
</Select>