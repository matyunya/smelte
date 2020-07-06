<script>
  import Icon from "../Icon";
  import Ripple from "../Ripple";
  import Label from "../Checkbox/Label.svelte";
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  export let value = "";
  export let label = "";
  export let selected = false;
  export let disabled = false;
  export let color = "primary";
  export let name = "";

  function select() {
    if (disabled) return;

    selected = value;
  }

  const store = writable(config);

  $: smelte = smelter($store, {
    $$props,
    selected: selected === value,
    disabled
  });
</script>

<div class={smelte.wrapper.class} on:click={select}>
  <input
    aria-label={label}
    class="hidden"
    type="radio"
    role="radio"
    {name}
    selected={selected === value} />
  <div class={smelte.radioButton.class}>
    <Ripple {color}>
      <Icon class={smelte.icon.class}>
        {selected === value ? "radio_button_checked" : "radio_button_unchecked"}
      </Icon>
    </Ripple>
  </div>
  <slot name="label">
    <Label {disabled} {label} class={smelte.label.class} />
  </slot>
</div>
