<script>
  import Select from "components/Select";
  import TextField from "components/TextField";
  import Card from "components/Card";
  import Checkbox from "components/Checkbox";
  import Code from "docs/Code.svelte";
  import selects from "examples/selects.txt";

  let value1 = "";
  let value2 = "";
  let value3 = "";
  let value4 = "";

  let showList = false;

  let error = "";

  const items = [
    { value: 1, text: "One" },
    { value: 2, text: "Two" },
    { value: 3, text: "Three" },
    { value: 4, text: "Four" },
  ];

  let selectedItems = [];

  function toggle(i) {
    return v => selectedItems = v.detail
      ? selectedItems.concat(i)
      : selectedItems.filter(si => si !== i);
  }

  $: selectedLabel = selectedItems.map(i => i.text).join(", ");

  const label = "A select";
</script>

<p>
  One may bind to a select via
  <span class="code-inline">on:change</span>
  event.
</p>
<small>Selected: {value1 || 'nothing'}</small>
<Select {label} {items} on:change={v => (value1 = v.detail)} />

<Code code={selects} />

<p>
  Or through binding
  <span class="code-inline">on:value</span>
  .
</p>
<small>Selected: {value2 || 'nothing'}</small>
<Select color="success" bind:value={value2} {label} {items} />

<p>Select may be outlined.</p>
<Select bind:value={value2} outlined {label} {items} />

<p>Select may even be an autocomplete search component.</p>
<small>Selected: {value3 || 'nothing'}</small>
<Select bind:value={value3} outlined autocomplete {label} {items} />

<p>Custom options slot</p>

<Select
  {selectedLabel}
  outlined
  color="error"
  inputClasses={i => i.replace('rounded-t', 'rounded-full')}
  appendClasses={i => i.replace('text-gray-700', 'text-error-700')}
  label="Categories"
  {items}
>
  <div slot="options" class="shadow rounded px-2 py-4 mt-0" on:click|stopPropagation>
      {#each items as item}
        <Checkbox
          checked={selectedItems.includes(item)}
          class="block my-2"
          color="error"
          label={item.text}
          on:change={toggle(item)}
        />
      {/each}
  </div>
</Select>

<p>With error message</p>

<TextField label="Error" bind:value={error} />

<Select bind:value={value4} outlined autocomplete {label} {items} {error} />
