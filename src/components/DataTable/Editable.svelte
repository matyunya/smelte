<script>
  import { ClassBuilder } from "../../utils/classes.js";
  import { createEventDispatcher } from "svelte";
  import TextField from "../TextField";
  import Icon from "../Icon";
  import { writable } from "svelte/store";
  import { editable as config } from "./config";
  import smelter from "../../utils/smelter";

  export let item = {};
  export let column = {};
  export let width = 300;
  export let editing = false;

  const dispatch = createEventDispatcher();

  const store = writable($$props.config || config);

  $: smelte = smelter($store, $$props);
</script>

<div class={smelte.root.class} style="width: {width}px">
  <slot>
    <TextField
      value={item[column.field]}
      textarea={column.textarea}
      on:change
      on:blur={({ target }) => {
        editing = false;
        dispatch("update", {
          item,
          column,
          value: target.value
        });
      }}
    />
  </slot>
</div>
