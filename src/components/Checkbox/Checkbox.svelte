<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import Label from "./Label.svelte";
  import config from "./config";
  import smelter from "../../utils/smelter";

  import Icon from "../Icon";
  import Ripple from "../Ripple";

  export let value = "";
  export let label = "";
  export let checked = false;
  export let disabled = false;
  export let color = "primary";

  const dispatch = createEventDispatcher();

  function check() {
    if (disabled) return;

    checked = !checked;
    dispatch("change", checked);
  }

  const store = writable(config);

  $: smelte = smelter($store, {
    ...$$props,
    checked,
    value,
    disabled
  });
</script>

<div class={smelte.wrapper.class}>
  <div class={smelte.checkbox.class} on:click={check}>
    <input bind:checked class="hidden" type="checkbox" on:change {value} />
    <div class={smelte.checkboxWrapper.class}>
      <Ripple {color}>
        <Icon class={smelte.icon.class}>{checked ? "check_box" : "check_box_outline_blank"}</Icon>
      </Ripple>
    </div>
    <slot name="label">
      <Label {disabled} {label} class={smelte.label.class} />
    </slot>
  </div>
</div>
