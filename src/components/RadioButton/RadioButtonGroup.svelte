<script>
  import { writable } from "svelte/store";
  import { radioButtonGroup } from "./config";
  import smelter from "../../utils/smelter";
  import RadioButton from "./RadioButton.svelte";

  export let items = [];
  export let selected = "";
  export let name = "";
  export let disabled = false;
  export let color = "primary";

  const store = writable(radioButtonGroup);

  $: smelte = smelter($store, $$props);
</script>

<div class={smelte.wrapper.class}>
  {#each items as item}
    <slot {item}>
      <RadioButton
        bind:selected
        {...item}
        {color}
        name={name || `radio-${Math.random()}`}
        {disabled} />
    </slot>
  {/each}
</div>
