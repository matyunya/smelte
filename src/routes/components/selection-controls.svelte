<script>
  import Checkbox from "components/Checkbox";
  import { RadioButtonGroup } from "components/RadioButton";
  import Switch from "components/Switch";
  import Icon from "components/Icon";

  import Code from "docs/Code.svelte";
  import code from "examples/checkboxes.txt";
  import PropsTable from "docs/PropsTable.svelte";

  let checked = false;
  let selected1 = false;
  let selected2 = false;
  let selected3 = false;

  let switch1 = false;
  let switch2 = false;
</script>

<blockquote
  class="pl-8 mt-2 mb-10 border-l-8 border-primary-300 text-lg"
  cite="https://material.io/components/selection-controls/">
  <p>Selection controls allow the user to select options.</p>
</blockquote>

<h5 class="pb-8 pt-10" id="checkboxes">Checkboxes</h5>

<small>Value: {checked}</small>

<Checkbox bind:checked label="A checkbox" />
<Checkbox bind:checked color="secondary" label="A colored checkbox" />
<Checkbox bind:checked disabled label="A disabled checkbox" />

<PropsTable data={[
    { prop: "value", description: "Input value", type: "Boolean", default: "null" },
    { prop: "color", description: "Color variant, accepts any of the main colors described in Tailwind config", type: "String", default: "primary" },
    { prop: "label", description: "Input label", type: "String", default: "Empty&nbsp;string" },
    { prop: "checked", description: "Checked state", default: false, type: "Boolean", },
    { prop: "disabled", description: "Disabled state", default: false, type: "Boolean", },
    { prop: "classes", description: "Classes to pass down to checkbox wrapper", default: "inline-flex items-center mb-2 cursor-pointer z-10", type: "String", },
  ]}
/>

<h5 class="pb-8 pt-10" id="radio-buttons">Radio buttons</h5>

<small>Selected: {selected1}</small>
<RadioButtonGroup
  bind:selected={selected1}
  name="test"
  items={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]} />

<small>Selected: {selected2}</small>
<RadioButtonGroup
  bind:selected={selected2}
  name="Colored test"
  color="blue"
  items={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]} />

<small>Selected: {selected3}</small>
<RadioButtonGroup
  bind:selected={selected3}
  name="test-disabled"
  disabled
  items={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]} />

<PropsTable data={[
    { prop: "value", description: "Input value", type: "Boolean", default: "null" },
    { prop: "color", description: "Color variant, accepts any of the main colors described in Tailwind config", type: "String", default: "primary" },
    { prop: "label", description: "Input label", type: "String", default: "Empty&nbsp;string" },
    { prop: "selected", description: "Selected state", default: false, type: "Boolean", },
    { prop: "disabled", description: "Disabled state", default: false, type: "Boolean", },
    { prop: "classes", description: "Classes to pass down to radio button wrapper", default: "inline-flex block items-center mb-2 cursor-pointer z-0", type: "String", },
  ]}
/>

<h5 class="pb-8 pt-10" id="switches">Switches</h5>

<small class="mb-2 mt-10">Value: {switch1}</small>

<Switch bind:value={switch1} />


<small class="mb-2 mt-10">Value: {switch2}</small>

<Switch bind:value={switch2} color="error" />

<PropsTable data={[
    { prop: "value", description: "Input value", type: "Boolean", default: "null" },
    { prop: "color", description: "Color variant, accepts any of the main colors described in Tailwind config", type: "String", default: "primary" },
    { prop: "label", description: "Input label", type: "String", default: "Empty&nbsp;string" },
    { prop: "disabled", description: "Disabled state", default: false, type: "Boolean", },
    { prop: "classes", description: "Classes to pass down to checkbox wrapper", default: "inline-flex block items-center mb-2 cursor-pointer z-0", type: "String", },
    { prop: "trackClasses", description: "Track classes", default: "relative w-10 h-auto z-0 rounded-full overflow-visible flex items-center justify-center", type: "String" },
    { prop: "thumbClasses", description: "Thumb classes", default: "rounded-full p-2 w-5 h-5 absolute elevation-3 duration-100", type: "String" },
    { prop: "labelClasses", description: "Tabel classes", default: "pl-2 cursor-pointer", type: "String" },
  ]}
/>

<Code {code} />
