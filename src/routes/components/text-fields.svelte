<script>
  import TextField, { Label } from "components/TextField";
  import DataTable from "components/DataTable";
  import Code from "docs/Code.svelte";
  import PropsTable from "docs/PropsTable.svelte";
  import textFields from "examples/text-fields.txt";
</script>

<blockquote
  class="pl-8 mt-2 mb-10 border-l-8 border-primary-300 text-lg"
  cite="https://material.io/components/text-fields/#">
  <p>Text fields let users enter and edit text.</p>
</blockquote>

<h6 class="mb-3 mt-6">Basic</h6>
<TextField label="Test label" />

<h6>Props</h6>
<p class="mb-5 mt-3">Inputs accept any props that a normal input element can take,
like <span class="code-inline">max-length</span> or <span class="code-inline">type</span>.</p>

<PropsTable data={[
    { prop: "value", description: "Input value", type: "Boolean", default: "null" },
    { prop: "color", description: "Color variant, accepts any of the main colors described in Tailwind config", type: "String", default: "primary" },
    { prop: "label", description: "Input label", type: "String", default: "Empty&nbsp;string" },
    { prop: "placeholder", description: "Input placeholder", type: "String", default: "Empty&nbsp;string" },
    { prop: "outlined", description: "Outlined variant", type: "Boolean", default: "false" },
    { prop: "hint", description: "Hint text appearing under the input", type: "String", default: "Empty&nbsp;string" },
    { prop: "error", description: "Error text under the input", type: "String | Boolean", default: "false" },
    { prop: "append", description: "Append icon name", type: "String", default: "Empty&nbsp;string" },
    { prop: "prepend", description: "Prepend icon name", type: "String", default: "Empty&nbsp;string" },
    { prop: "persistentHint", description: "Always show hint, not only on focus", type: "Boolean", default: "false" },
    { prop: "textarea", description: "Whether text field is textarea", type: "Boolean", default: "false" },
    { prop: "rows", description: "Rows count for textarea", type: "Integer", default: 5 },
    { prop: "select", description: "Whether text field is select", type: "Boolean", default: "false" },
    { prop: "autocomplete", description: "Whether select field is autocomplete", type: "Boolean", default: "false" },
    { prop: "noUnderline", description: "Hide focus underline element", type: "Boolean", default: "false" },
    { prop: "appendReverse", description: "Reverse appended icon", type: "Boolean", default: "false" },
    { prop: "prependReverse", description: "Reverse prepended icon", type: "Boolean", default: "false" },
    { prop: "bgColor", description: "Background color to match for outlined elevated label", type: "String", default: "white" },
    { prop: "iconClasses", description: "Classes to pass down to icon component", type: "String", default: "Empty&nbsp;string" },
  ]}
/>

<h6 class="mb-3 mt-6">With hint</h6>
<TextField label="Test label" hint="Test hint" persistentHint color="blue" />
<h6 class="mb-3 mt-6">With hint (dense)</h6>
<TextField label="Test label" hint="Test hint" persistentHint color="blue" dense />
<h6 class="mb-3 mt-6">With error</h6>
<TextField label="Test label" error="Test error" />
<h6 class="mb-3 mt-6">Outlined</h6>
<TextField label="Test label" outlined />
<h6 class="mb-3 mt-6">Outlined with hint</h6>
<TextField label="Test label" outlined hint="Test hint" />
<h6 class="mb-3 mt-6">Outlined with error</h6>
<TextField label="Test label" outlined error="Test error" />
<h6 class="mb-3 mt-6">Outlined textarea</h6>
<TextField label="Test label" textarea rows="5" outlined />
<h6 class="mb-3 mt-6">With basic validation (type="number" min="10" max="100")</h6>
<TextField label="Test label" outlined type="number" min="10" max="100" />
<h6 class="mb-3 mt-6">With icon</h6>
<TextField prepend="search" label="Icon before" />
<TextField append="search" label="Icon after" />
<h6 class="mb-3 mt-6">Disabled</h6>
<TextField disabled prepend="search" label="Icon before" />
<TextField disabled append="search" label="Icon after" />

<Code code={textFields} />
